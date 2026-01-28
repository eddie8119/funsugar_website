<template>
  <div>
    <div
      class="fixed top-0 left-0 z-50 flex w-screen justify-between bg-white px-4 py-1 lg:px-20"
    >
      <!-- Logo start -->
      <NavBrand />

      <button role="menubar" class="md:hidden" @click="navToggle()">
        <i class="fa-solid fa-bars text-2xl"></i>
      </button>
      <div
        class="absolute left-0 right-0 hidden translate-y-16 flex-col items-center gap-4 bg-white bg-opacity-90 p-4 shadow md:static md:flex md:translate-y-0 md:flex-row md:bg-opacity-0 md:bg-none md:shadow-none"
        role="menu"
        aria-expanded="false"
      >
        <NavDropdown label="室內攝影" :items="dropdownItems" />

        <a
          class="btn"
          role="menuitem"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=funsugar8119@gmail.com&body=詢問方生糖:"
          target="_blank"
        >
          攝影預約
        </a>
      </div>
      <transition name="fade" mode="out-in">
        <div
          class="modal-overlay z-5 absolute h-[120vh] w-[120vw]"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
      <transition name="fade" mode="out-in" v-if="showModal">
        <CommissionForm />
      </transition>
    </div>
  </div>
</template>

<script>
  import CommissionForm from "@/components/Dialog/CommissionForm";
  import NavBrand from "@/components/Navbar/NavBrand.vue";
  import NavDropdown from "@/components/Navbar/NavDropdown.vue";

  export default {
    name: "Navbar",
    data() {
      return {
        showModal: false,
        dropdownItems: [
          { label: "關於", href: "#services-section" },
          { label: "新居婚紗", to: "/new-home" },
          { label: "服務問答", to: "/term-of-service" },
        ],
      };
    },
    components: {
      CommissionForm,
      NavBrand,
      NavDropdown,
    },

    computed: {
      route() {
        return this.$route.path;
      },
    },
    methods: {
      // Toogle navbar mode
      navToggle() {
        let menu = document.querySelector("[role='menu']");
        let isExpanded = menu.getAttribute("aria-expanded");
        menu.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
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
