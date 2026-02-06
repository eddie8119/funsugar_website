<template>
  <nuxt-link to="/" class="flex items-center gap-3">
    <img
      class="h-10 w-10 object-contain"
      src="@/assets/images/logo2.png"
      alt="方生糖 Logo"
    />
    <div class="flex flex-col justify-center leading-tight">
      <p class="font-semibold tracking-widest text-yellow-400">方生糖</p>
      <p class="font-light tracking-widest">Designer Helper</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "NavBrand",
  };
</script>
