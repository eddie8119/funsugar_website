<template>
  <div class="relative w-full max-w-[560px]">
    <!-- Top-left decorative notch - 左上角裝飾缺口 -->
    <div
      class="absolute -top-6 left-0 z-10 h-[100px] w-[130px]"
      style="border-bottom-right-radius: 60px"
    />

    <!-- Main white frame container - 主要白色外框 -->
    <div class="relative" style="border-radius: 48px; padding: 16px">
      <!-- Image container with precise rounded corners - 圖片容器 -->
      <!-- 關鍵：所有四個角都要有 36px 圓角 -->
      <div class="relative h-[640px] overflow-hidden rounded-[36px]">
        <!-- Main image - 主圖片 -->
        <img
          :src="imageSrc"
          alt="Marketing team"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <!-- Bottom gradient overlay - 底部漸層 -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent"
        />

        <!-- Statistic Growth Card (Left) - 左側統計卡片 -->
        <div
          class="absolute bottom-6 left-6 w-[280px] border border-black/5 bg-white/95 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.18)] backdrop-blur-md"
          style="border-radius: 28px"
        >
          <!-- Card header - 卡片標題 -->
          <div
            class="flex items-center justify-between text-xs font-semibold text-gray-500"
          >
            <div class="flex items-center gap-1.5">
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span class="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span class="ml-3 text-gray-600">Statistic Growth</span>
            </div>
            <span class="text-gray-400">Daily</span>
          </div>

          <!-- Bar chart - 長條圖 -->
          <div class="mt-4 flex h-24 items-end gap-2">
            <div
              v-for="(height, idx) in barHeights"
              :key="idx"
              class="flex-1 rounded-full bg-lime-100"
            >
              <div
                class="w-full rounded-full bg-lime-400 transition-all duration-700 ease-out"
                :style="{
                  height: height + '%',
                  animationDelay: idx * 80 + 'ms',
                }"
                :class="animateIn ? 'bar-grow' : ''"
              />
            </div>
          </div>

          <!-- Stats footer - 統計數據 -->
          <div
            class="mt-4 flex items-center justify-between text-sm font-semibold"
          >
            <span class="text-gray-800">Total Revenue</span>
            <span class="text-green-500">+12%</span>
          </div>
        </div>

        <!-- Bottom-right corner with white background -->
        <div
          class="absolute bottom-0 right-0 bg-white"
          style="padding: 16px; border-top-left-radius: 36px"
        >
          <!-- Result Card - 成果卡片 -->
          <div
            class="w-44 border border-lime-300 bg-lime-300 p-4 text-gray-900"
            style="border-radius: 28px"
          >
            <p
              class="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-700"
            >
              OUR CORE<br />RESULTS
            </p>
            <p class="mb-1 text-4xl font-black leading-none text-gray-900">
              $134<span class="ml-0.5 text-2xl">B</span>
            </p>
            <p class="text-[10px] leading-relaxed text-gray-700">
              This year we successfully demonstrate our ability to generate wins
              and world-class revolutionary results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MarketingHero",
    props: {
      imageSrc: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      },
    },
    data() {
      return {
        barHeights: [45, 70, 60, 85, 65, 95, 75],
        animateIn: false,
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
