# SitePhoto SEO 實作計畫（Nuxt 2）

> 範圍：僅優化 `/sitephoto` 與必要的站點級索引設定；不改動 `/`、KaiJi、SiteShot、SiteNear 的內容定位。  
> 注意：下列關鍵字優先順序屬**搜尋意圖策略假設**，並非已取得 Google Keyword Planner 搜尋量的排名。正式搜尋量、競爭程度與趨勢應在 Search Console／Keyword Planner 驗證。

## 1. 原始碼稽核結果

| 項目            | 現況（實際檔案）                                                                  | 問題／處理                                                                                                           |
| --------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 框架            | `package.json`：Nuxt `^2.15.8`、Vue 2                                             | 必須使用 Nuxt 2 `head()`，不可使用 Nuxt 3 `useSeoMeta()`／`routeRules`                                               |
| 頁面路由        | `pages/sitephoto/index.vue`                                                       | 路由已正確，保留 `/sitephoto`；統一尾斜線策略                                                                        |
| 頁面標題        | `pages/sitephoto/index.vue` 透過 `$t('sitephoto.meta.title')`                     | 檢查／改寫中文 SEO 標題，確保預渲染時為繁體中文                                                                      |
| 頁面描述        | 同檔以 `hid: 'description'` 覆寫                                                  | 可沿用，但改為符合搜尋意圖的文案                                                                                     |
| 全站 canonical  | `nuxt.config.js` 的 `head.link` 設為 `BRAND_LINK.website`                         | **高優先風險：** `/sitephoto` 若繼承首頁 canonical，可能錯誤指向 `/`；需在頁面用相同 `hid` 明確覆寫，並驗證輸出 HTML |
| 全站 OG         | `nuxt.config.js` 設定 KaiJi 的 `og:title`、`og:description`、`og:image`、`og:url` | SitePhoto 未逐項覆寫，社群分享可能顯示其他服務資訊                                                                   |
| 全站結構化資料  | `nuxt.config.js` 全域 `SoftwareApplication`，內容混合方生糖與 KaiJi               | 不應讓 SitePhoto 只有軟體 Schema；建議將軟體專屬 Schema 移至對應頁面，SitePhoto 使用自己的服務 Schema                |
| 網站網址        | `constants/link.js`：`https://designer-helper-funsugar.netlify.app/`              | 以此作目前基準 URL；部署前確認實際正式網域及是否有自訂網域／301 轉址                                                 |
| Hero            | `components/photography/SitePhotoHero.vue`                                        | 已有單一 `h1`，但為品牌標語；需在可見文字補上「台北室內攝影」等服務詞，不必破壞主標                                  |
| 方案            | `components/photography/SitePhotoPlans.vue`                                       | 有 NT$12,000／18,000 與照片數；需清楚標示為**公益捐款門檻，不是攝影服務費**                                          |
| 感謝頁          | `pages/sitephoto/thanks.vue`                                                      | 表單成功頁應 `noindex,follow`，避免進入搜尋結果                                                                      |
| sitemap／robots | `static/` 中未見 `robots.txt`、`sitemap.xml`                                      | 新增或確認部署產物，勿覆蓋其他服務的合法索引路徑                                                                     |
| 產出方式        | `package.json` 有 `npm run generate`                                              | 先確認 Netlify 實際 Build Command 與 Publish Directory，驗證 `/sitephoto` 產出完整 HTML                              |
| 語系            | `plugins/i18n.js`、`locales/zh-TW.json` 等                                        | 目前使用 i18n；確保中文 SEO metadata 不受預設語系或 client hydration 影響                                            |

## 2. 關鍵字策略：一個主頁、四個意圖

| 優先級 | 關鍵字               | 搜尋意圖         | 頁面對應                         | 說明                                 |
| ------ | -------------------- | ---------------- | -------------------------------- | ------------------------------------ |
| 主     | **台北室內攝影**     | 尋找台北服務     | SEO Title、導言、服務地區        | 主定位；不保證搜尋量最大             |
| 次     | **室內設計攝影師**   | 找人委託拍攝     | 服務說明、作品集、攝影者介紹     | 說明作品品質與合作對象               |
| 次     | **室內空間攝影價格** | 評估預算         | 方案標題、FAQ                    | 必須避免把捐款門檻誤寫成一般市場報價 |
| 次     | **室內設計作品拍攝** | 設計師作品集需求 | 作品展示、服務內容、圖片替代文字 | 與主要目標客群最貼近                 |

**延伸自然語彙（非硬塞）：** 台北空間攝影、住宅攝影、室內設計完工攝影、室內設計作品集攝影、室內攝影預約、公益攝影計畫。不要使用 `meta keywords` 期待 Google 排名提升。

**數據驗證：** Google Keyword Planner 比較平均月搜尋量及地域；Google Trends 檢查相對趨勢；上線後 Google Search Console 依實際曝光、點擊、CTR 與平均排名調整標題與內文。未取得數據前，不宣稱已找到「最多人搜尋」的關鍵字。

## 3. 建議 Metadata（繁體中文）

- **SEO Title：** `台北室內攝影・室內設計作品拍攝｜SitePhoto 公益攝影`
- **Meta Description：** `SitePhoto 提供台北市室內設計作品拍攝與空間攝影。設計師將攝影預算直接捐給公益機構，由我提供攝影服務。了解作品集、公益捐款方案與週末預約方式。`
- **OG Title：** `SitePhoto｜台北室內攝影・你捐款，我拍照`
- **OG Description：** `讓家的幸福，繼續向外流動。將攝影預算化為公益捐款，為室內設計作品留下專業影像。台北市週末預約制。`
- **Canonical：** `https://designer-helper-funsugar.netlify.app/sitephoto/`（**先確認部署最終 URL／尾斜線是否 301 統一**；如有正式自訂網域，以自訂網域為準）
- **OG Image：** `/sitephoto-og.jpg`（新增實際 1200×630 靜態圖片；使用 SitePhoto 品牌與真實作品，避免繼承 KaiJi 的 `/og-cover.png`）
- **Twitter Card：** `summary_large_image`，標題／描述／圖片與 SitePhoto 一致。
- **語言：** `zh-TW`／`zh-Hant-TW` 的語意保持一致，HTML `lang` 建議採有效 BCP 47 格式 `zh-Hant-TW`。

## 4. 分階段實作

### P0｜先修正索引身份（必做）

- [ ] 在 `pages/sitephoto/index.vue` 的 `head()` 明確定義 title、description、`og:title`、`og:description`、`og:image`、`og:image:alt`、`og:url`、`twitter:card`、`twitter:title`、`twitter:description`、`twitter:image`。
- [ ] 設定該頁 `link: [{ hid: 'canonical', rel: 'canonical', href: SITEPHOTO_URL }]`，並在 `nuxt.config.js` 的全站 canonical 補上 `hid: 'canonical'`，確保 Nuxt 2 可正確去重／覆寫。
- [ ] 使用 `hid` 一致的 OG／Twitter tags，確保不會同時出現 KaiJi 與 SitePhoto 兩套 metadata。
- [ ] 檢查全站 `SoftwareApplication` JSON-LD 的注入位置；移到真正的軟體頁面或調整為適合全站的 `Organization`，避免 SitePhoto 被誤標為軟體產品。此項會涉及共用設定，修改前回歸測試其他頁面。
- [ ] `pages/sitephoto/thanks.vue` 設定 `robots: noindex,follow`，保留一般使用者正常進入。
- [ ] 產製 SitePhoto 專用 OG 圖，放入 `static/sitephoto-og.jpg`。

**Nuxt 2 頁面 `head()` 示意（非可直接貼上整檔，須整合現有 i18n）：**

```js
import { BRAND_LINK } from "@/constants/link";

const baseUrl = BRAND_LINK.website.replace(/\/$/, "");
const pageUrl = `${baseUrl}/sitephoto/`;
const ogImage = `${baseUrl}/sitephoto-og.jpg`;

export default {
  head() {
    const title = "台北室內攝影・室內設計作品拍攝｜SitePhoto 公益攝影";
    const description =
      "SitePhoto 提供台北市室內設計作品拍攝與空間攝影。設計師將攝影預算直接捐給公益機構，由我提供攝影服務。了解作品集、公益捐款方案與週末預約方式。";
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
        { hid: "og:image", property: "og:image", content: ogImage },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "SitePhoto 台北室內攝影作品與公益攝影計畫",
        },
        { hid: "og:url", property: "og:url", content: pageUrl },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        { hid: "twitter:image", name: "twitter:image", content: ogImage },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: pageUrl }],
    };
  },
};
```

### P1｜可見內容 SEO（不破壞既有視覺）

- [ ] 保留 Hero 品牌標語 `h1`「讓空間被看見，讓善意繼續流動」，在下方新增自然可讀的服務說明：`台北室內攝影｜專為室內設計師拍攝完工作品與空間影像。`。不為 SEO 重複多個 H1。
- [ ] 在作品集 Section 加上可見 `h2`「室內設計作品拍攝｜攝影作品」，並為實際照片寫獨特、描述畫面內容的 `alt`；不要每張都重複四個關鍵字。
- [ ] 在方案 Section 加上 `h2`「室內空間攝影方案與公益捐款門檻」，解釋 NT$12,000／18,000 是直接捐贈給公益機構的門檻，不是 SitePhoto 收取的攝影費；清楚列出交付張數與坪數。
- [ ] 加入簡短 FAQ（可與方案區合併，不新增獨立頁面）：`室內空間攝影價格怎麼計算？`、`為什麼不是支付攝影費？`、`台北哪些區域可以預約？`、`可以安排平日拍攝嗎？`、`如何申請？`。答案必須與實際營運一致。
- [ ] 服務範圍明確標示「僅台北市、週六及週日預約制」，避免吸引不符合資格的詢問。
- [ ] 作品若來自 Behance，官網仍需保留足夠可被搜尋引擎理解的**原生文字**（案場類型、攝影內容、作品摘要）；不要只依賴外部 iframe。
- [ ] 不增加空洞的關鍵字頁、虛構評論或「台北最推薦攝影師」等無證據宣稱。

### P2｜結構化資料

- [ ] `/sitephoto` 加入 JSON-LD `Service`，`name` 為「台北室內攝影與室內設計作品拍攝」，`serviceType` 為「室內空間攝影」，`areaServed` 指向台北市；`provider` 可用 `Organization`／`Person` 依真實品牌主體選擇。
- [ ] `url`、`image`、`description`、`sameAs` 使用真實可公開網址；IG 尚未確定前不填假網址。
- [ ] 可用 `OfferCatalog` 表達兩種公益方案，但**不要把捐款門檻標示成一般攝影服務售價**。若無法正確描述，先不加入價格欄位。
- [ ] 不填虛構實體地址、營業時間、評分或 `aggregateRating`。
- [ ] FAQ 可以保留可見內容；不以 FAQ rich result 作為流量預期（Google 對 FAQ 富媒體結果有嚴格限制）。
- [ ] 使用 Schema.org Validator 及 Google Rich Results Test 檢查語法；語法通過不等於一定有搜尋結果富媒體呈現。

### P3｜靜態產出與站點索引

- [ ] 檢查 Netlify 部署命令是否為 `npm run generate`、發布目錄是否為 `dist/`；若不是，先釐清目前實際建置流程。
- [ ] `nuxt generate` 後確認 `dist/sitephoto/index.html`（或部署實際對應 HTML）存在，且原始 HTML **直接含**中文 H1、服務說明、title、description、canonical、OG 與 JSON-LD，不依賴瀏覽器執行 JS 才出現。
- [ ] 產生或維護 `static/robots.txt`，允許正常公開頁面索引，提供 sitemap URL；不把 `noindex` 誤寫在 robots 內。
- [ ] 產生或維護 `static/sitemap.xml`，至少包含 `/sitephoto/` 及其他**應被索引**的正式頁面；排除 `/sitephoto/thanks`、測試頁及不公開頁。`lastmod` 只填真實更新日期。
- [ ] 確認 `/sitephoto` 與 `/sitephoto/` 最終只保留一個 canonical，另一個如可行用 301 導向；避免重複內容。
- [ ] 確認站內可從方生糖首頁／導覽進入 SitePhoto，並讓 SitePhoto 的 logo、導覽及作品連結有效。
- [ ] 確認沒有 Netlify 密碼保護、`X-Robots-Tag: noindex`、意外 SPA fallback 或環境差異阻止搜尋引擎抓取。

### P4｜提交與追蹤

- [ ] 在 Google Search Console 驗證正式網域／URL-prefix 資源。
- [ ] 提交 sitemap；用「網址審查」檢查 `/sitephoto/` 是否可索引，必要時要求建立索引。
- [ ] 分享 SitePhoto 連結到 LINE／Threads／Facebook，驗證 OG 封面、標題與描述不再出現 KaiJi。
- [ ] Search Console 追蹤四組關鍵字的曝光、點擊、CTR、平均排名及實際新查詢；GA4 追蹤 `sitephoto_apply_click`、`sitephoto_form_submit`（只記事件，不傳姓名、Email 或表單文字）。
- [ ] 以 4–8 週為第一輪觀察窗口；低流量網站可能需要更久才有足夠資料，避免過早斷言 SEO 失敗。

## 5. 驗收標準（Definition of Done）

1. `/sitephoto/` 原始 HTML 有唯一、正確的 SitePhoto SEO Title、Description、Canonical 與完整 OG/Twitter metadata。
2. SitePhoto 的 canonical **不指向網站首頁**；社群分享不出現 KaiJi 的文字或封面。
3. SitePhoto 的 JSON-LD 不錯誤宣稱自己是 KaiJi 軟體產品；資料符合真實服務。
4. `/sitephoto/thanks` 不可索引，但表單提交流程及 Email 通知仍正常。
5. 首頁／其他服務原有 SEO 不因共用 `nuxt.config.js` 調整而被破壞。
6. 作品、方案、台北市範圍、週末預約均以可見文字呈現；價格清楚標示為公益捐款門檻。
7. 生成的 HTML 可由未執行 JS 的爬蟲讀取；Sitemap 正確包含正式服務頁。
8. Search Console 可檢查頁面，且完成實際部署網址、OG 圖與索引狀態驗證。

## 6. 建議實作順序與工時（粗估）

| 順序 | 工作                                     | 估計                     |
| ---- | ---------------------------------------- | ------------------------ |
| 1    | Metadata、Canonical、OG、感謝頁 noindex  | 1–2 小時                 |
| 2    | SitePhoto OG 圖、可見內容與 FAQ          | 2–4 小時                 |
| 3    | JSON-LD 與共用 Schema 清理               | 1–2 小時                 |
| 4    | 靜態產出、Sitemap、robots、部署驗證      | 1–3 小時                 |
| 5    | Search Console、事件追蹤、後續關鍵字觀察 | 1–2 小時（不含等待數據） |

**範圍控制：** 本階段不重做 Landing Page、不新增部落格、不搬移 `/sitephoto` 路由、不修改寄信機制、不建立多個關鍵字導流頁。先修正技術索引問題，再利用既有 One Page 的作品、方案與 FAQ 承接四種搜尋意圖。

## 7. 實作前需確認的兩項資訊

1. **正式網域：** 目前原始碼是 `https://designer-helper-funsugar.netlify.app/`；若已有新網域，所有 canonical／OG／Sitemap 必須統一使用新網域。
2. **Netlify 實際建置方式：** 是否使用 `npm run generate` + `dist/`？需核對部署設定與產物，不能只看 `package.json` 有 generate 指令就認定已預渲染。
