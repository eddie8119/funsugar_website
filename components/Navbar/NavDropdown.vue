<template>
  <div class="relative" @mouseenter="openDropdown" @mouseleave="scheduleClose">
    <button class="mx-4 cursor-pointer">
      {{ label }}
    </button>
    <div
      v-if="isOpen"
      class="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
    >
      <component
        v-for="item in items"
        :is="item.to ? 'nuxt-link' : 'a'"
        :key="item.label"
        :to="item.to"
        :href="item.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        {{ item.label }}
      </component>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavDropdown",
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
      };
    },
    methods: {
      openDropdown() {
        clearTimeout(this.dropdownTimeout);
        this.isOpen = true;
      },
      scheduleClose() {
        this.dropdownTimeout = setTimeout(() => {
          this.isOpen = false;
        }, 200);
      },
    },
  };
</script>
