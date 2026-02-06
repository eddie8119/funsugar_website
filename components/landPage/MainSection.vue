<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-amber-200 via-white to-white py-24 px-8 lg:px-24"
  >
    <div
      class="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row"
    >
      <div class="w-full lg:w-1/2">
        <p class="mb-4 text-sm font-semibold tracking-[0.3em] text-stone-500">
          FUNSUGAR
        </p>
        <h1
          class="mb-6 text-4xl font-bold leading-tight text-stone-900 md:text-5xl"
        >
          打造暖度與態度的室內影像，
          <span class="text-amber-500">用鏡頭講出房子的故事</span>
        </h1>
        <p class="mb-10 text-lg text-stone-600">
          我們將攝影、美感與空間敘事結合，協助品牌、建商與設計工作室快速建立高辨識度的視覺，讓觀者一眼看懂你的價值。
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#service-section"
            class="rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-stone-700"
          >
            了解服務
          </a>
          <a
            href="mailto:hello@funsugar.tw"
            class="rounded-full border border-stone-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-stone-700 transition hover:-translate-y-1 hover:border-stone-900 hover:text-stone-900"
          >
            聯繫我們
          </a>
        </div>
      </div>
      <div class="relative w-full lg:w-1/2">
        <div
          class="absolute -left-6 top-6 h-16 w-16 rounded-full border-4 border-amber-300"
        />
        <div
          class="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-stone-900/10"
        />
        <img
          src="@/assets/images/application/Landing.png"
          alt="Interior composition"
          class="relative z-10 w-full rounded-3xl shadow-[0_25px_70px_rgba(15,23,42,0.15)]"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LandPageMainSection",
  };
</script>
