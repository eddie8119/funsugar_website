<template>
  <div ref="switcherRoot" class="relative">
    <button
      type="button"
      aria-haspopup="true"
      :aria-expanded="isOpen.toString()"
      @click.stop="toggleDropdown"
    >
      <img
        :src="globeIcon"
        alt="Change language"
        class="h-6 w-6 object-contain"
      />
    </button>

    <DropdownPanel :visible="isOpen" panel-class="w-[120px]" align="right">
      <button
        v-for="language in languages"
        :key="language.code"
        class="flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-100"
        :class="{
          'bg-gray-100 text-black': language.code === currentLocale,
          'text-gray-600': language.code !== currentLocale,
        }"
        type="button"
        @click="selectLanguage(language.code)"
      >
        <span>{{ language.label }}</span>
      </button>
    </DropdownPanel>
  </div>
</template>

<script>
  import globeIcon from "@/assets/icons/Global.svg";
  import DropdownPanel from "@/components/core/DropdownPanel.vue";

  export default {
    name: "LanguageSwitcher",
    components: {
      DropdownPanel,
    },
    data() {
      return {
        isOpen: false,
        globeIcon,
        languages: [
          { code: "zh-TW", label: "中文" },
          { code: "en", label: "English" },
          { code: "ja", label: "日語" },
        ],
      };
    },
    computed: {
      currentLocale() {
        return this.$i18n.locale;
      },
    },
    mounted() {
      if (process.client) {
        document.addEventListener("click", this.handleClickOutside);
      }
      this.hydrateLocaleFromStorage();
    },
    beforeDestroy() {
      if (process.client) {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectLanguage(code) {
        if (this.$i18n.locale === code) {
          this.isOpen = false;
          return;
        }
        this.$i18n.locale = code;
        if (process.client) {
          localStorage.setItem("preferred-locale", code);
          document.cookie = `preferred-locale=${code};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
        }
        this.isOpen = false;
      },
      handleClickOutside(event) {
        if (!this.isOpen) return;
        const root = this.$refs.switcherRoot;
        if (root && !root.contains(event.target)) {
          this.isOpen = false;
        }
      },
      hydrateLocaleFromStorage() {
        if (!process.client) return;
        const saved = localStorage.getItem("preferred-locale");
        if (saved && saved !== this.$i18n.locale) {
          this.$i18n.locale = saved;
        }
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
