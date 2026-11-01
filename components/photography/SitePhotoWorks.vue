<template>
  <section
    id="works"
    class="mx-auto max-w-[1400px] px-[5%] py-[95px] max-[850px]:py-[65px]"
  >
    <div
      class="mb-[35px] flex items-end justify-between gap-[30px] max-[850px]:flex-col max-[850px]:items-start"
    >
      <div>
        <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
          {{ $t("sitephoto.works.kicker") }}
        </div>
        <h2 class="mb-3 text-[clamp(26px,2.8vw,42px)] font-black leading-[1.3]">
          {{ $t("sitephoto.works.heading") }}
        </h2>
        <p class="max-w-[620px] text-base leading-[1.9] text-[#626262]">
          {{ $t("sitephoto.works.summary") }}
        </p>
      </div>
      <div class="text-right max-[850px]:text-left">
        <a
          href="https://www.behance.net/WANG81195321"
          target="_blank"
          rel="noopener noreferrer"
          class="border-b border-[#222] pb-[5px] text-sm font-bold"
          >{{ $t("sitephoto.works.behanceLink") }}</a
        >
        <p class="mt-3 text-xs leading-[1.8] text-[#8b8b8b]">
          {{ $t("sitephoto.works.behanceNote") }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 max-[850px]:grid-cols-1">
      <a
        v-for="(work, index) in works"
        :key="work.image"
        href="https://www.behance.net/WANG81195321"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative aspect-[3/2] overflow-hidden bg-white"
      >
        <img
          :src="work.image"
          :alt="$t('sitephoto.works.itemAlt', { n: index + 1 })"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span
          class="from-black/55 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-[18px] text-[13px] text-white"
          >{{ $t("sitephoto.works.itemTitle") }} 0{{ index + 1 }} ↗</span
        >
      </a>
    </div>
  </section>
</template>

<script>
  import Work1 from "@/assets/images/portfolio/portfolio9.jpg";
  import Work3 from "@/assets/images/portfolio/portfolio7.jpg";
  import Work5 from "@/assets/images/portfolio/portfolio5.jpg";
  import Work7 from "@/assets/images/portfolio/portfolio10.jpg";

  export default {
    data() {
      return {
        works: [
          { image: Work1 },
          { image: Work3 },
          { image: Work5 },
          { image: Work7 },
        ],
      };
    },
  };
</script>
