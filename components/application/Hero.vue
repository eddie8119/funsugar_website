<template>
  <section
    class="flex min-h-screen w-full justify-center px-4 pt-[80px] pb-16 sm:px-6 lg:px-8"
  >
    <div
      class="dh-container flex w-full flex-1 flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16"
    >
      <!-- Left  -->
      <div
        class="flex w-full flex-col justify-between gap-10 lg:w-1/2 lg:flex-1"
      >
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
            — {{ $t("hero.construction.eyebrow") }}
          </p>

          <H1Title
            :title="$t('hero.construction.headline')"
            class-name="text-[2.25rem] font-semibold leading-[1.1] tracking-tight  sm:leading-[1.3]  lg:leading-[1.3] text-black"
          />

          <PrimaryCta
            href="https://interior-helper.vercel.app/"
            :new-tab="true"
            :label="$t('hero.construction.cta')"
            variant="primary"
          />
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <img
              src="@/assets/images/logo/kaiji_logo.png"
              alt="KaiJi Logo"
              class="h-10 object-contain"
            />
            <h2
              class="text-4xl font-extrabold tracking-tight text-yellow-500 sm:text-5xl"
            >
              {{ $t("hero.construction.subheading") }}
            </h2>
          </div>

          <p class="text-sm uppercase tracking-[0.4em] text-gray-400">
            {{ $t("hero.construction.tagline") }}
          </p>
        </div>
      </div>

      <!-- Right  -->
      <div class="flex w-full items-center lg:w-1/2 lg:flex-1">
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
    name: "Hero",
    components: {
      PrimaryCta,
      H1Title,
      HeroVisual,
    },
  };
</script>

<style scoped></style>
