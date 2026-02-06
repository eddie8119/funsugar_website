<template>
  <section class="h-screen px-4 py-10 pt-20">
    <div class="dh-container flex h-full h-full gap-10">
      <!-- Left  -->
      <div class="flex h-full w-full flex-col justify-between lg:w-1/2">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
            — 記錄工地，掌控節奏
          </p>

          <H1Title
            title="「開工大吉手帳」目標是更好的紀錄管理，減少遺漏項目的機會，工地進展就順了，錢也省了。"
            class-name="text-4xl font-bold text-black md:text-5xl"
          />

          <PrimaryCta
            href="https://interior-helper.vercel.app/"
            :new-tab="true"
            label="工地手帳，開工大吉"
            variant="primary"
          />
        </div>

        <div class="space-y-3">
          <h2 class="text-5xl font-extrabold tracking-tight text-black">
            開工大吉手帳
          </h2>

          <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
            方生糖 Studio<span class="align-super text-yellow-400">®</span>
          </p>
        </div>
      </div>

      <!-- Right  -->
      <div class="h-full w-full lg:w-1/2">
        <HeroVisual />
      </div>
    </div>
  </section>
</template>

<script>
  import PrimaryCta from "@/components/core/button/PrimaryCta.vue";
  import H1Title from "@/components/core/title/H1Title.vue";
  import HeroVisual from "@/components/application/HeroVisual.vue";

  export default {
    name: "Hero1",
    components: {
      PrimaryCta,
      H1Title,
      HeroVisual,
    },
  };
</script>

<style scoped></style>
