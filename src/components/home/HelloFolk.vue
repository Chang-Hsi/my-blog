<!-- src/views/Home.vue -->
<template>
  <div class="space-y-12">
    <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
      <div class="flex-1 space-y-6">
        <!-- 1. 標題區：最先進場 -->
        <div
          class="space-y-6 w-[460px] animate__animated animate__fadeInUp"
          :style="{
            '--animate-duration': '0.5s',
            '--animate-delay': '0s',
          }"
        >
          <div class="text-sm font-medium text-slate-500">Hello Folk</div>
          <h1
            class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            我是一個前端工程師
            <br class="hidden sm:block" />
            來自桃園
          </h1>
          <p class="max-w-xl text-sm text-slate-500 sm:text-base">
            我專門提供不只好看，而且對品牌或使用者真的有幫助、有影響力的設計
          </p>
        </div>

        <!-- 2. 按鈕區：稍後進場 -->
        <div
          class="flex flex-wrap items-center gap-3 py-6 animate__animated animate__fadeInUp"
          :style="{
            '--animate-duration': '0.5s',
            '--animate-delay': '0.2s',
          }"
        >
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-sm bg-black px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-900"
          >
            <span>Let&apos;s talk</span>
            <ArrowRightIcon class="ml-2 h-4 w-4" />
          </button>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            <span>Download CV</span>
            <ArrowRightIcon class="ml-2 h-4 w-4" />
          </button>
        </div>

        <!-- 3. 頭像＋說明區：最後一個左側元素 -->
        <div
          class="flex items-center gap-4 pt-36 animate__animated animate__fadeInUp"
          :style="{
            '--animate-duration': '0.5s',
            '--animate-delay': '0.4s',
          }"
        >
          <div class="flex -space-x-2">
            <div
              v-for="n in 4"
              :key="n"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-slate-200 text-xs font-semibold text-slate-700"
            >
              {{ n }}
            </div>
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-black text-xs font-semibold text-white"
            >
              98%
            </div>
          </div>

          <div class="space-y-0.5 text-sm">
            <div class="font-medium text-slate-900">Loved by founders globally</div>
            <div class="text-xs text-slate-500">5K Clients Word-Wide</div>
          </div>
        </div>
      </div>

      <!-- 4. 右側整張卡片：等左側三塊都進場後才出現 -->
      <div class="flex-1">
        <div
          class="relative overflow-hidden rounded-4xl bg-slate-200 animate__animated animate__fadeInUp"
          :style="{
            '--animate-duration': '0.5s',
            '--animate-delay': '0.8s',
          }"
        >
          <img :src="heroImage" alt="Profile" class="h-[600px] w-full object-cover" />
          <div
            class="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/90 px-6 py-4 text-xs text-white sm:text-sm"
          >
            <div class="flex items-center gap-1 py-4">
              <StarIcon class="h-4 w-4" />
              <StarIcon class="h-4 w-4" />
              <StarIcon class="h-4 w-4" />
              <StarIcon class="h-4 w-4" />
              <StarIcon class="h-4 w-4 text-slate-400" />
            </div>
            <div class="text-right">
              <div>Rated by 5K+ global clients and 20 companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee-wrapper border-y border-slate-100 py-6">
      <div class="marquee">
        <div v-for="i in 2" :key="i" class="marquee-group" aria-hidden="i === 2">
          <div
            v-for="logo in logos"
            :key="logo.alt + '-' + i"
            class="flex items-center px-10"
          >
            <img :src="logo.src" :alt="logo.alt" class="h-28 w-auto opacity-60" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon, StarIcon } from "@heroicons/vue/24/solid";

const heroImage =
  "https://i.pinimg.com/1200x/7c/b9/4c/7cb94c02e4f249b0297aeefd817b06ba.jpg";

const baseLogos = [
  {
    src: "https://i.pinimg.com/736x/bd/cb/30/bdcb30d31716a241e1c814806c065ed7.jpg",
    alt: "Logo 1",
  },
  {
    src: "https://i.pinimg.com/736x/bd/cb/30/bdcb30d31716a241e1c814806c065ed7.jpg",
    alt: "Logo 2",
  },
  {
    src: "https://i.pinimg.com/736x/bd/cb/30/bdcb30d31716a241e1c814806c065ed7.jpg",
    alt: "Logo 3",
  },
  {
    src: "https://i.pinimg.com/736x/bd/cb/30/bdcb30d31716a241e1c814806c065ed7.jpg",
    alt: "Logo 4",
  },
];

const logos = [...baseLogos, ...baseLogos];
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
}

.marquee {
  display: flex;
  width: 100%;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
  animation: marquee 8s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
