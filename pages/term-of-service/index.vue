<template>
  <div>
    <Navbar />
    <div class="px-12 lg:px-32 pb-16 pt-36  relative">
      <h1 class="uppercase text-5xl mb-4 font-semibold ">
        常見問題
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-[75px] w-full">
        <div class="hidden md:flex justify-center items-center">
          <img src="@/assets/camera.png" alt="">
        </div>
        <div class="grid grid-cols-1 gap-y-4 w-full items-start">
          <div>
            <h1 class="font-bold">拍攝需要事先準備或是配合什麼?</h1>
            <p class="font-sm">(以下1-3點若無法配合，建議可以尋求專業佈置團隊的協助)</p>
            <p>
              1.請設計師或是助理一定要比攝影師先到場整理清潔佈置，尤其是屋主已經入住的狀態。</br>
              並請多準備符合設計風格的裝飾道具，基本的有厚書、相框、藝術裝飾品、掛畫、地毯/披毯、植物花器、餐具器皿、枕頭抱枕等。</br>
              2.如會介意床單平整，請事先燙過整平，玻璃鏡子容易留手紋油脂，水龍頭易有水漬，面盆易留水痕。<span class="font-bold">(電修另計)</span></br>
              3.如會介意電線外露，請事先將電線整理好，或先拔除，<span class="font-bold">事後電修會加收費用。</span>(如電視盒/視聽音響器材)</br>
              4.可以事先通知社區管理員當天有攝影師會來拍攝，以減少在大廳被警衛盤問的時間。(通常高級住宅對攝影器材比較敏感)</br>
            </p>
          </div>
          <div>
          </div>
          <div>
            <h1 class="font-bold">設計案現場攝影師會幫忙裝飾佈置嗎？</h1>
            <p>
              攝影師會就每個空間畫面構圖的特性與重點，在現場作適當的微調，但不會幫設計師做DECO，畢竟軟裝也是設計的一個重要環節，設計師如有需要，可以介紹傢俱家飾專業佈置團隊。
            </p>
          </div>
          <div>
            <h1 class="font-bold">什麼情況會加收電修費用？</h1>
            <p>
              比如說要求把整個冷氣或是微波爐修掉，範圍很大或是難度較高、無中生有/變色的修圖。
            </p>
          </div>
          <div>
            <h1 class="font-bold">當天拍攝完畢需要付費？</h1>
            <p>
              提交拍攝成品後，客戶確認完修照片無誤之後，進行請款。
            </p>
          </div>
          <div>
            <h1 class="font-bold">拍攝完之後多久時間照片會好？</h1>
            <p>
              約一周左右，3天提供毛片挑選，採選毛片後再電修提供最終成品。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 w-full items-start">
          <div>
            <h1 class="font-bold">照片精修處理</h1>
            </br>
            <p>
              1.校正空間的線條垂直水平</br>
              </br>
              2.明亮修正</br>
              </br>
              3.修除照片中的雜物(如修除電線，減少阿雜，而這些地方就是構成精緻的細節)
            </p>
          </div>
          <div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-y-2">
            <img src="@/assets/qa/DSC030252.jpg" alt="">
            <img src="@/assets/qa/DSC030251.jpg" alt="">
            <img src="@/assets/qa/DSC030253.jpg" alt="">
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  comments: {
    Navbar
  }
}

</script>