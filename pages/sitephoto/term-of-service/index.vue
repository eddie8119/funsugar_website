<template>
  <div class="bg-white text-[#202020]">
    <div class="mx-auto max-w-[920px] px-[5%] pb-24 pt-36">
      <header class="mb-10 flex items-start justify-between gap-8">
        <div>
          <h1
            class="mb-4 text-[clamp(28px,3.2vw,44px)] font-black leading-[1.3]"
          >
            拍攝須知與服務約定
          </h1>
          <p class="max-w-[560px] text-base leading-[1.9] text-[#626262]">
            為了讓攝影順利進行，請在申請前確認以下合作方式。
          </p>
        </div>
        <img
          src="@/assets/images/camera.png"
          alt=""
          class="w-44 shrink-0 max-[850px]:hidden"
        />
      </header>

      <div
        role="tablist"
        aria-label="委託類型"
        class="mb-10 ml-auto flex w-fit border border-[#deded9] max-[480px]:w-full"
        @keydown="onTabKeydown"
      >
        <button
          id="tab-charity"
          type="button"
          role="tab"
          :aria-selected="activeType === 'charity'"
          aria-controls="panel-charity"
          :tabindex="activeType === 'charity' ? 0 : -1"
          class="px-6 py-3 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#222] max-[480px]:flex-1"
          :class="
            activeType === 'charity'
              ? 'bg-[#f9d236] text-[#222]'
              : 'bg-white text-[#626262] hover:bg-[#f6f5f1]'
          "
          @click="select('charity')"
        >
          公益攝影
        </button>
        <button
          id="tab-paid"
          type="button"
          role="tab"
          :aria-selected="activeType === 'paid'"
          aria-controls="panel-paid"
          :tabindex="activeType === 'paid' ? 0 : -1"
          class="px-6 py-3 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#222] max-[480px]:flex-1"
          :class="
            activeType === 'paid'
              ? 'bg-[#f9d236] text-[#222]'
              : 'bg-white text-[#626262] hover:bg-[#f6f5f1]'
          "
          @click="select('paid')"
        >
          一般付費攝影
        </button>
      </div>

      <div
        v-show="activeType === 'charity'"
        id="panel-charity"
        role="tabpanel"
        aria-labelledby="tab-charity"
      >
        <SitePhotoTermsCharity />
      </div>
      <div
        v-show="activeType === 'paid'"
        id="panel-paid"
        role="tabpanel"
        aria-labelledby="tab-paid"
      >
        <SitePhotoTermsPaid />
      </div>

      <footer class="mt-16 flex flex-wrap items-center justify-end gap-5">
        <nuxt-link
          to="/sitephoto"
          class="border-b border-[#222] pb-[5px] text-sm font-bold"
          >返回 SitePhoto</nuxt-link
        >
        <nuxt-link
          to="/sitephoto#apply"
          class="bg-[#f9d236] px-[25px] py-4 text-[15px] font-extrabold text-[#222]"
          >申請委託 ↗</nuxt-link
        >
      </footer>
    </div>
  </div>
</template>

<script>
  import SitePhotoTermsCharity from "@/components/photography/SitePhotoTermsCharity.vue";
  import SitePhotoTermsPaid from "@/components/photography/SitePhotoTermsPaid.vue";
  import { BRAND_LINK } from "@/constants/link";

  const baseUrl = BRAND_LINK.website.replace(/\/$/, "");
  const pageUrl = `${baseUrl}/sitephoto/term-of-service`;

  export default {
    components: { SitePhotoTermsCharity, SitePhotoTermsPaid },
    layout: "mainlayout",
    head() {
      const title = "SitePhoto 拍攝須知與服務約定｜公益攝影・商業攝影";
      const description =
        "SitePhoto 拍攝須知與服務約定：公益攝影與一般付費攝影的軟裝分工、現場拍攝條件、捐款方式與改期取消說明。";
      return {
        title,
        meta: [
          { hid: "description", name: "description", content: description },
          { hid: "og:title", property: "og:title", content: title },
          {
            hid: "og:description",
            property: "og:description",
            content: description,
          },
          { hid: "og:url", property: "og:url", content: pageUrl },
          { hid: "og:type", property: "og:type", content: "website" },
        ],
        link: [{ hid: "canonical", rel: "canonical", href: pageUrl }],
      };
    },
    computed: {
      activeType() {
        return this.$route.query.type === "paid" ? "paid" : "charity";
      },
    },
    methods: {
      select(type) {
        if (type !== this.activeType) {
          this.$router.replace({
            query: { ...this.$route.query, type },
          });
        }
      },
      onTabKeydown(event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }
        event.preventDefault();
        const next = this.activeType === "charity" ? "paid" : "charity";
        this.select(next);
        this.$nextTick(() => {
          const tab = document.getElementById(`tab-${next}`);
          if (tab) tab.focus();
        });
      },
    },
  };
</script>
