<template>
  <section class="py-20 px-4">
    <div class="dh-container">
      <div class="mb-12 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500"
        >
          {{ $t("feature.eyebrow") }}
        </p>
        <H2Title :title="$t('feature.title')" class-name="mt-2 text-3xl" />
        <p class="mt-2 text-base text-gray-600">
          {{ $t("feature.subtitle") }}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="rounded-3xl border border-black/5 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition duration-300"
          :class="index === 1 ? 'bg-[#f4eee8]' : 'bg-white'"
        >
          <div class="mb-4 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-black"
            >
              <svg
                v-if="index === 0"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <svg
                v-if="index === 1"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <svg
                v-if="index === 2"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h8m-9 6h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-black">
              {{ service.title }}
            </h3>
          </div>
          <div class="mb-4 h-px w-full bg-black/10" />
          <p class="mb-4 leading-relaxed text-gray-600">
            {{ service.description }}
          </p>
          <div class="rounded-2xl border border-black/5 shadow-inner">
            <img
              :src="service.picture"
              :alt="service.title"
              class="h-32 w-full rounded-xl object-cover md:h-[180px]"
            />
          </div>
          <!-- <a
            href="#services"
            class="text-sm font-semibold text-black underline decoration-black/40 decoration-2 underline-offset-4 transition hover:text-yellow-600"
            >Learn more</a
          > -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Mark from "~/assets/images/application/Mark.png";
  import Drag from "~/assets/images/application/Drag.png";
  import Calendar from "~/assets/images/application/Calendar.png";
  import H2Title from "@/components/core/title/H2Title.vue";
  export default {
    name: "Services",
    components: {
      H2Title,
    },
    computed: {
      services() {
        return [
          {
            title: this.$t("feature.services.title1"),
            description: this.$t("feature.services.description1"),
            picture: Drag,
          },
          {
            title: this.$t("feature.services.title2"),
            description: this.$t("feature.services.description2"),
            picture: Mark,
          },
          {
            title: this.$t("feature.services.title3"),
            description: this.$t("feature.services.description3"),
            picture: Calendar,
          },
        ];
      },
    },
  };
</script>

<style scoped></style>
