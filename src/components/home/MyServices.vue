<template>
  <div class="min-h-screen bg-base-100 text-base-content py-10">
    <div class="mx-auto flex flex-col gap-10">
      <!-- 上區塊 -->
      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-[11px] tracking-[0.25em] uppercase text-neutral-500">
            My Service
          </p>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            提供職業級的服務
          </h1>

          <p class="text-sm md:text-base text-neutral-500 max-w-md">
            為你的事業量身打造數位解決方案，幫助提升表現、帶動成長，並追求長期穩定的成功。
          </p>

          <div class="flex flex-wrap gap-3 pt-2">
            <button
              class="btn btn-neutral rounded-full px-6 md:px-7 h-11 md:h-12 text-sm md:text-base shadow-md animate__animated animate__fadeInUp"
            >
              Hire Me
            </button>
            <button
              class="btn btn-outline rounded-full px-6 md:px-7 h-11 md:h-12 gap-2 text-sm md:text-base border-neutral-300 hover:bg-neutral-100 animate__animated animate__fadeInUp"
            >
              <PlayIcon class="w-4 h-4" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 下區塊：左右兩區塊，高度相同 -->
      <div class="flex flex-col lg:flex-row gap-8 items-stretch">
        <!-- 下區塊左半邊 -->
        <div class="flex-1 space-y-3 h-full">
          <div
            v-for="service in services"
            :key="service.id"
            class="collapse rounded-2xl border transition-all"
            :class="
              service.id === activeId
                ? 'bg-white border-neutral-200 shadow-sm'
                : 'bg-neutral-100 border-transparent hover:bg-neutral-200'
            "
          >
            <input
              type="radio"
              name="service-accordion"
              :checked="service.id === activeId"
              @change="setActive(service.id)"
            />
            <div
              class="collapse-title px-6 py-4 flex items-center justify-between gap-3 text-base md:text-lg font-medium"
            >
              <span>{{ service.name }}</span>
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-neutral-900 transition-transform"
                :class="
                  service.id === activeId
                    ? 'rotate-45 border-neutral-400'
                    : 'border-neutral-300'
                "
              >
                <ArrowUpRightIcon v-if="service.id === activeId" class="w-4 h-4" />
                <ArrowRightIcon v-else class="w-4 h-4" />
              </span>
            </div>

            <div class="collapse-content px-6 pb-5 pt-0">
              <ul
                v-if="service.id === activeId"
                class="list-disc pl-4 space-y-1.5 text-sm text-neutral-600 animate__animated animate__fadeInUp"
              >
                <li v-for="item in service.features" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 下區塊右半邊（與左半邊等高） -->
        <div
          :key="activeService.id"
          class="flex-1 rounded-4xl p-6 md:p-10 lg:p-12 flex items-center justify-center shadow-xl animate__animated animate__fadeInRight h-full"
          :class="activeService.bgClass"
        >
          <div class="w-full max-w-2xl">
            <!-- Web Development：Laptop + Phone -->
            <div
              v-if="activeService.id === 'webdev'"
              class="relative mx-auto aspect-4/3 flex items-end justify-center"
            >
              <div
                class="absolute left-[10%] bottom-10 w-[26%] aspect-9/18 rounded-[28px] bg-[#111827] shadow-2xl flex items-center justify-center"
              >
                <div
                  class="w-[88%] h-[88%] bg-[#f5eee7] rounded-[20px] flex flex-col items-center justify-center space-y-3"
                >
                  <span class="text-[10px] tracking-[0.22em] uppercase text-neutral-500">
                    Project Board
                  </span>
                  <span class="text-xs text-neutral-700 px-3 text-center">
                    Responsive layouts, clean code and delightful UX.
                  </span>
                </div>
              </div>

              <div
                class="relative w-[72%] aspect-16/10 rounded-[26px] bg-[#fdf7f0] shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
              >
                <div class="h-8 bg-[#111827] flex items-center px-4">
                  <div class="flex gap-1.5">
                    <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span class="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div class="flex-1 px-8 py-6 flex gap-6">
                  <div class="flex-1 space-y-3">
                    <p class="text-xs tracking-[0.22em] uppercase text-neutral-400">
                      Your Design Here
                    </p>
                    <p class="text-2xl font-semibold text-neutral-800">
                      macbook pro mockup
                    </p>
                    <p class="text-xs text-neutral-500 leading-relaxed max-w-xs">
                      Layouts built with performance, accessibility and modern frontend
                      tooling in mind.
                    </p>
                    <button
                      class="mt-1 inline-flex items-center rounded-full border border-neutral-800 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em]"
                    >
                      Mockup
                    </button>
                  </div>
                  <div class="flex-1 grid grid-cols-2 gap-2">
                    <div class="rounded-xl bg-[#e8ddd2]" />
                    <div class="rounded-xl bg-[#f4ece4]" />
                    <div class="rounded-xl bg-[#f4ece4]" />
                    <div class="rounded-xl bg-[#e8ddd2]" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Branding：立起的書本 -->
            <div
              v-else-if="activeService.id === 'branding'"
              class="relative mx-auto aspect-4/3 flex items-center justify-center"
            >
              <div
                class="w-[70%] h-[86%] bg-[#fdf7f0] rounded-[26px] shadow-2xl border border-neutral-200 -rotate-12 flex items-center justify-center overflow-hidden"
              >
                <div class="absolute inset-7 border border-neutral-200 rounded-[20px]" />
                <div class="flex flex-col items-start justify-center gap-2 px-8">
                  <p class="text-xs tracking-[0.22em] uppercase text-neutral-400">
                    Magazine Series 04
                  </p>
                  <p class="text-3xl font-semibold tracking-[0.18em] leading-none">
                    HEY<br />
                    MOCKUP!
                  </p>
                  <p class="text-[11px] text-neutral-500 mt-2 max-w-[220px]">
                    Minimal editorial style layouts to showcase your visual identity.
                  </p>
                </div>
              </div>
            </div>

            <!-- Web Design：大畫面 Mockup -->
            <div
              v-else-if="activeService.id === 'webdesign'"
              class="relative mx-auto aspect-4/3 flex items-center justify-center"
            >
              <div
                class="w-[78%] h-[82%] bg-[#fdf7f0] rounded-[26px] shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
              >
                <div class="h-9 bg-[#111827] flex items-center justify-between px-5">
                  <span class="text-[11px] tracking-[0.25em] uppercase text-neutral-200">
                    Your Design Here
                  </span>
                  <span class="h-5 w-20 rounded-full bg-black/40" />
                </div>
                <div class="flex-1 flex">
                  <div class="flex-1 px-8 py-6 space-y-4">
                    <p class="text-xs tracking-[0.22em] uppercase text-neutral-400">
                      Web Design Studio
                    </p>
                    <p class="text-[22px] font-semibold leading-snug">
                      Clean, modern interfaces that put users first.
                    </p>
                    <p class="text-xs text-neutral-500 max-w-xs">
                      Wireframes, prototypes and polished visual systems tailored to your
                      product.
                    </p>
                    <div class="flex gap-2 pt-2">
                      <span class="h-9 w-24 rounded-full bg-[#e8ddd2]" />
                      <span class="h-9 w-24 rounded-full bg-[#f4ece4]" />
                    </div>
                  </div>
                  <div class="w-[38%] bg-[#e8ddd2] flex items-center justify-center">
                    <div class="w-[68%] aspect-3/5 bg-[#fdf7f0] rounded-3xl shadow-xl" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Marketing：單手機 Mockup -->
            <div
              v-else
              class="relative mx-auto aspect-4/3 flex items-center justify-center"
            >
              <div
                class="w-[32%] aspect-9/18 rounded-[30px] bg-[#111827] shadow-2xl flex items-center justify-center"
              >
                <div
                  class="w-[88%] h-[88%] bg-[#fdf7f0] rounded-[22px] flex flex-col items-center justify-between py-5"
                >
                  <div class="space-y-2 px-4 text-center">
                    <p class="text-[10px] tracking-[0.22em] uppercase text-neutral-500">
                      Newstyle
                    </p>
                    <p class="text-xs text-neutral-600">
                      Campaign visuals crafted to boost click-through and conversions.
                    </p>
                  </div>
                  <div class="w-[68%] h-[38%] rounded-2xl bg-[#e6d1c7]" />
                  <p class="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                    See more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下區塊結束 -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ArrowUpRightIcon, ArrowRightIcon, PlayIcon } from "@heroicons/vue/24/outline";
// 每個 service 對應自己的說明 + 右側背景色
const services = [
  {
    id: "branding",
    name: "品牌網站與形象規劃", // 側重說明擅長製作好品牌的網站，包含對應的後台設計
    features: [
      "品牌架構線框與原型設計",
      "可用性測試與使用者回饋分析",
      "視覺識別與品牌系統設計",
    ],
    bgClass: "bg-[#d9b89b]",
  },
  {
    id: "webdev",
    name: "前端開發與RWD", // 側重說明擅長RWD，
    features: [
      "響應式且載入快速的網站",
      "與現代後端 API 的整合",
      "符合標準的 SEO 與無障礙設計",
    ],
    bgClass: "bg-[#d4c4b3]",
  },
  {
    id: "webdesign",
    name: "網頁視覺與體驗設計", // 側重說明擅長網頁設計
    features: [
      "以 UX 為核心的版型與流程規劃",
      "高保真 UI 設計與設計系統",
      "可供團隊溝通的互動原型",
    ],
    bgClass: "bg-[#c8b5a9]",
  },
  {
    id: "marketing",
    name: "行銷頁面與 iOS App", // 說明也有開發,負責IOS手機APP的經驗, 使用SwiftUI開發
    features: [
      "著陸頁與行銷活動轉換率優化",
      "內容與 Email 行銷支援",
      "SwiftUI 開發的 iOS App 成效追蹤與分析",
    ],
    bgClass: "bg-[#b9958f]",
  },
];

const activeId = ref("webdev");

// 目前選取的 service
const activeService = computed(() => {
  return services.find((s) => s.id === activeId.value) || services[0];
});

// 切換 service，同時會切換 collapse 展開 + 右側 Mockup
const setActive = (id) => {
  activeId.value = id;
};
</script>
