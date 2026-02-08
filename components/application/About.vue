<template>
  <section class="bg-white py-12 px-4">
    <div class="dh-container">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div class="text-center md:col-span-1 md:text-left">
          <p class="text-sm font-bold text-yellow-500">
            關於 KaiJi開工大吉手帳
          </p>
          <p
            class="my-4 flex flex-wrap items-baseline justify-center gap-2 text-4xl font-bold text-black md:justify-start md:text-5xl"
          >
            <span class="text-xl text-yellow-500 md:text-2xl">節省</span>
            <span
              class="whitespace-nowrap text-[2.6rem] leading-none md:text-[3rem]"
            >
              NT$&nbsp;3000
            </span>
            <span class="text-xl text-yellow-500 md:text-2xl">起/月</span>
          </p>
          <p class="text-gray-500">— 3000元 x 失誤數 x 每月 x 案場數</p>
        </div>
        <div class="md:col-span-2">
          <H2Title
            title="在工地時常自己一個遺漏，補教至少就是一個點工 3000 起跳。若是材料報銷了，更慘，這些都是公司額外的成本負擔。"
            class-name="text-3xl md:text-4xl mb-6 "
          />

          <div class="flex items-center">
            <PrimaryCta
              href="https://interior-helper.vercel.app/"
              :label="'開工大吉，省起來'"
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
