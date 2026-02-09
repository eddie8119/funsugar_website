<template>
  <div class="relative" @mouseenter="openDropdown" @mouseleave="scheduleClose">
    <button class="mx-4 cursor-pointer text-sm font-medium text-gray-700">
      {{ label }}
    </button>
    <DropdownPanel :visible="isOpen" align="center">
      <component
        :is="item.to ? 'nuxt-link' : 'a'"
        v-for="item in items"
        :key="item.label"
        :to="item.to"
        :href="item.href"
        class="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        role="menuitem"
      >
        {{ item.label }}
      </component>
    </DropdownPanel>
  </div>
</template>

<script>
  import DropdownPanel from "@/components/core/DropdownPanel.vue";

  export default {
    name: "NavDropdown",
    components: {
      DropdownPanel,
    },
    props: {
      label: {
        type: String,
        default: "",
      },
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isOpen: false,
        dropdownTimeout: null,
        dropdownId: Symbol("nav-dropdown"),
      };
    },
    mounted() {
      if (process.client) {
        window.addEventListener("nav-dropdown-open", this.handleExternalOpen);
      }
    },
    beforeDestroy() {
      if (process.client) {
        window.removeEventListener(
          "nav-dropdown-open",
          this.handleExternalOpen
        );
      }
    },
    methods: {
      openDropdown() {
        clearTimeout(this.dropdownTimeout);
        this.isOpen = true;
        if (process.client) {
          window.dispatchEvent(
            new CustomEvent("nav-dropdown-open", {
              detail: this.dropdownId,
            })
          );
        }
      },
      scheduleClose() {
        this.dropdownTimeout = setTimeout(() => {
          this.isOpen = false;
        }, 200);
      },
      handleExternalOpen(event) {
        if (event.detail !== this.dropdownId) {
          this.isOpen = false;
          clearTimeout(this.dropdownTimeout);
        }
      },
    },
  };
</script>
