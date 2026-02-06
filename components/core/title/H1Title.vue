<template>
  <h1
    class="text-4xl font-semibold leading-tight md:text-5xl"
    :class="className"
  >
    {{ title }}
  </h1>
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
