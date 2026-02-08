<template>
  <a
    :href="href"
    :target="targetAttr"
    :rel="relAttr"
    :class="[
      'group inline-flex items-center rounded-full px-4 py-2 text-sm font-medium uppercase transition md:text-base',
      reverse ? 'flex-row-reverse' : 'flex-row',
      variantClasses.wrapper,
    ]"
  >
    <span :class="[reverse ? 'mr-2' : 'ml-2', variantClasses.label]">{{
      label
    }}</span>
    <span
      :class="[
        reverse ? 'mr-4' : 'ml-4',
        reverse ? 'rotate-180' : '',
        'flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 ease-out',
        variantClasses.icon,
        reverse
          ? 'group-hover:-translate-x-1 group-active:-translate-x-1.5'
          : 'group-hover:translate-x-1 group-active:translate-x-1.5',
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </span>
  </a>
</template>

<script>
  export default {
    name: "PrimaryCta",
    props: {
      href: {
        type: String,
        default: "#",
      },
      label: {
        type: String,
        default: "體驗版，立即感受",
      },
      reverse: {
        type: Boolean,
        default: false,
      },
      newTab: {
        type: Boolean,
        default: false,
      },
      variant: {
        type: String,
        default: "primary",
        validator(value) {
          return ["primary", "secondary"].includes(value);
        },
      },
    },
    computed: {
      targetAttr() {
        return this.newTab ? "_blank" : "_self";
      },
      relAttr() {
        return this.newTab ? "noopener noreferrer" : null;
      },
      variantClasses() {
        const styles = {
          primary: {
            wrapper: "bg-yellow-500 text-black  hover:shadow-sm ",
            icon: "bg-white",
            label: "text-black",
          },
          secondary: {
            wrapper:
              "bg-black text-white shadow-lg hover:bg-gray-900 border border-transparent",
            icon: "bg-white text-black",
            label: "text-white",
          },
        };
        return styles[this.variant] || styles.primary;
      },
    },
  };
</script>

<style scoped></style>
