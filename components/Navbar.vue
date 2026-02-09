<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-white/30 px-4 py-3 backdrop-blur lg:px-20"
  >
    <div class="relative flex w-full items-center justify-between gap-4">
      <NavBrand />

      <!-- Centered nav links on desktop -->
      <div
        class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
      >
        <!-- <NavLinkList :items="resolvedNavItems" class="gap-6" /> -->
      </div>

      <div class="flex items-center gap-4">
        <NavMenu
          ref="navMenu"
          :nav-items="resolvedNavItems"
          :dropdown-items="resolvedDropdownItems"
          :contact-cta="resolvedContactCta"
          @mobile-menu-toggle="onMobileMenuToggle"
        />
        <LanguageSwitcher />
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div
        v-if="showModal"
        class="modal-overlay z-5 absolute h-[120vh] w-[120vw]"
        @click="showModal = false"
      />
    </transition>
    <transition v-if="showModal" name="fade" mode="out-in">
      <CommissionForm />
    </transition>
  </header>
</template>

<script>
  import CommissionForm from "@/components/Dialog/CommissionForm";
  import NavBrand from "@/components/Navbar/NavBrand.vue";
  import NavMenu from "@/components/Navbar/NavMenu.vue";

  import LanguageSwitcher from "@/components/Navbar/LanguageSwitcher.vue";

  export default {
    name: "Navbar",
    components: {
      CommissionForm,
      NavBrand,
      NavMenu,

      LanguageSwitcher,
    },
    props: {
      navItems: {
        type: Array,
        default() {
          return [
            { label: "新居婚紗", to: "/photography/new-home" },
            { label: "服務問答", to: "/photography/term-of-service" },
          ];
        },
      },
    },
    data() {
      return {
        showModal: false,
        dropdownItems: [
          { label: "KaiJi 開工大吉", to: "/" },
          { label: "室內攝影", to: "/photography" },
        ],
        contactCta: {
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=funsugar8119@gmail.com&body=詢問方生糖:",
          label: "預約",
        },
      };
    },
    computed: {
      navCopy() {
        const locale = this.$i18n?.locale;
        return this.$i18n?.messages?.[locale]?.nav || {};
      },
      resolvedNavItems() {
        return this.navCopy.links || this.navItems;
      },
      resolvedDropdownItems() {
        return this.navCopy.dropdown || this.dropdownItems;
      },
      resolvedContactCta() {
        if (this.navCopy.cta) {
          return {
            ...this.contactCta,
            label: this.navCopy.cta,
          };
        }
        return this.contactCta;
      },
    },
    methods: {
      closeMenu() {
        if (
          this.$refs.navMenu &&
          typeof this.$refs.navMenu.closeMenu === "function"
        ) {
          this.$refs.navMenu.closeMenu();
        }
      },
      onMobileMenuToggle(isOpen) {
        this.$emit("mobile-menu-toggle", isOpen);
      },
    },
  };
</script>

<style scoped>
  .modal-overlay {
    margin-left: -80px;
    margin-top: -20px;
    background-color: rgba(0, 0, 0, 0.3);
  }

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
