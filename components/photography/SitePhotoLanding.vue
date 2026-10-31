<template>
  <main id="top" class="bg-white text-[#202020]">
    <SitePhotoNav />
    <SitePhotoHero />
    <SitePhotoWorks />
    <SitePhotoStory />
    <SitePhotoPlans @select="choosePlan" />
    <SitePhotoApply ref="apply" />
  </main>
</template>

<script>
  import SitePhotoNav from "@/components/photography/SitePhotoNav.vue";
  import SitePhotoHero from "@/components/photography/SitePhotoHero.vue";
  import SitePhotoWorks from "@/components/photography/SitePhotoWorks.vue";
  import SitePhotoStory from "@/components/photography/SitePhotoStory.vue";
  import SitePhotoPlans from "@/components/photography/SitePhotoPlans.vue";
  import SitePhotoApply from "@/components/photography/SitePhotoApply.vue";

  export default {
    components: {
      SitePhotoNav,
      SitePhotoHero,
      SitePhotoWorks,
      SitePhotoStory,
      SitePhotoPlans,
      SitePhotoApply,
    },
    methods: {
      choosePlan(id) {
        this.$refs.apply.choosePlan(id);
      },
    },
  };
</script>
