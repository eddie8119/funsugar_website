<template><SitePhotoLanding /></template>
<script>
  import SitePhotoLanding from "@/components/photography/SitePhotoLanding.vue";
  export default {
    components: { SitePhotoLanding },
    layout: "mainlayout",
    head() {
      return {
        title: this.$t("sitephoto.meta.title"),
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.$t("sitephoto.meta.description"),
          },
        ],
      };
    },
  };
</script>
