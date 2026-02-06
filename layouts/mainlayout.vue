<template>
  <div>
    <Navbar :nav-items="navItems" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import AppFooter from "@/components/AppFooter";

  export default {
    components: {
      Navbar,
      AppFooter,
    },
    computed: {
      navItems() {
        const currentPath = this.$route.path;

        if (currentPath.startsWith("/photography")) {
          return [
            { label: "新居婚紗", to: "/photography/new-home" },
            { label: "服務問答", to: "/photography/term-of-service" },
          ];
        }
        // if (currentPath.startsWith("/")) {
        //   return [{ label: "常見問題", to: "/application/question" }];
        // }

        return [];
      },
    },
  };
</script>
