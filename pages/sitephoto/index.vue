<template><SitePhotoLanding /></template>
<script>
  import SitePhotoLanding from "@/components/photography/SitePhotoLanding.vue";
  import { BRAND_LINK } from "@/constants/link";

  const baseUrl = BRAND_LINK.website.replace(/\/$/, "");
  const pageUrl = `${baseUrl}/sitephoto/`;
  const ogImage = `${baseUrl}/sitephoto-og.jpg`;

  export default {
    components: { SitePhotoLanding },
    layout: "mainlayout",
    head() {
      const title = this.$t("sitephoto.meta.title");
      const description = this.$t("sitephoto.meta.description");
      const ogTitle = this.$t("sitephoto.meta.ogTitle");
      const ogDescription = this.$t("sitephoto.meta.ogDescription");
      const ogImageAlt = this.$t("sitephoto.meta.ogImageAlt");
      return {
        title,
        meta: [
          { hid: "description", name: "description", content: description },
          { hid: "og:title", property: "og:title", content: ogTitle },
          {
            hid: "og:description",
            property: "og:description",
            content: ogDescription,
          },
          { hid: "og:image", property: "og:image", content: ogImage },
          {
            hid: "og:image:width",
            property: "og:image:width",
            content: "1200",
          },
          {
            hid: "og:image:height",
            property: "og:image:height",
            content: "630",
          },
          {
            hid: "og:image:alt",
            property: "og:image:alt",
            content: ogImageAlt,
          },
          { hid: "og:url", property: "og:url", content: pageUrl },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image",
          },
          { hid: "twitter:title", name: "twitter:title", content: ogTitle },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: ogDescription,
          },
          { hid: "twitter:image", name: "twitter:image", content: ogImage },
        ],
        link: [{ hid: "canonical", rel: "canonical", href: pageUrl }],
        script: [
          {
            hid: "ld-sitephoto-service",
            type: "application/ld+json",
            json: {
              "@context": "https://schema.org",
              "@type": "Service",
              name: this.$t("sitephoto.meta.schemaName"),
              serviceType: this.$t("sitephoto.meta.schemaServiceType"),
              description,
              url: pageUrl,
              image: ogImage,
              areaServed: { "@type": "City", name: "台北市" },
              provider: {
                "@type": "Organization",
                name: "方生糖",
                url: `${baseUrl}/`,
                sameAs: [BRAND_LINK.instagram, BRAND_LINK.behance],
              },
            },
          },
        ],
      };
    },
  };
</script>
