<template>
  <main class="thanks">
    <h1>{{ $t("sitephoto.thanks.title") }}</h1>
    <p>{{ $t("sitephoto.thanks.p1") }}</p>
    <p>{{ $t("sitephoto.thanks.p2") }}</p>
    <a href="/sitephoto/">{{ $t("sitephoto.thanks.back") }}</a>
  </main>
</template>
<script>
  export default {
    layout: "mainlayout",
    head() {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex, follow" }],
      };
    },
  };
</script>
<style scoped>
  .thanks {
    max-width: 700px;
    margin: 15vh auto;
    padding: 40px 24px;
    min-height: 50vh;
  }
  .thanks h1 {
    font-size: 42px;
    font-weight: 800;
  }
  .thanks p {
    line-height: 2;
    color: #555;
  }
  .thanks a {
    display: inline-block;
    background: #f9d236;
    padding: 14px 22px;
    margin-top: 25px;
    font-weight: 700;
  }
</style>
