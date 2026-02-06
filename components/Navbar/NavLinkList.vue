<template>
  <nav
    class="flex flex-col gap-4 text-base text-gray-700 md:flex-row md:items-center"
  >
    <component
      :is="item.to ? 'nuxt-link' : 'a'"
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :href="item.href"
      class="hover:text-black"
      role="menuitem"
    >
      {{ item.label }}
    </component>
  </nav>
</template>

<script>
  export default {
    name: "NavLinkList",
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>
