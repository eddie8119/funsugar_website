<template>
  <div>
    <NavbarElement />
    <Nuxt />
    <FooterElement />
  </div>
</template>

<script>
  import NavbarElement from "@/components/NavbarElement";
  import FooterElement from "@/components/FooterElement";

  export default {
    components: {
      NavbarElement,
      FooterElement,
    },
  };
</script>
