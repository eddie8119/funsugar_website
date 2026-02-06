<template>
  <section class="bg-white py-20 px-4">
    <div class="dh-container">
      <div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <h2
            class="mb-8 text-4xl font-bold leading-tight text-black md:text-5xl"
          >
            常見問題
          </h2>
          <div class="space-y-4">
            <div
              v-for="(item, index) in QuestionItems"
              :key="index"
              class="border-b border-gray-200 pb-4"
            >
              <div
                class="flex cursor-pointer items-center justify-between"
                @click="toggleAccordion(index)"
              >
                <div class="flex items-center">
                  <span class="mr-4 text-sm text-gray-400"
                    >0{{ index + 1 }}</span
                  >
                  <h3
                    class="text-xl font-bold"
                    :class="{
                      'text-black': openAccordion === index,
                      'text-gray-700': openAccordion !== index,
                    }"
                  >
                    {{ item.title }}
                  </h3>
                </div>
                <svg
                  class="h-6 w-6 transform text-gray-500 transition-transform duration-300"
                  :class="{ 'rotate-180': openAccordion === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <transition name="fade">
                <div
                  v-if="openAccordion === index"
                  class="mt-4 pl-8 text-gray-600"
                >
                  <p>{{ item.content }}</p>
                  <a
                    href="#"
                    class="dh-btn mt-2 inline-flex text-black transition-colors duration-300 hover:text-yellow-500"
                    >Learn more</a
                  >
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="~/assets/images/camera.png"
            alt="Laptop with design project"
            class="w-full rounded-lg"
          />
          <div
            class="absolute top-4 left-4 rounded-full bg-yellow-500 p-2 text-white"
          >
            <svg
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m2 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Question",
    data() {
      return {
        openAccordion: 1, // Default open item
        QuestionItems: [
          {
            title: "Brand Identity",
            content:
              "We determine and craft a digital experience that is intuitive, fast and unforgettable—built to convert and impress.",
          },
          {
            title: "Web & UX Design",
            content:
              "We determine and craft a digital experience that is intuitive, fast and unforgettable—built to convert and impress.",
          },
          {
            title: "Motion & Visual Art",
            content:
              "We determine and craft a digital experience that is intuitive, fast and unforgettable—built to convert and impress.",
          },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        if (this.openAccordion === index) {
          this.openAccordion = null;
        } else {
          this.openAccordion = index;
        }
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
