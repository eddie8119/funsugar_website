<template>
  <div
    class="flex w-full flex-col items-stretch gap-4 md:ml-auto md:w-auto md:flex-row md:items-center"
  >
    <NavDropdown :label="resolvedDropdownLabel" :items="dropdownItems" />
    <a
      class="btn w-full text-center md:w-auto"
      :href="resolvedCta.href"
      target="_blank"
      rel="noopener"
    >
      {{ resolvedCta.label }}
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
        default: "",
      },
      cta: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      navCopy() {
        const locale = this.$i18n?.locale;
        return this.$i18n?.messages?.[locale]?.nav || {};
      },
      resolvedDropdownLabel() {
        return this.dropdownLabel || this.navCopy.dropdownLabel || "";
      },
      resolvedCta() {
        if (Object.keys(this.cta || {}).length) {
          return this.cta;
        }
        if (this.navCopy.cta) {
          return {
            href: "#contact",
            label: this.navCopy.cta,
          };
        }
        return {
          href: "#contact",
          label: "",
        };
      },
    },
  };
</script>
