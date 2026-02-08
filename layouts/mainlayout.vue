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
