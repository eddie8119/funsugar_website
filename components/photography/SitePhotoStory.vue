<template>
  <section
    id="story"
    class="bg-[#f6f5f1] px-[max(5%,calc((100%_-_1260px)/2))] py-[100px] max-[850px]:px-[5%] max-[850px]:py-[70px]"
  >
    <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
      {{ $t("sitephoto.story.kicker") }}
    </div>
    <div
      class="grid grid-cols-2 gap-[10%] max-[850px]:grid-cols-1 max-[850px]:gap-[30px]"
    >
      <div class="max-[850px]:contents">
        <h2
          class="mb-[22px] text-[clamp(30px,3.3vw,53px)] font-black leading-[1.3] tracking-[-1.4px] [text-wrap:balance]"
        >
          {{ $t("sitephoto.story.headlinePre")
          }}<em
            class="bg-[linear-gradient(transparent_70%,#f9d236_70%)] not-italic"
            >{{ $t("sitephoto.story.headlineHighlight") }}</em
          >{{ $t("sitephoto.story.headlineMid") }}<br />{{
            $t("sitephoto.story.headlineTail")
          }}
        </h2>
        <div
          class="my-[60px] grid grid-cols-3 gap-[15px] max-[850px]:order-1 max-[850px]:my-[35px] max-[850px]:grid-cols-1 max-[850px]:gap-[30px] max-[850px]:text-center"
        >
          <div v-for="key in statKeys" :key="key">
            <strong
              class="block text-[clamp(22px,2.6vw,40px)] font-black max-[850px]:text-[52px]"
              >{{ $t(`sitephoto.story.stats.${key}.value`) }}</strong
            ><span class="text-xs text-[#888] max-[850px]:text-base">{{
              $t(`sitephoto.story.stats.${key}.label`)
            }}</span>
          </div>
        </div>
      </div>
      <div class="text-base leading-loose text-[#555]">
        <p class="mb-[14px]">{{ $t("sitephoto.story.p1") }}</p>
        <p class="mb-[14px]">{{ $t("sitephoto.story.p2") }}</p>
        <p class="mb-[14px]">
          {{ $t("sitephoto.story.p3") }}
        </p>
        <p class="mb-[14px]">{{ $t("sitephoto.story.p4") }}</p>
        <b class="text-[#222]">{{ $t("sitephoto.story.closing") }}</b>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        statKeys: ["shoots", "donation", "direct"],
      };
    },
  };
</script>
