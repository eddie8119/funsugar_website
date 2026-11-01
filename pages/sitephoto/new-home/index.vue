<template>
  <div class="h-screen w-full">
    <Navbar />

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf9Gz3Tbm2qxpIxiQVAZRqNx3ZBaO2R3LiQam-Wpyt-xno_kA/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      載入中…
    </iframe>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";

  export default {
    components: {
      Navbar,
    },
  };
</script>

<style scoped>
  iframe {
    display: block;
    width: 100%;
    height: calc(100vh - 82px); /* 扣掉 navbar 高度 */
    margin-top: 82px; /* 往下推，避免被蓋住 */
    border: none;
  }
</style>
