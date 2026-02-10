<template>
  <footer class="bg-black px-4 pt-16 text-white">
    <div class="dh-container space-y-16">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
        <section class="text-center md:text-left">
          <h4 class="mb-3 text-sm font-bold text-gray-400">
            {{ $t("footer.contactTitle") }}
          </h4>
          <address class="space-y-1 text-base not-italic text-gray-300">
            <p
              v-for="detail in contactDetails"
              :key="detail.label"
              class="flex flex-col text-sm"
            >
              <span class="text-xs uppercase tracking-[0.3em] text-gray-500">
                {{ $t(detail.labelKey) }}
              </span>
              <a
                v-if="detail.href"
                :href="detail.href"
                class="font-semibold transition hover:text-yellow-500"
              >
                {{ detail.value }}
              </a>
              <span v-else>{{ detail.value }}</span>
            </p>
          </address>
        </section>

        <nav class="text-center md:text-left" aria-label="Footer navigation">
          <h4 class="mb-3 text-sm font-bold text-gray-400">
            {{ $t("footer.navigationTitle") }}
          </h4>
          <ul class="space-y-2 text-gray-300">
            <li v-for="(link, index) in navLinks" :key="index">
              <a
                :href="link.href"
                class="transition-colors hover:text-yellow-500"
              >
                {{ $t(link.labelKey) }}
              </a>
            </li>
          </ul>
        </nav>

        <section class="text-center md:col-span-2 md:text-left">
          <h4 class="mb-4 text-sm font-bold text-gray-400">
            {{ $t("footer.ctaHeading") }}
          </h4>
          <a
            href="mailto:funsugar8119@gmail.com"
            class="break-all text-2xl font-bold transition-colors hover:text-yellow-500 md:text-4xl"
            >funsugar8119@gmail.com</a
          >
          <div class="mt-8">
            <p class="mb-2 text-sm text-gray-400">
              {{ $t("footer.socialHeading") }}
            </p>
            <ul
              class="flex flex-wrap justify-center gap-2 md:justify-start"
              aria-label="Social media links"
            >
              <li v-for="link in socialLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="group flex h-8 w-8 items-center justify-center transition"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    :src="iconSources[link.icon]"
                    :alt="link.label"
                    class="h-5 w-5 object-contain opacity-40 invert filter transition group-hover:opacity-80"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight md:text-6xl lg:text-8xl">
          {{ $t("footer.tagline") }}
        </h1>
        <div
          class="flex flex-col border-t border-gray-700 py-4 text-center text-xs text-gray-400 md:text-sm"
        >
          <small class="my-2 md:my-0">
            {{ $t("footer.copyright") }}
          </small>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
  import InstagramIcon from "@/assets/icons/Instagram.svg";
  import YoutubeIcon from "@/assets/icons/Youtube.svg";
  import LineIcon from "@/assets/icons/Line.svg";
  import BehanceIcon from "@/assets/icons/Behance.svg";

  export default {
    name: "AppFooter",
    data() {
      return {
        navLinks: [
          { labelKey: "footer.nav.home", href: "/" },
          { labelKey: "footer.nav.photography", href: "/photography" },
          {
            labelKey: "footer.nav.app",
            href: "https://kaiji-app.vercel.app/",
          },
        ],
        contactDetails: [{}],
        socialLinks: [
          {
            label: "YouTube",
            href: "https://www.youtube.com/playlist?list=PLq6qa78AJYu004VTivvUU-RY3Hc6pEzlF",
            icon: "youtube",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/funsugar_not_designer/",
            icon: "instagram",
          },

          {
            label: "Behance",
            href: "https://www.behance.net/WANG81195321",
            icon: "behance",
          },
          {
            label: "LINE",
            href: "https://line.me/R/ti/p/eddi7777",
            icon: "line",
          },
        ],
        iconSources: {
          instagram: InstagramIcon,
          youtube: YoutubeIcon,
          line: LineIcon,
          behance: BehanceIcon,
        },
      };
    },
  };
</script>

<style scoped></style>
