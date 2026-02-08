<template>
  <div class="min-h-screen">
    <Navbar
      ref="navbar"
      :nav-items="navItems"
      @mobile-menu-toggle="handleMobileMenuToggle"
    />
    <div
      :class="[
        'transition duration-200 ease-out',
        isContentBlurred ? 'select-none blur-sm' : '',
      ]"
      @click.capture="handleContentClick"
    >
      <slot />
      <AppFooter />
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import AppFooter from "@/components/AppFooter";

  export default {
    name: "AppShell",
    components: {
      Navbar,
      AppFooter,
    },
    props: {
      navItems: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isContentBlurred: false,
      };
    },
    methods: {
      handleContentClick(event) {
        if (!this.isContentBlurred) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.closeMobileMenu();
      },
      handleMobileMenuToggle(isActive) {
        this.isContentBlurred = Boolean(isActive);
      },
      closeMobileMenu() {
        if (
          this.$refs.navbar &&
          typeof this.$refs.navbar.closeMenu === "function"
        ) {
          this.$refs.navbar.closeMenu();
        }
      },
    },
  };
</script>
