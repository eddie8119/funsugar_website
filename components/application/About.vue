<template>
  <section class="bg-white py-12 px-4">
    <div class="dh-container">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div class="text-center md:col-span-1 md:text-left">
          <p class="text-sm font-bold text-yellow-500">
            {{ $t("about.eyebrow") }}
          </p>
          <p
            class="my-4 flex flex-wrap items-baseline justify-center gap-2 text-4xl font-bold text-black md:justify-start md:text-5xl"
          >
            <span class="text-xl text-yellow-500 md:text-2xl">
              {{ $t("about.savings.prefix") }}
            </span>
            <span
              class="whitespace-nowrap text-[2.6rem] leading-none md:text-[3rem]"
            >
              {{ $t("about.savings.amount") }}
            </span>
            <span class="text-xl text-yellow-500 md:text-2xl">
              {{ $t("about.savings.suffix") }}
            </span>
          </p>
          <p class="text-gray-500">
            {{ $t("about.savings.formula") }}
          </p>
        </div>
        <div class="md:col-span-2">
          <H2Title
            :title="$t('about.headline')"
            class-name="text-3xl md:text-4xl mb-6 "
          />

          <div class="flex items-center">
            <PrimaryCta
              href="https://kaiji-app.vercel.app/"
              :label="$t('about.cta')"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import H2Title from "@/components/core/title/H2Title.vue";
  import PrimaryCta from "@/components/core/button/PrimaryCta.vue";

  export default {
    name: "About",
    components: {
      H2Title,
      PrimaryCta,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
