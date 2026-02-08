<template>
  <!-- Main section start -->
  <section class="relative mb-8 h-screen overflow-hidden px-12 py-32 lg:px-32">
    <div
      class="relative z-10 flex h-full w-full flex-col md:w-1/2 md:justify-center"
    >
      <!-- Main text start -->
      <h1 class="mb-4 text-5xl font-semibold uppercase xl:text-7xl">
        房屋的紀錄者 INTERIOR PHOTO
      </h1>
      <p class="capitalize text-stone-500 xl:w-1/2">
        居家空間的捕捉者 <br />
        觀察空間的質感 塑造空間的情感
      </p>
      <div class="mt-3 flex gap-8">
        <a href="#">
          <i class="fa-brands fa-instagram socialIcon" />
        </a>
        <a href="#">
          <i class="fa-brands fa-linkedin socialIcon" />
        </a>
        <a href="#">
          <i class="fa-brands fa-facebook socialIcon" />
        </a>
        <a href="#">
          <i class="fa-brands fa-dribbble socialIcon" />
        </a>
        <a href="#">
          <i class="fa-brands fa-pinterest socialIcon" />
        </a>
      </div>
    </div>
    <!-- Photographer image start -->
    <div
      class="pointer-events-none absolute bottom-0 right-0 z-0 h-2/5 overflow-hidden sm:h-1/2 md:h-3/5 lg:h-4/6"
    >
      <img
        src="@/assets/images/image.jpg"
        alt="img"
        class="h-full object-cover"
      />
    </div>
    <div class="flex h-20 w-full items-center justify-start md:justify-center">
      <a href="#about-section">
        <i
          class="fa-solid fa-arrow-down rounded-full bg-yellow-400 p-4 text-xl text-stone-100 shadow transition hover:-translate-y-2 hover:shadow-xl"
        />
      </a>
    </div>
  </section>
</template>

<script>
  export default {};
</script>

<style></style>
