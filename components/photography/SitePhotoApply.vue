<template>
  <section
    id="apply"
    class="grid grid-cols-2 gap-[10%] bg-[#202020] px-[max(5%,calc((100%_-_1260px)/2))] py-[100px] text-white max-[850px]:grid-cols-1 max-[850px]:gap-[30px] max-[850px]:px-[5%] max-[850px]:py-[70px]"
  >
    <div>
      <div class="mb-6 text-sm font-bold tracking-[2px] text-[#f9d236]">
        04 / 申請委託
      </div>
      <h2
        class="mb-[22px] text-[clamp(30px,3.3vw,53px)] font-black leading-[1.3] tracking-[-1.4px]"
      >
        一起記錄<br />你的空間。
      </h2>
      <p class="my-4 leading-[1.9] text-[#bbb]">
        填寫幾項基本資訊，會透過 Email
        回覆你，確認是否適合拍攝以及可預約的日期。
      </p>
      <div
        class="mt-10 border-l-[3px] border-[#f9d236] px-5 py-[15px] leading-[1.8] text-[#ddd]"
      >
        公益攝影委託範圍僅限台北市
      </div>
    </div>
    <form
      class="grid gap-5 bg-white p-[35px] text-[#222] max-[480px]:p-[22px]"
      name="sitephoto-inquiry"
      method="POST"
      action="/sitephoto/thanks"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit="submitting = true"
    >
      <input type="hidden" name="form-name" value="sitephoto-inquiry" />
      <p class="hidden">
        <label>請勿填寫：<input name="bot-field" /></label>
      </p>
      <label class="block text-[13px] font-bold"
        >委託類型
        <div class="mt-3 flex flex-wrap gap-6">
          <label class="font-normal"
            ><input
              v-model="form.type"
              type="radio"
              name="type"
              value="公益攝影"
            />
            公益攝影</label
          >
          <label class="font-normal"
            ><input
              v-model="form.type"
              type="radio"
              name="type"
              value="商業委託"
            />
            一般付費委託</label
          >
        </div>
      </label>
      <label v-if="form.type === '公益攝影'" class="block text-[13px] font-bold"
        >拍攝方案
        <select
          v-model="form.plan"
          name="plan"
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
        >
          <option value="30 坪以內／12,000 元">
            30 坪以內／捐款 12,000 元
          </option>
          <option value="31–60 坪／18,000 元">31–60 坪／捐款 18,000 元</option>
        </select>
      </label>
      <input v-else type="hidden" name="plan" value="另行報價" />
      <label class="block text-[13px] font-bold"
        >姓名／工作室名稱<input
          v-model.trim="form.name"
          name="name"
          required
          maxlength="100"
          placeholder="如何稱呼你？"
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
      /></label>
      <label class="block text-[13px] font-bold"
        >電子郵件<input
          v-model.trim="form.email"
          name="email"
          type="email"
          required
          placeholder="hello@example.com"
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
      /></label>
      <label class="block text-[13px] font-bold"
        >拍攝地區（{{ form.type === "商業委託" ? "雙北" : "僅限台北市" }}）
        <select
          v-model="form.district"
          name="district"
          required
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
        >
          <option value="" disabled>請選擇行政區</option>
          <optgroup label="台北市">
            <option
              v-for="district in taipeiDistricts"
              :key="district"
              :value="district"
            >
              {{ district }}
            </option>
          </optgroup>
          <optgroup v-if="form.type === '商業委託'" label="新北市">
            <option
              v-for="district in newTaipeiDistricts"
              :key="district"
              :value="district"
            >
              {{ district }}
            </option>
          </optgroup>
        </select>
      </label>
      <label class="block text-[13px] font-bold"
        >預計拍攝日期<input
          v-model="form.date"
          name="preferred_date"
          type="date"
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
      /></label>
      <label class="block text-[13px] font-bold"
        >空間資訊或參考照片連結（選填）
        <textarea
          v-model.trim="form.details"
          name="details"
          rows="3"
          placeholder="例如：28 坪住宅，預計 12 月完工；可貼 Google Drive 連結"
          class="mt-[9px] w-full rounded-none border border-[#d4d4d4] bg-white p-[13px] text-sm"
        />
      </label>
      <button
        class="inline-block cursor-pointer border-0 bg-[#f9d236] px-[25px] py-4 text-[15px] font-extrabold text-[#222] disabled:cursor-wait disabled:opacity-50 max-[480px]:px-[17px] max-[480px]:py-[14px]"
        type="submit"
        :disabled="submitting"
      >
        {{ submitting ? "正在提交…" : "送出攝影申請 ↗" }}
      </button>
      <p class="my-3 text-xs leading-[1.8] text-[#8b8b8b]">
        送出申請不代表預約成功。確認可承接後，才會提供下一步資訊。
      </p>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      const now = new Date();
      const saturday = new Date(now);
      saturday.setDate(now.getDate() + (6 - now.getDay()) + 7);
      const defaultDate = `${saturday.getFullYear()}-${String(
        saturday.getMonth() + 1
      ).padStart(2, "0")}-${String(saturday.getDate()).padStart(2, "0")}`;
      return {
        taipeiDistricts: [
          "中正區",
          "大同區",
          "中山區",
          "松山區",
          "大安區",
          "萬華區",
          "信義區",
          "士林區",
          "北投區",
          "內湖區",
          "南港區",
          "文山區",
        ],
        newTaipeiDistricts: [
          "板橋區",
          "三重區",
          "中和區",
          "永和區",
          "新莊區",
          "新店區",
          "樹林區",
          "鶯歌區",
          "三峽區",
          "淡水區",
          "汐止區",
          "瑞芳區",
          "土城區",
          "蘆洲區",
          "五股區",
          "泰山區",
          "林口區",
          "深坑區",
          "石碇區",
          "坪林區",
          "三芝區",
          "石門區",
          "八里區",
          "平溪區",
          "雙溪區",
          "貢寮區",
          "金山區",
          "萬里區",
          "烏來區",
        ],
        submitting: false,
        form: {
          type: "公益攝影",
          plan: "30 坪以內／12,000 元",
          name: "",
          email: "",
          district: "",
          date: defaultDate,
          details: "",
        },
      };
    },
    watch: {
      "form.type"() {
        this.form.district = "";
      },
    },
    methods: {
      choosePlan(id) {
        this.form.type = "公益攝影";
        this.form.plan =
          id === "small" ? "30 坪以內／12,000 元" : "31–60 坪／18,000 元";
      },
    },
  };
</script>
