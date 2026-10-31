<template>
  <section
    id="plans"
    class="mx-auto max-w-[1400px] px-[5%] py-[95px] max-[850px]:py-[65px]"
  >
    <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
      03 / 攝影方案
    </div>
    <p class="my-4 max-w-[500px] text-base leading-[1.9] text-[#626262]">
      不用支付攝影服務費。確認名額後，直接捐款給公益機構即可。
    </p>
    <div class="my-[35px] grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">
      <article
        v-for="plan in plans"
        :key="plan.id"
        class="border border-[#deded9] bg-[#fafaf8] p-[35px]"
      >
        <div class="text-xs tracking-[2px] text-[#888]">{{ plan.label }}</div>
        <h3 class="my-[18px] text-[25px]">{{ plan.name }}</h3>
        <div class="text-[43px] font-black">
          <small class="text-base">NT$</small> {{ plan.price }}
        </div>
        <p class="my-[13px] text-[13px] text-[#777]">公益捐款門檻</p>
        <div class="my-[25px] h-px bg-[#ddd]" />
        <div class="mb-[10px]">{{ plan.photos }} 張精修照片</div>
        <a
          href="#apply"
          class="mt-[25px] inline-block bg-[#f9d236] px-4 py-3 text-[15px] font-extrabold text-[#222]"
          @click="$emit('select', plan.id)"
          >選擇此方案 ↗</a
        >
      </article>
    </div>
    <p class="my-3 text-xs leading-[1.8] text-[#8b8b8b]">
      超過 60
      坪、特殊場景或商業委託請另外洽詢。實際交付規格及拍攝日期以雙方確認為準。
    </p>
    <div class="mt-[55px] grid grid-cols-4 gap-[15px] max-[850px]:grid-cols-2">
      <div
        v-for="(step, index) in steps"
        :key="step"
        class="flex items-center gap-[15px] py-[18px]"
      >
        <span
          class="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#f9d236] text-xs font-extrabold"
          >0{{ index + 1 }}</span
        ><strong>{{ step }}</strong>
        <span
          v-if="index < steps.length - 1"
          class="mx-auto text-xl text-[#888]"
          :class="{ 'max-[850px]:hidden': index % 2 === 1 }"
          >→</span
        >
      </div>
    </div>
    <p class="mb-[13px] mt-[22px] text-[13px] font-bold">
      請先申請並確認名額，再進行捐款。確認名額前請勿捐款。
    </p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        plans: [
          {
            id: "small",
            label: "方案 01",
            name: "30 坪以內",
            price: "12,000",
            photos: 12,
          },
          {
            id: "large",
            label: "方案 02",
            name: "31–60 坪",
            price: "18,000",
            photos: 20,
          },
        ],
        steps: ["提交申請", "確認名額", "完成捐款", "拍攝交付"],
      };
    },
  };
</script>
