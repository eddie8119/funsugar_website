<template>
  <div
    class="flex w-full flex-col items-stretch gap-4 md:ml-auto md:w-auto md:flex-row md:items-center"
  >
    <NavDropdown :label="dropdownLabel" :items="dropdownItems" />
    <a
      class="btn w-full text-center md:w-auto"
      :href="cta.href"
      target="_blank"
      rel="noopener"
    >
      {{ cta.label }}
    </a>
  </div>
</template>

<script>
  import NavDropdown from "@/components/Navbar/NavDropdown.vue";

  export default {
    name: "NavActions",
    components: {
      NavDropdown,
    },
    props: {
      dropdownItems: {
        type: Array,
        default: () => [],
      },
      dropdownLabel: {
        type: String,
        default: "服務",
      },
      cta: {
        type: Object,
        default: () => ({
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=funsugar8119@gmail.com&body=詢問方生糖:",
          label: "攝影預約",
        }),
      },
    },
  };
</script>
