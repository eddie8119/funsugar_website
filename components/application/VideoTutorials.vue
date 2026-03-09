<template>
  <section class="px-4 py-16">
    <div class="dh-container space-y-10">
      <header class="text-center">
        <H2Title
          :title="$t('tutorials.title')"
          class-name="mt-3 text-3xl md:text-4xl"
        />
        <p class="mt-2 text-base text-gray-600">
          {{ $t("tutorials.description") }}
        </p>
      </header>

      <div
        class="tutorial-scrollbar -mx-4 flex gap-6 overflow-x-auto overflow-y-visible px-4 pb-4"
      >
        <article
          v-for="(video, index) in videos"
          :key="video.id"
          class="flex min-w-[280px] max-w-[320px] flex-none flex-col rounded-[32px] border border-black/5 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
        >
          <div class="overflow-hidden rounded-t-[32px]">
            <div class="relative aspect-video bg-black">
              <iframe
                :src="video.embed"
                :title="video.title"
                loading="lazy"
                class="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                frameborder="0"
              />
            </div>
          </div>
          <div class="space-y-2 px-6 py-5">
            <p class="text-base font-semibold uppercase">
              #{{ index + 1 }}
              <span class="text-gray-900">
                {{ video.title }}
              </span>
            </p>

            <p class="text-sm text-gray-500">
              {{ video.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import H2Title from "@/components/core/title/H2Title.vue";

  export default {
    name: "VideoTutorials",
    components: {
      H2Title,
    },
    computed: {
      videos() {
        const basePath = "tutorials.items";
        const sources = [
          {
            key: "projects",
            url: "https://www.youtube.com/embed/mMluexFO3gM?si=Bv-tTNMMAnoj2ovm",
          },
          {
            key: "tasks",
            url: "https://www.youtube.com/embed/FL6nL-Av6Xs?si=mk_rN82Optr85AS6",
          },
        ];

        return sources.map((source) => {
          const itemPath = `${basePath}.${source.key}`;
          const separator = source.url.includes("?") ? "&" : "?";

          return {
            id: source.key,
            embed: `${source.url}${separator}rel=0&modestbranding=1&playsinline=1`,
            tag: this.$t(`${itemPath}.tag`),
            title: this.$t(`${itemPath}.title`),
            description: this.$t(`${itemPath}.description`),
          };
        });
      },
    },
  };
</script>

<style scoped>
  .tutorial-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .tutorial-scrollbar::-webkit-scrollbar {
    height: 8px;
  }

  .tutorial-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .tutorial-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(15, 23, 42, 0.2);
    border-radius: 999px;
  }
</style>
