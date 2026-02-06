<template>
  <div>
    <MainSection />
    <AboutSection />
    <ServiceSection />
    <PortfolioSection />
  </div>
</template>

<script>
  import MainSection from "@/components/photography/MainSection";
  import AboutSection from "@/components/photography/AboutSection";
  import ServiceSection from "@/components/photography/ServiceSection";
  import PortfolioSection from "@/components/photography/PortfolioSection";
  // import ContactSection from "@/components/photography/ContactSection";

  export default {
    name: "IndexPage",
    components: {
      MainSection,
      AboutSection,
      ServiceSection,
      PortfolioSection,
      // ContactSection,
    },
    layout: "mainlayout",
  };
</script>
