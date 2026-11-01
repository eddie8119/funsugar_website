<template>
  <section
    id="plans"
    class="mx-auto max-w-[1400px] px-[5%] py-[95px] max-[850px]:py-[65px]"
  >
    <div class="mb-6 text-sm font-bold tracking-[2px] text-[#8a7c48]">
      {{ $t("sitephoto.plans.kicker") }}
    </div>
    <h2 class="mb-3 text-[clamp(26px,2.8vw,42px)] font-black leading-[1.3]">
      {{ $t("sitephoto.plans.heading") }}
    </h2>
    <p class="my-4 max-w-[620px] text-base leading-[1.9] text-[#626262]">
      {{ $t("sitephoto.plans.intro") }}
    </p>
    <p class="my-4 max-w-[620px] text-sm font-bold leading-[1.9] text-[#444]">
      {{ $t("sitephoto.plans.donationClarify") }}
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
    <div class="mx-auto mt-[110px] max-w-[820px] max-[850px]:mt-[80px]">
      <h3 class="mb-4 text-center text-[25px] font-black">
        {{ $t("sitephoto.plans.faqHeading") }}
      </h3>
      <dl>
        <div
          v-for="(item, index) in $t('sitephoto.plans.faq')"
          :key="index"
          class="border-b border-[#deded9]"
        >
          <dt>
            <button
              type="button"
              class="flex w-full cursor-pointer items-center justify-between gap-4 px-3 py-4 text-left font-extrabold transition-colors duration-200 hover:bg-[#f6f5f1]"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggle(index)"
            >
              {{ item.q }}
              <svg
                class="h-4 w-4 shrink-0 text-[#999] transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === index }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </dt>
          <dd
            :id="`faq-panel-${index}`"
            class="grid transition-[grid-template-rows] duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p class="pb-4 text-[15px] leading-[1.9] text-[#626262]">
                {{ item.a }}
              </p>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        openIndex: -1,
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
    methods: {
      toggle(index) {
        this.openIndex = this.openIndex === index ? -1 : index;
      },
    },
  };
</script>
