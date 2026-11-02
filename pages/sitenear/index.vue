<template>
  <div class="iframe-wrapper">
    <iframe
      src="https://site-near.vercel.app/landing"
      title="Site Near"
      class="iframe-full"
      allowfullscreen
    />
  </div>
</template>

<script>
  export default {
    layout: false,
  };
</script>

<style lang="scss" scoped>
  .iframe-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .iframe-full {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
