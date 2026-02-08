<template>
  <div class="fixed z-10 w-screen bg-white">
    <div class="pt-28">
      <div class="flex h-20 w-full items-center justify-center">
        <nav class="fixed bg-opacity-90 text-stone-500">
          <nuxt-link
            to="/photography"
            class="delay-80 mx-1 p-4 transition duration-150 ease-in-out hover:text-yellow-500 md:mx-3"
            :class="[route === '/photography' ? 'pill-active' : '']"
          >
            室內空間攝影
          </nuxt-link>
          <nuxt-link
            to="/videoCase"
            class="delay-80 mx-1 p-4 transition duration-150 ease-in-out hover:text-yellow-500 md:mx-3"
            :class="[route === '/videoCase' ? 'pill-active' : '']"
          >
            企業影片製片
          </nuxt-link>
          <nuxt-link
            to="/familyRecording"
            class="delay-80 mx-1 p-4 transition duration-150 ease-in-out hover:text-yellow-500 md:mx-3"
            :class="[route === '/familyRecording' ? 'pill-active' : '']"
          >
            免費新居婚紗
          </nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WorkPills",
    data() {
      return {
        nowPath: undefined,
      };
    },
    computed: {
      route() {
        return this.$route.path;
      },
    },
  };
</script>

<style scoped>
  .pill-active {
    @apply rounded-full p-4 text-yellow-500 shadow;
  }
</style>
