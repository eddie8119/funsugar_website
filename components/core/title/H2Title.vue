<template>
  <h2 class="font-bold leading-tight text-black" :class="className">
    {{ title }}
  </h2>
</template>

<script>
  export default {
    name: "H2Title",
    props: {
      title: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: "",
      },
    },
  };
</script>

<style lang="scss" scoped></style>
