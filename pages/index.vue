<template>
  <div>
    <Hero />
    <About />
    <Feature />
    <VideoTutorials />
    <!-- <Showcase /> -->
    <Experience />
  </div>
</template>

<script>
  import Hero from "@/components/application/Hero";
  import About from "@/components/application/About";
  import Feature from "@/components/application/Feature";
  import VideoTutorials from "@/components/application/VideoTutorials";
  import Experience from "@/components/application/Experience";

  export default {
    components: {
      Hero,
      About,
      Feature,
      VideoTutorials,
      Experience,
    },
    layout: "mainlayout",
  };
</script>

<style lang="scss">
  @use "~/assets/styles/designer-helper";
</style>
