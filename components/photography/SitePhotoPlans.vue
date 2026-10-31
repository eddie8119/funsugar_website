<template>
  <section
    id="plans"
    class="mx-auto max-w-[1400px] px-[5%] py-[95px] max-[850px]:py-[65px]"
  >
    <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
      {{ $t("sitephoto.plans.kicker") }}
    </div>
    <p class="my-4 max-w-[500px] text-base leading-[1.9] text-[#626262]">
      {{ $t("sitephoto.plans.intro") }}
    </p>
    <div class="my-[35px] grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">
      <article
        v-for="(plan, index) in plans"
        :key="plan.id"
        class="border border-[#deded9] bg-[#fafaf8] p-[35px]"
      >
        <div class="text-xs tracking-[2px] text-[#888]">
          {{ $t("sitephoto.plans.planPrefix") }} 0{{ index + 1 }}
        </div>
        <h3 class="my-[18px] text-[25px]">
          {{ $t(`sitephoto.plans.items.${plan.id}.name`) }}
        </h3>
        <div class="text-[43px] font-black">
          <small class="text-base">NT$</small> {{ plan.price }}
        </div>
        <p class="my-[13px] text-[13px] text-[#777]">
          {{ $t("sitephoto.plans.priceNote") }}
        </p>
        <div class="my-[25px] h-px bg-[#ddd]" />
        <div class="mb-[10px]">
          {{ $t("sitephoto.plans.photos", { n: plan.photos }) }}
        </div>
        <a
          href="#apply"
          class="mt-[25px] inline-block bg-[#f9d236] px-4 py-3 text-[15px] font-extrabold text-[#222]"
          @click="$emit('select', plan.id)"
          >{{ $t("sitephoto.plans.select") }}</a
        >
      </article>
    </div>
    <p class="my-3 text-xs leading-[1.8] text-[#8b8b8b]">
      {{ $t("sitephoto.plans.bookingNote") }}
    </p>
    <p class="my-3 text-xs leading-[1.8] text-[#8b8b8b]">
      {{ $t("sitephoto.plans.footnote") }}
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
        ><strong>{{ $t(`sitephoto.plans.steps.${step}`) }}</strong>
        <span
          v-if="index < steps.length - 1"
          class="mx-auto text-xl text-[#888]"
          :class="{ 'max-[850px]:hidden': index % 2 === 1 }"
          >→</span
        >
      </div>
    </div>
    <p class="mb-[13px] mt-[22px] text-[13px] font-bold">
      {{ $t("sitephoto.plans.warning") }}
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
            price: "12,000",
            photos: 12,
          },
          {
            id: "large",
            price: "18,000",
            photos: 20,
          },
        ],
        steps: ["apply", "confirm", "donate", "deliver"],
      };
    },
  };
</script>
