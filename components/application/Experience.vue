<template>
  <section class="bg-[#f5f0eb] px-4 py-12 md:py-16 lg:h-screen">
    <div class="dh-container flex h-full items-center">
      <div
        class="grid h-full w-full grid-cols-1 gap-10 rounded-[32px] p-6 md:py-8 md:px-0 lg:grid-cols-[1.05fr_0.95fr] lg:bg-transparent"
      >
        <div
          class="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-2xl"
        >
          <img
            src="~/assets/images/application/Experience.jpg"
            alt="方生糖的現場紀錄"
            class="h-full w-full object-cover"
          />
          <span
            class="absolute bottom-6 left-6 rounded-full bg-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-lg"
          >
            不註冊，也能體驗
          </span>
        </div>
        <div
          class="flex h-full flex-col justify-between rounded-[32px] bg-white/40 px-4 py-6 shadow-lg backdrop-blur-sm lg:bg-transparent lg:px-4 lg:py-2 lg:shadow-none"
        >
          <div>
            <p class="text-xs uppercase text-gray-500">
              — design for impact, not approval.
            </p>
            <H2Title
              title="幫助室內事務所輕鬆紀錄工地現場繁瑣，省時省錢"
              class-name="my-4 text-3xl leading-tight md:text-4xl lg:text-5xl"
            />
            <p class="mb-8 text-base text-gray-600 md:text-lg">
              從記錄、整理到共享，讓每一次工地進度都清楚透明，團隊都能即時掌握。
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <PrimaryCta
                variant="secondary"
                href="https://interior-construction-helper.web.app/"
                label="體驗版，即時感受"
                :new-tab="true"
              />
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6 md:mt-12">
            <div
              class="mb-4 flex flex-col gap-2 text-xs uppercase tracking-[0.4em] text-gray-500 md:flex-row md:items-center md:justify-between"
            >
              <span>使用者這樣說</span>
              <!-- <a href="#testimonials" class="text-yellow-500">Explore more</a> -->
            </div>
            <div class="grid gap-8 sm:grid-cols-2">
              <div
                v-for="(item, index) in testimonials"
                :key="index"
                class="space-y-3 border-l-4 border-black/80 pl-4"
              >
                <p class="text-sm text-gray-700">"{{ item.quote }}"</p>
                <p class="text-sm font-bold text-black">
                  {{ item.author }}
                </p>
              </div>
            </div>
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
    name: "Testimonials",
    components: {
      H2Title,
      PrimaryCta,
    },
    data() {
      return {
        testimonials: [
          {
            quote:
              "They don't just design what we ask for, they understand how people see us. A true creative partnership.",
            author: "Jane D., COO at Vana Club",
          },
          {
            quote:
              "We needed to reinvent our image. Our visuals finally match our brand's voice.",
            author: "Selena T., Founder of Rice Supply",
          },
        ],
      };
    },
  };
</script>

<style scoped></style>
