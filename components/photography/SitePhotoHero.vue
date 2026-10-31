<template>
  <section
    class="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-[5%] px-[5%] pb-[100px] pt-[35px] max-[850px]:grid-cols-1 max-[850px]:gap-[30px] max-[850px]:pb-[70px] max-[850px]:pt-[25px]"
  >
    <div class="py-[30px] max-[850px]:py-0">
      <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
        {{ $t("sitephoto.hero.kicker") }}
      </div>
      <h1
        class="mb-[27px] text-[clamp(38px,4.1vw,72px)] font-black leading-[1.15] tracking-[-2px] [text-wrap:balance] max-[850px]:tracking-[-1px]"
      >
        {{ $t("sitephoto.hero.titleLine1") }}<br />{{
          $t("sitephoto.hero.titleLine2")
        }}
      </h1>
      <h2 class="mb-[15px] text-[25px] font-extrabold max-[480px]:text-[22px]">
        {{ $t("sitephoto.hero.subtitle") }}
      </h2>
      <p class="my-4 max-w-[500px] text-base leading-[1.9] text-[#626262]">
        {{ $t("sitephoto.hero.description") }}
      </p>
      <div
        class="my-[35px] flex items-center gap-[25px] max-[480px]:gap-[14px]"
      >
        <a
          href="#apply"
          class="inline-block cursor-pointer border-0 bg-[#f9d236] px-[25px] py-4 text-[15px] font-extrabold text-[#222] max-[480px]:px-[17px] max-[480px]:py-[14px]"
          >{{ $t("sitephoto.hero.ctaPrimary") }}</a
        >
        <a
          href="#works"
          class="border-b border-[#222] pb-[5px] text-sm font-bold"
          >{{ $t("sitephoto.hero.ctaSecondary") }}</a
        >
      </div>
      <div class="text-xs leading-[1.8] text-[#8b8b8b]">
        {{ $t("sitephoto.hero.note") }}
      </div>
    </div>
    <div class="relative aspect-[4/5] bg-[#f2f0e8] max-[850px]:order-[-1]">
      <img
        src="@/assets/images/portfolio/portfolio3.jpg"
        :alt="$t('sitephoto.hero.imageAlt')"
        class="h-full w-full object-cover"
      />
      <!-- <span
        class="absolute bottom-[15px] left-[15px] bg-white px-3 py-2 text-xs"
        >{{ $t("sitephoto.hero.imageCaption") }}</span
      > -->
    </div>
  </section>
</template>

<script>
  export default {};
</script>
