<template>
  <div>
    <section
      id="services-section"
      class="relative overflow-hidden px-12 py-16 lg:px-32"
    >
      <!-- Text wrapper start -->
      <div class="flex flex-col gap-8 md:flex-row">
        <h1 class="mb-4 text-5xl font-semibold uppercase">我們的服務</h1>
        <p class="mb-8 text-stone-500 xl:w-1/2">
          我的專業能幫你做出有質地的影像成品。
          專門協助宅產業類型客戶提供影像製作服務。 7
          個工作天提供您成品，並調整符合到您滿意的狀態。<br />
          <br />
          My specialty can help you make textured finished products.
          Specializing in assisting home industry customers to provide video
          production services. 7 working days to deliver your finished product
          and adjust it to your satisfaction.
        </p>
      </div>
      <!--  -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="service in serviceItems"
          :key="service.title"
          class="flex flex-col items-center gap-4 text-center md:items-start md:text-left"
          :class="service.cardClass"
        >
          <div
            class="flex items-center justify-center"
            :class="service.imageWrapperClass"
          >
            <img
              :src="service.image"
              :alt="service.imageAlt"
              class="-z-50 md:mb-4"
              :class="service.imageClass"
            />
          </div>
          <div
            class="flex w-full flex-col gap-2"
            :class="service.textWrapperClass"
          >
            <a :href="service.link" target="_blank">
              <h1
                class="delay-80 text-2xl font-semibold uppercase transition duration-150 ease-in-out hover:text-yellow-500"
              >
                {{ service.title }}
              </h1>
            </a>
            <p
              v-for="(description, index) in service.descriptions"
              :key="`${service.title}-${index}`"
              class="capitalize text-stone-500"
            >
              {{ description }}
            </p>
          </div>
        </div>
        <client-only>
          <div
            class="relative w-full overflow-hidden rounded-2xl shadow-lg"
            style="padding-top: 56.25%"
          >
            <iframe
              class="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/c-DApvmK3lE?rel=0&playsinline=1"
              title="材料工廠拍攝"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </client-only>
      </div>
      <!-- Circle start -->
      <div
        class="absolute top-0 -right-20 -z-20 mt-16 h-64 w-64 rounded-full bg-yellow-400"
      />
    </section>
    <section
      id="positive-energy"
      class="relative overflow-hidden px-12 pb-16 lg:px-32"
    >
      <div class="mt-10 flex flex-col gap-8 md:flex-row">
        <h1 class="mb-4 text-5xl font-semibold uppercase">更多居家正能量</h1>
        <p class="mb-8 text-stone-500 xl:w-1/2">
          室內攝影委託費，收到費用即捐款 1 成至"家園議題的慈善機構"。<br />
          委託者個人平時的捐款也可兌換成攝影服務張數。
          用各種形式，帶給居家的正能量。
          <br />
        </p>
      </div>
      <!--  -->
      <div class="flex flex-col md:flex-row md:gap-8">
        <div
          v-for="item in positiveEnergyItems"
          :key="item.title"
          class="my-8 flex flex-row items-center justify-between md:w-1/3 md:flex-col md:items-start"
          :class="item.cardClass"
        >
          <div
            class="w-1/3 md:w-full"
            :class="[
              item.imageWrapperClass,
              item.swapOnDesktop ? 'order-2 md:order-1' : 'order-1',
            ]"
          >
            <img :src="item.image" :alt="item.imageAlt" class="-z-50 md:mb-4" />
          </div>
          <div
            class="w-2/3 md:w-full"
            :class="[
              item.textWrapperClass,
              item.swapOnDesktop ? 'order-1 md:order-2' : 'order-2',
            ]"
          >
            <a :href="item.link" target="_blank">
              <h1
                class="delay-80 text-2xl font-semibold uppercase transition duration-150 ease-in-out hover:text-yellow-500"
              >
                {{ item.title }}
              </h1>
            </a>
            <p class="capitalize text-stone-500">
              {{ item.descriptions }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ServiceHomeImage from "@/assets/images/services/home.png";
  import ServiceLifestyleImage from "@/assets/images/services/lifestyle.png";
  import ServiceMomentsImage from "@/assets/images/services/moments.png";

  export default {
    data() {
      return {
        serviceItems: [
          {
            title: "室內空間作品攝影",
            link: "https://www.behance.net/gallery/158438305/40-",
            image: ServiceLifestyleImage,
            imageAlt: "interior",
            cardClass: "",
            imageWrapperClass: "",
            imageClass: "",
            textWrapperClass: "",
            descriptions: [
              "室內設計事務所完工作品集紀錄",
              "Interior Design Office Completed Portfolio Record",
            ],
          },
          {
            title: "建材公司影片",
            link: "https://www.behance.net/gallery/131481845/_",
            image: ServiceMomentsImage,
            imageAlt: "film",
            cardClass: "",
            imageWrapperClass: "",
            imageClass: "",
            textWrapperClass: "",
            descriptions: [
              "室內設計記錄影片",
              "Interior Design Interview Videos And Room Tour",
            ],
          },
          // {
          //   title: "屋主新居落成家族紀錄片",
          //   link: "https://docs.google.com/forms/d/e/1FAIpQLSf9Gz3Tbm2qxpIxiQVAZRqNx3ZBaO2R3LiQam-Wpyt-xno_kA/viewform",
          //   image: ServiceHomeImage,
          //   imageAlt: "Moments",
          //   cardClass: "md:items-start",
          //   imageWrapperClass: "order-1 w-1/3 md:w-full",
          //   imageClass: "",
          //   textWrapperClass: "order-2 text-right md:text-left",
          //   descriptions: [
          //     "屋主新屋紀錄片(限台北市)",
          //     "The homeowner's new house record commission (Taipei City)",
          //   ],
          // },
        ],
        positiveEnergyItems: [
          {
            title: "家扶扶幼捐款項目",
            link: "https://donate.ccf.org.tw/19/shopcart-step1/210",
            image: ServiceHomeImage,
            imageAlt: "interior",
            swapOnDesktop: false,
            cardClass: "md:justify-start",
            imageWrapperClass: "",
            textWrapperClass: "text-right md:text-left",
            descriptions:
              "每次委託費 1 成捐款至家園議題的慈善機構，收到委託人的匯款當下即捐出，創造善流動",
          },
          {
            title: "家扶捐款兌換攝影",
            link: "https://www.ccf.org.tw/support/project",
            image: ServiceHomeImage,
            imageAlt: "film",
            swapOnDesktop: true,
            cardClass: "",
            imageWrapperClass: "md:order-1",
            textWrapperClass: "text-left",
            descriptions:
              "委託方捐款家扶基金會，每1200元捐款可兌換 1 張室內攝影",
          },
          {
            title: "弘道老人捐款兌換攝影",
            link: "https://donations.hondao.org.tw/",
            image: ServiceHomeImage,
            imageAlt: "Moments",
            swapOnDesktop: false,
            cardClass: "",
            imageWrapperClass: "w-1/3 md:w-full",
            textWrapperClass: "text-right md:text-left",
            descriptions:
              "委託方捐款弘道老人福利基金會，每1200元捐款可兌換 1 張室內攝影",
          },
        ],
      };
    },
  };
</script>

<style></style>
