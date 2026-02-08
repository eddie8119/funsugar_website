<template>
  <nuxt-link to="/" class="flex items-center gap-3">
    <img
      class="h-10 w-10 object-contain"
      src="@/assets/images/logo2.png"
      alt="方生糖 Logo"
    />
    <div class="flex flex-col justify-center leading-tight">
      <p class="font-semibold tracking-widest text-yellow-500">
        {{ brandTitle }}
      </p>
      <p class="font-light tracking-widest">{{ brandSubtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "NavBrand",
    computed: {
      brandTitle() {
        const currentPath = this.$route.path;

        if (currentPath.startsWith("/photography")) {
          return "方生糖";
        }

        return "KaiJi";
      },
      brandSubtitle() {
        const currentPath = this.$route.path;

        if (currentPath.startsWith("/photography")) {
          return "Designer Helper";
        }

        return "開工大吉手帳";
      },
    },
  };
</script>
