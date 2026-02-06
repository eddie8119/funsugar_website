<template>
  <section class="bg-white py-20 px-4">
    <div class="dh-container">
      <div class="mb-12 text-left">
        <p class="text-sm text-gray-500">
          — make your brand stands out and proud
        </p>
        <h2
          class="mt-2 text-3xl font-bold leading-tight text-black md:text-4xl"
        >
          We only craft bold, high-impact design for brands that refuse to blend
          in.
        </h2>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(item, index) in showcaseItems"
          :key="index"
          class="group relative overflow-hidden rounded-lg"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-96 w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 p-6"
          >
            <h3 class="mb-2 text-2xl font-bold text-white">
              {{ item.title }}
            </h3>
            <p class="text-white opacity-80">
              {{ item.category }}
            </p>
          </div>
          <div
            class="absolute bottom-6 right-6 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white"
          >
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Showcase",
    data() {
      return {
        showcaseItems: [
          {
            title: "Subway",
            category: "Brand Identity + Logo Design",
            image: require("~/assets/images/portfolio/portfolio1.jpg"),
            date: "JAN 2023",
          },

          {
            title: "I'd Like to Move It Move It",
            category: "Motion & Visual Art",
            image: require("~/assets/images/portfolio/portfolio10.jpg"),
            date: "ON GOING",
          },
        ],
      };
    },
  };
</script>

<style scoped></style>
