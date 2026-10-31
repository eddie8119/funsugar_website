<template>
  <section
    id="works"
    class="mx-auto max-w-[1400px] px-[5%] py-[95px] max-[850px]:py-[65px]"
  >
    <div
      class="mb-[35px] flex items-end justify-between gap-[30px] max-[850px]:flex-col max-[850px]:items-start"
    >
      <div>
        <div class="mb-6 text-xs font-bold tracking-[2px] text-[#8a7c48]">
          01 / 攝影作品
        </div>
      </div>
      <div class="text-right max-[850px]:text-left">
        <a
          href="https://www.behance.net/WANG81195321"
          target="_blank"
          rel="noopener noreferrer"
          class="border-b border-[#222] pb-[5px] text-sm font-bold"
          >前往 Behance 看完整作品 ↗</a
        >
        <p class="mt-3 text-xs leading-[1.8] text-[#8b8b8b]">
          新增作品統一發布至 Behance。完整作品請至 Behance 瀏覽
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-2 gap-2 max-[850px]:grid-cols-1"
    >
      <a
        v-for="(work) in works"
        :key="work.image"
        href="https://www.behance.net/WANG81195321"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative aspect-[3/2] overflow-hidden bg-white"
      >
        <img
          :src="work.image"
          :alt="work.title"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span
          class="from-black/55 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-[18px] text-[13px] text-white"
          >{{ work.title }} ↗</span
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
          { image: Work1, title: "空間作品 01" },
          { image: Work3, title: "空間作品 02" },
          { image: Work5, title: "空間作品 03" },
          { image: Work7, title: "空間作品 04" },
        ],
      };
    },
  };
</script>
