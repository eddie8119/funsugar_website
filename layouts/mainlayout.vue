<template>
  <AppShell :nav-items="navItems">
    <Nuxt />
  </AppShell>
</template>

<script>
  import AppShell from "@/components/layout/AppShell.vue";

  export default {
    components: {
      AppShell,
    },
    computed: {
      navItems() {
        const currentPath = this.$route.path;

        if (currentPath.startsWith("/photography")) {
          return [
            { label: "服務問答", to: "/photography/term-of-service" },
            {
              label: "慈善捐款兌換",
              to: { path: "/photography", hash: "#services-section" },
            },
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
