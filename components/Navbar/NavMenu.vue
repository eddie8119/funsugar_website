<template>
  <div class="flex items-center md:flex-1 md:justify-end">
    <button
      class="relative z-50 flex h-10 w-10 items-center justify-center shadow-sm md:hidden"
      type="button"
      aria-label="Toggle navigation"
      aria-controls="primary-navigation"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <img
        src="@/assets/icons/Hamburger.svg"
        alt="Open navigation"
        class="h-5 w-5"
      />
    </button>
    <transition name="mobile-nav-slide">
      <nav
        v-show="isMenuOpen || isDesktop"
        id="primary-navigation"
        :aria-expanded="isMenuOpen"
        :class="[
          'absolute left-0 right-0 top-full mt-4 flex-col items-center gap-4 rounded-2xl bg-white/95 p-5 shadow-lg md:static md:mt-0 md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none',
          isDesktop ? 'md:flex' : 'flex',
          !isDesktop && !isMenuOpen
            ? 'pointer-events-none opacity-0'
            : 'opacity-100',
        ]"
      >
        <NavLinkList
          :items="navItems"
          class="w-full border-b border-black/10 pb-4 text-center md:flex md:flex-1 md:justify-center md:border-none md:p-0"
          @click.native="closeMenu"
        />
        <NavActions
          class="w-full md:ml-auto md:w-auto"
          :dropdown-items="dropdownItems"
          :cta="contactCta"
        />
      </nav>
    </transition>

    <transition name="fade">
      <div
        v-if="isMenuOpen && !isDesktop"
        class="fixed inset-0 z-40 md:hidden"
        @click="closeMenu"
      />
    </transition>
  </div>
</template>

<script>
  import NavLinkList from "@/components/Navbar/NavLinkList.vue";
  import NavActions from "@/components/Navbar/NavActions.vue";

  export default {
    name: "NavMenu",
    components: {
      NavLinkList,
      NavActions,
    },
    props: {
      navItems: {
        type: Array,
        default: () => [],
      },
      dropdownItems: {
        type: Array,
        default: () => [],
      },
      contactCta: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ["mobile-menu-toggle"],
    data() {
      return {
        isMenuOpen: false,
        isDesktop: false,
      };
    },
    computed: {
      route() {
        return this.$route.path;
      },
    },
    watch: {
      route() {
        this.closeMenu();
      },
    },
    mounted() {
      this.handleResize();
      window.addEventListener("keydown", this.handleKeydown);
      window.addEventListener("resize", this.handleResize);
      this.notifyMobileMenuState();
    },
    beforeDestroy() {
      window.removeEventListener("keydown", this.handleKeydown);
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      toggleMenu() {
        if (this.isDesktop) {
          return;
        }
        this.isMenuOpen = !this.isMenuOpen;
        this.notifyMobileMenuState();
      },
      closeMenu() {
        this.isMenuOpen = false;
        this.notifyMobileMenuState();
      },
      handleKeydown(event) {
        if (event.key === "Escape") {
          this.closeMenu();
        }
      },
      handleResize() {
        this.isDesktop = window.innerWidth >= 768;
        if (this.isDesktop) {
          this.closeMenu();
        }
        this.notifyMobileMenuState();
      },
      notifyMobileMenuState() {
        this.$emit("mobile-menu-toggle", this.isMenuOpen && !this.isDesktop);
      },
    },
  };
</script>

<style scoped>
  .mobile-nav-slide-enter-active,
  .mobile-nav-slide-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .mobile-nav-slide-enter-from,
  .mobile-nav-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
