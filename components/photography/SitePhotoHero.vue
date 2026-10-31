<template>
  <section
    class="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-[5%] px-[5%] pb-[100px] pt-[35px] max-[850px]:grid-cols-1 max-[850px]:gap-[30px] max-[850px]:pb-[70px] max-[850px]:pt-[25px]"
  >
    <div class="py-[30px] max-[850px]:py-0">
      <div class="mb-6 text-xs font-bold tracking-[2px] text-[#8a7c48]">
        室內設計空間攝影
      </div>
      <h1
        class="mb-[27px] text-[clamp(38px,4.1vw,72px)] font-black leading-[1.15] tracking-[-2px] max-[850px]:tracking-[-1px]"
      >
        讓空間被看見，<br />讓善意繼續流動。
      </h1>
      <h2 class="mb-[15px] text-[25px] font-extrabold max-[480px]:text-[22px]">
        你捐款，我拍照。
      </h2>
      <p class="my-4 max-w-[500px] text-base leading-[1.9] text-[#626262]">
        將攝影預算捐給公益機構，SitePhoto 為你的空間留下作品。
      </p>
      <div
        class="my-[35px] flex items-center gap-[25px] max-[480px]:gap-[14px]"
      >
        <a
          href="#apply"
          class="inline-block cursor-pointer border-0 bg-[#f9d236] px-[25px] py-4 text-[15px] font-extrabold text-[#222] max-[480px]:px-[17px] max-[480px]:py-[14px]"
          >申請公益攝影 ↗</a
        >
        <a
          href="#works"
          class="border-b border-[#222] pb-[5px] text-sm font-bold"
          >先看看作品 ↓</a
        >
      </div>
      <div class="text-xs leading-[1.8] text-[#8b8b8b]">
        每年 15 個公益攝影名額&#12288;／&#12288;只限台北市
      </div>
    </div>
    <div
      class="relative aspect-[4/5] bg-[#f2f0e8] max-[850px]:order-[-1]"
    >
      <img
        src="@/assets/images/portfolio/portfolio1.jpg"
        alt="室內設計空間攝影作品"
        class="h-full w-full object-cover"
      />
      <span
        class="absolute bottom-[15px] left-[15px] bg-white px-3 py-2 text-xs"
        >空間的光與日常</span
      >
    </div>
  </section>
</template>

<script>
  export default {};
</script>
