<template>
  <transition name="fade">
    <div v-if="visible" :class="panelClasses">
      <slot />
    </div>
  </transition>
</template>

<script>
  export default {
    name: "DropdownPanel",
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      align: {
        type: String,
        default: "right",
        validator(value) {
          return ["left", "right", "center"].includes(value);
        },
      },
      panelClass: {
        type: String,
        default: "",
      },
    },
    computed: {
      panelClasses() {
        const base =
          "absolute z-50 mt-8 inline-flex w-auto min-w-fit flex-col gap-2 rounded-xl border border-black/10 bg-white p-3 text-sm font-medium tracking-wide text-gray-700 shadow-lg";
        const alignment =
          this.align === "left"
            ? "left-0"
            : this.align === "center"
              ? "left-1/2 -translate-x-1/2"
              : "right-0";
        return `${base} ${alignment} ${this.panelClass}`.trim();
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
  }
</style>
