<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-white/30 px-4 backdrop-blur lg:px-20"
  >
    <div class="flex items-center justify-between">
      <NavBrand />
      <button
        class="md:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="primary-navigation"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-bars text-2xl" />
      </button>
      <nav
        id="primary-navigation"
        :aria-expanded="isMenuOpen"
        :class="[
          'absolute left-0 right-0 translate-y-16 flex-col items-center gap-4 bg-white bg-opacity-90 p-4 shadow md:static md:flex md:flex-1 md:translate-y-0 md:flex-row md:items-center md:justify-center md:gap-8 md:bg-opacity-0 md:bg-none md:shadow-none',
          isMenuOpen ? 'flex' : 'hidden md:flex',
        ]"
      >
        <NavLinkList
          :items="navItems"
          class="w-full border-b border-black/10 pb-4 text-center md:flex md:flex-1 md:justify-center md:border-none md:p-0"
        />
        <NavActions
          class="md:ml-auto"
          :dropdown-items="dropdownItems"
          :cta="contactCta"
        />
      </nav>
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
  import NavLinkList from "@/components/Navbar/NavLinkList.vue";
  import NavActions from "@/components/Navbar/NavActions.vue";

  export default {
    name: "Navbar",
    components: {
      CommissionForm,
      NavBrand,
      NavLinkList,
      NavActions,
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
        isMenuOpen: false,
        dropdownItems: [
          { label: "應用程式", to: "/" },
          { label: "室內攝影", to: "/photography" },
        ],
        contactCta: {
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=funsugar8119@gmail.com&body=詢問方生糖:",
          label: "攝影預約",
        },
      };
    },

    computed: {
      route() {
        return this.$route.path;
      },
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
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
</style>
