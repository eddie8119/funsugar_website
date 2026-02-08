export default ({ app, $config }) => {
  const measurementId = $config?.gaMeasurementId;

  if (!measurementId || typeof window === "undefined") {
    return;
  }

  const insertScriptOnce = (id, src) => {
    if (document.getElementById(id)) {
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.id = id;
    script.src = src;
    document.head.appendChild(script);
  };

  insertScriptOnce(
    "ga-script",
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  );

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true, send_page_view: false });

  const trackPage = (to) => {
    if (!window.gtag) {
      return;
    }
    window.gtag("event", "page_view", {
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href,
    });
  };

  app.router.afterEach((to, from) => {
    if (to.path === from.path && to.hash !== from.hash) {
      return;
    }
    trackPage(to);
  });
};
