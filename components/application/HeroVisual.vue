<template>
  <div class="relative h-full min-h-[380px] w-full max-w-[640px] px-3 sm:px-0">
    <!-- Top-left decorative notch - 左上角裝飾缺口 -->
    <div
      class="absolute -top-6 left-3 z-10 h-[90px] w-[120px] bg-white sm:left-0 sm:h-[100px] sm:w-[150px]"
      style="border-bottom-right-radius: 60px"
    />

    <!-- Main white frame container - 主要白色外框 -->
    <div class="relative mx-auto h-full w-full" style="border-radius: 48px">
      <!-- Image container with precise rounded corners - 圖片容器 -->
      <!-- 關鍵：所有四個角都要有 36px 圓角 -->
      <div
        class="relative h-full min-h-[360px] overflow-hidden sm:min-h-[460px]"
        style="border-radius: 36px 36px 0 36px"
      >
        <!-- Main image - 主圖片 -->
        <img
          :src="imageSrc"
          alt="Marketing team"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <!-- Bottom gradient overlay - 底部漸層 -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-40" />

        <!-- 左側統計卡片 -->
        <div
          class="absolute bottom-4 left-4 w-[220px] border border-black/5 bg-white p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:w-[300px] sm:p-5"
          style="border-radius: 28px"
        >
          <!-- 卡片標題 -->
          <div
            class="flex items-center justify-between text-xs font-semibold text-gray-500"
          >
            <div class="flex items-center gap-1.5">
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span class="ml-3 text-gray-600">KaiJi</span>
            </div>
            <!-- <span class="text-gray-400">Daily</span> -->
          </div>

          <div class="mt-2 flex h-[150px] items-end gap-2">
            <img
              :src="productImage"
              alt="KaiJi Application"
              class="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <!-- Stats footer - 統計數據 -->
          <!-- <div
            class="mt-4 flex items-center justify-between text-sm font-semibold"
          >
            <span class="text-gray-800">Total Revenue</span>
            <span class="text-green-500">+3000</span>
          </div> -->
        </div>

        <!-- Bottom-right corner with white background -->
        <div
          class="absolute bottom-0 right-0 bg-white shadow-lg sm:p-4 md:p-3"
          style="border-top-left-radius: 36px"
        >
          <!-- Result Card - 成果卡片 -->
          <div
            class="w-40 bg-brand-tertiary p-4 text-gray-900 sm:w-44"
            style="border-radius: 28px"
          >
            <p
              class="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-700"
            >
              {{ $t("hero.visual.badgeLabel") }}
            </p>
            <p class="mb-1 text-4xl font-black leading-none text-gray-900">
              30<span class="ml-0.5 text-2xl">%</span>
            </p>
            <p class="text-[10px] leading-relaxed text-gray-700">
              {{ $t("hero.visual.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductImage from "~/assets/images/application/Product.png";

  export default {
    name: "MarketingHero",
    props: {
      imageSrc: {
        type: String,
        default:
          "https://plus.unsplash.com/premium_photo-1681074963599-b895b56dd752?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    data() {
      return {
        barHeights: [45, 70, 60, 85, 65, 95, 75],
        animateIn: false,
        productImage: ProductImage,
      };
    },
    mounted() {
      // Trigger animation after component mounts
      setTimeout(() => {
        this.animateIn = true;
      }, 200);
    },
  };
</script>

<style scoped>
  @keyframes bar-grow {
    from {
      height: 0%;
    }
    to {
      height: var(--final-height);
    }
  }

  .bar-grow {
    animation: bar-grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Backdrop blur support */
  @supports (backdrop-filter: blur(12px)) {
    .backdrop-blur-md {
      backdrop-filter: blur(12px);
    }
  }
</style>
