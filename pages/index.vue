<template>
  <div>
    <MainSection />
    <AboutSection />
    <ServiceSection />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>

<script>
  import MainSection from "@/components/landPage/MainSection";
  import AboutSection from "@/components/landPage/AboutSection";
  import ServiceSection from "@/components/landPage/ServiceSection";
  import PortfolioSection from "@/components/landPage/PortfolioSection";
  import ContactSection from "@/components/landPage/ContactSection";

  export default {
    layout: "mainlayout",
    name: "IndexPage",
    components: {
      MainSection,
      AboutSection,
      ServiceSection,
      PortfolioSection,
      ContactSection,
    },
  };
</script>
