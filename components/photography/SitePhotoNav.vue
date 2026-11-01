<template>
  <header
    class="mx-auto mt-[72px] flex max-w-[1400px] items-center justify-between gap-5 px-[5%] py-6 max-[850px]:py-4"
  >
    <a href="/sitephoto"
      ><img
        src="@/assets/images/logo/SitePhoto_logo.png"
        alt="SitePhoto"
        class="h-14 w-auto object-contain max-[850px]:h-10"
    /></a>
    <nav class="flex items-center gap-7 text-[13px] font-semibold">
      <a href="/sitephoto#works" class="max-[850px]:hidden">{{
        $t("sitephoto.nav.works")
      }}</a>
      <a href="/sitephoto#story" class="max-[850px]:hidden">{{
        $t("sitephoto.nav.story")
      }}</a>
      <a href="/sitephoto#plans" class="max-[850px]:hidden">{{
        $t("sitephoto.nav.plans")
      }}</a>
      <a href="/sitephoto#apply" class="bg-[#f9d236] px-[17px] py-3">{{
        $t("sitephoto.nav.apply")
      }}</a>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>
