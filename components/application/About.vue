<template>
  <section class="bg-white py-20 px-4">
    <div class="dh-container">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div class="text-center md:col-span-1 md:text-left">
          <p class="text-sm font-bold text-yellow-500">關於 開工大吉手帳</p>
          <p class="my-4 text-5xl font-bold text-black">NT$ 3000+</p>
          <p class="text-sm text-gray-500">
            — capital have been raised after collaboration
          </p>
        </div>
        <div class="md:col-span-2">
          <H2Title
            title="在工地時常自己一個遺漏，至少就是一個點工 3000 起跳， 若是材料報銷了，更慘，這些都是公司額外的成本負擔。"
            class-name="text-3xl md:text-4xl mb-6"
          />

          <div class="flex items-center">
            <button class="dh-btn dh-btn--dark">
              <span>More about us</span>
              <span class="ml-2 rounded-full bg-white p-1 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import H2Title from "@/components/core/title/H2Title.vue";

  export default {
    name: "About",
    components: {
      H2Title,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
