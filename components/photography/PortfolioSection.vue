<template>
  <!-- Portfolio section start -->
  <section id="portfolio-section" class="relative px-4 py-16 lg:px-8">
    <!-- Text wrapper start -->
    <div class="flex flex-col gap-8 md:flex-row">
      <h1 class="mb-4 text-5xl font-semibold uppercase">我們的室內影像作品</h1>
      <p class="mb-8 capitalize text-stone-500 xl:w-1/2">
        拜訪房子 感受空間 在住的領域探索 思索著空間的本質
      </p>
    </div>
    <!-- Images grid start -->
    <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
      <div class="grid grid-cols-1 gap-4 md:hidden">
        <img
          src="@/assets/images/portfolio/portfolio1.jpg"
          alt="1"
          class="rounded-xl"
        />

        <img
          src="@/assets/images/portfolio/portfolio3.jpg"
          alt="3"
          class="rounded-xl"
        />

        <img
          src="@/assets/images/portfolio/portfolio5.jpg"
          alt="5"
          class="rounded-xl"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 md:hidden">
        <img
          src="@/assets/images/portfolio/portfolio6.jpg"
          alt="6"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio7.jpg"
          alt="7"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio8.jpg"
          alt="8"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio9.jpg"
          alt="9"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio10.jpg"
          alt="10"
          class="rounded-xl"
        />
      </div>

      <div class="hidden flex-col gap-4 md:flex">
        <img
          src="@/assets/images/portfolio/portfolio1.jpg"
          alt="1"
          class="rounded-xl"
        />
      </div>
      <div class="hidden flex-col gap-4 md:flex">
        <img
          src="@/assets/images/portfolio/portfolio3.jpg"
          alt="1"
          class="rounded-xl"
        />
      </div>
      <div class="hidden flex-col gap-4 md:flex">
        <img
          src="@/assets/images/portfolio/portfolio8.jpg"
          alt="2"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio5.jpg"
          alt="2"
          class="rounded-xl"
        />
      </div>
      <div class="hidden flex-col gap-4 md:flex">
        <img
          src="@/assets/images/portfolio/portfolio7.jpg"
          alt="1"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio6.jpg"
          alt="2"
          class="rounded-xl"
        />
      </div>
      <div class="hidden flex-col gap-4 md:flex">
        <img
          src="@/assets/images/portfolio/portfolio9.jpg"
          alt="1"
          class="rounded-xl"
        />
        <img
          src="@/assets/images/portfolio/portfolio10.jpg"
          alt="2"
          class="rounded-xl"
        />
      </div>
    </div>
    <!-- Images grid end -->
    <!-- "More" link start -->
    <a
      href="https://www.behance.net/WANG81195321"
      target="_blank"
      class="text-end"
    >
      <p class="group relative text-lg font-semibold">
        <span>更多室內影像展示 </span>
        <i class="fa-solid fa-arrow-right" />
      </p>
    </a>
    <!-- "More" link end -->
    <!-- Circle start -->
    <div
      class="absolute top-0 left-0 -z-20 mt-16 h-64 w-64 rounded-full bg-yellow-400"
    />
  </section>
</template>

<script>
  export default {};
</script>

<style></style>
