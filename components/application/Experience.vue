<template>
  <section class="bg-[#f5f0eb] px-4 py-12 md:py-16 lg:h-screen">
    <div class="dh-container flex h-full items-center">
      <div
        class="grid h-full w-full grid-cols-1 gap-10 rounded-[32px] p-6 md:py-8 md:px-0 lg:grid-cols-[1.05fr_0.95fr] lg:bg-transparent"
      >
        <div
          class="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-black"
        >
          <client-only>
            <div
              ref="videoContainer"
              class="relative h-full w-full overflow-hidden rounded-2xl"
            >
              <iframe
                ref="videoPlayer"
                :src="videoEmbedUrl"
                :title="$t('experence.videoTitle')"
                class="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                frameborder="0"
              />
            </div>
          </client-only>
          <span
            class="absolute bottom-12 right-6 rounded-full bg-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-lg"
          >
            {{ $t("experence.videoBadge") }}
          </span>
        </div>
        <div
          class="flex h-full flex-col justify-between rounded-[32px] bg-white/40 px-4 py-6 shadow-lg backdrop-blur-sm lg:bg-transparent lg:px-4 lg:py-2 lg:shadow-none"
        >
          <div>
            <p class="text-xs uppercase text-gray-500">
              {{ $t("experence.eyebrow") }}
            </p>
            <H2Title
              :title="$t('experence.title')"
              class-name="my-4 text-3xl leading-tight md:text-4xl lg:text-5xl"
            />
            <p class="mb-8 text-base text-gray-600 md:text-lg">
              {{ $t("experence.description") }}
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <PrimaryCta
                variant="secondary"
                href="https://interior-construction-helper.web.app/"
                :label="$t('experence.ctaLabel')"
                :new-tab="true"
              />
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6 md:mt-12">
            <div
              class="mb-4 flex flex-col gap-2 text-xs uppercase tracking-[0.4em] text-gray-500 md:flex-row md:items-center md:justify-between"
            >
              <span>{{ $t("experence.testimonialHeading") }}</span>
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

  let youtubeAPIPromise = null;
  const loadYouTubeAPI = () => {
    if (typeof window === "undefined") return Promise.resolve(null);
    if (window.YT && typeof window.YT.Player === "function") {
      return Promise.resolve(window.YT);
    }
    if (youtubeAPIPromise) return youtubeAPIPromise;
    youtubeAPIPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previous === "function") previous();
        resolve(window.YT);
      };
    });
    return youtubeAPIPromise;
  };

  export default {
    name: "Experience",
    components: {
      H2Title,
      PrimaryCta,
    },
    data() {
      return {
        videoUrl: "https://youtube.com/shorts/xv1ozfO5S-Q?si=tynpmkuzd_gIB5V8",
        player: null,
        playerReady: false,
        videoObserver: null,
      };
    },
    computed: {
      videoId() {
        if (!this.videoUrl) return "";
        const match = this.videoUrl.match(
          /(?:shorts\/|watch\?v=|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/
        );
        return match ? match[1] : this.videoUrl;
      },
      videoEmbedUrl() {
        const id = this.videoId;
        return id
          ? `https://www.youtube.com/embed/${id}?rel=0&playsinline=1&mute=1&enablejsapi=1`
          : "";
      },

      testimonials() {
        return [
          {
            quote: this.$t("experence.testimonials.quote1"),
            author: this.$t("experence.testimonials.author1"),
          },
          {
            quote: this.$t("experence.testimonials.quote2"),
            author: this.$t("experence.testimonials.author2"),
          },
        ];
      },
    },
    mounted() {
      if (process.client) {
        this.$nextTick(this.initializePlayer);
      }
    },
    beforeDestroy() {
      if (this.videoObserver) {
        this.videoObserver.disconnect();
        this.videoObserver = null;
      }
      if (this.player && typeof this.player.destroy === "function") {
        this.player.destroy();
        this.player = null;
      }
    },
    methods: {
      async initializePlayer() {
        const videoId = this.videoId;
        if (!videoId) return;
        const YT = await loadYouTubeAPI();
        if (!YT || !this.$refs.videoPlayer) return;
        this.player = new YT.Player(this.$refs.videoPlayer, {
          videoId,
          playerVars: {
            autoplay: 0,
            rel: 0,
            playsinline: 1,
            mute: 1,
            controls: 1,
            modestbranding: 1,
          },
          events: {
            onReady: () => {
              this.playerReady = true;
              this.initializeVideoObserver();
            },
          },
        });
      },
      initializeVideoObserver() {
        if (!this.playerReady) return;
        const target = this.$refs.videoContainer;
        if (!target || !window.IntersectionObserver) return;
        this.videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.controlVideo("playVideo");
              } else {
                this.controlVideo("pauseVideo");
              }
            });
          },
          { threshold: 0.5 }
        );
        this.videoObserver.observe(target);
      },
      controlVideo(command) {
        if (!this.player || !this.playerReady) return;
        if (command === "playVideo") {
          this.player.playVideo();
        } else {
          this.player.pauseVideo();
        }
      },
    },
  };
</script>

<style scoped></style>
