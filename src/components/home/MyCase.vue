<template>
  <div class="min-h-screen bg-neutral-100 px-4 py-16 md:px-8 lg:px-16">
    <div class="mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">
          我經手過的專案
        </h2>
        <p class="text-sm md:text-base text-neutral-500">
          向下捲動，看看每個專案如何帶來實際、可量化的成效。
        </p>
      </div>

      <div ref="stackRef" class="relative" :style="{ height: stackHeight + 'px' }">
        <div
          v-for="(item, index) in cases"
          :key="item.id"
          class="sticky top-10 md:top-16"
          :class="index > 0 ? 'mt-6' : ''"
          :style="cardStyle(index)"
        >
          <div
            class="rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            :class="item.dark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'"
          >
            <div class="md:w-1/2">
              <div
                class="h-56 md:h-full w-full flex items-center justify-center group"
                :class="item.mockupBg"
              >
                <div class="w-11/12 md:w-10/12">
                  <div
                    class="aspect-16/10 rounded-3xl bg-white shadow-2xl overflow-hidden flex items-center justify-center"
                  >
                    <img
                      :src="item.mockupImg"
                      :alt="item.title"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="md:w-1/2 px-6 md:px-10 py-6 md:py-8 flex flex-col gap-6">
              <div class="space-y-2">
                <h3 class="text-xl md:text-2xl font-semibold">
                  {{ item.title }}
                </h3>
                <p
                  class="text-xs md:text-sm"
                  :class="item.dark ? 'text-neutral-300' : 'text-neutral-500'"
                >
                  {{ item.subtitle }}
                </p>
              </div>

              <div class="flex flex-col gap-4 text-xs md:text-sm">
                <div class="flex flex-wrap gap-8">
                  <div class="space-y-1 max-w-xs">
                    <div class="font-semibold">Challenge</div>
                    <p :class="item.dark ? 'text-neutral-300' : 'text-neutral-500'">
                      {{ item.challenge }}
                    </p>
                  </div>
                  <div class="space-y-1 max-w-xs">
                    <div class="font-semibold">Solution</div>
                    <p :class="item.dark ? 'text-neutral-300' : 'text-neutral-500'">
                      {{ item.solution }}
                    </p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-8 pt-2">
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-semibold">
                      {{ item.metric1.value }}
                    </span>
                    <span
                      class="text-[10px] uppercase tracking-[0.22em]"
                      :class="item.dark ? 'text-neutral-300' : 'text-neutral-500'"
                    >
                      {{ item.metric1.label }}
                    </span>
                  </div>
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-semibold">
                      {{ item.metric2.value }}
                    </span>
                    <span
                      class="text-[10px] uppercase tracking-[0.22em]"
                      :class="item.dark ? 'text-neutral-300' : 'text-neutral-500'"
                    >
                      {{ item.metric2.label }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="pt-2">
                <button
                  class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs md:text-sm border"
                  :class="
                    item.dark
                      ? 'border-white bg-white text-neutral-900'
                      : 'border-neutral-900 bg-neutral-900 text-white'
                  "
                >
                  <span>View case study</span>
                  <ArrowLongRightIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";
import PAYEASY from "@/assets/img/PAYEASY.png";
import PAYEASYADMIN from "@/assets/img/PAYEASYADMIN.png";
import RIV from "@/assets/img/RIV.png";
import RIVADMIN from "@/assets/img/RIV-ADMIN.png";
import RIVPOS from "@/assets/img/RIV-POS.png";

const cases = [
  {
    id: 1,
    title: "PAYEASY 電商網站｜交流專區",
    subtitle: "會員交流、心得分享與活動資訊的集中入口。",
    challenge:
      "第一個實際經手的專案，需要在既有程式碼上延伸開發，同時滿足客戶的新需求調整。",
    solution: "在不影響原有功能的前提下完成版面與功能調整，專案上線後持續穩定運行至今。",
    metric1: { value: "60%", label: "訂閱數成長" },
    metric2: { value: "40%", label: "聯絡我們轉換提升" },
    dark: false,
    mockupBg: "bg-[#88a8b8]",
    mockupImg: PAYEASY, // PAYEASY 電商交流專區畫面
  },
  {
    id: 2,
    title: "PAYEASY 電商網站｜後台管理系統",
    subtitle: "協助營運團隊掌握商品、訂單與活動設定的核心後台。",
    challenge:
      "需確保前台功能與後台資料邏輯一致，過程中與後端團隊大量溝通與對齊資料結構。",
    solution:
      "同時理解前台與後台需求，調整介面與操作流程，讓營運能更順暢地管理電商內容。",
    metric1: { value: "60%", label: "營運管理效率提升" },
    metric2: { value: "40%", label: "設定錯誤率下降" },
    dark: true,
    mockupBg: "bg-neutral-900",
    mockupImg: PAYEASYADMIN, // PAYEASY 後台管理畫面
  },
  {
    id: 3,
    title: "RIV 精緻洗衣｜官方網站與 LIFF",
    subtitle: "同時負責電腦版網站與手機 LINE LIFF 體驗。",
    challenge: "需要配合 LINE 平台規格設計 LIFF 頁面，並與業主討論圖文選單與導流動線。",
    solution: "規劃清楚的導覽與操作流程，讓使用者能快速完成預約、查詢與聯絡。",
    metric1: { value: "60%", label: "LINE 互動率提升" },
    metric2: { value: "40%", label: "線上服務使用率成長" },
    dark: false,
    mockupBg: "bg-[#d8cec4]",
    mockupImg: RIV, // RIV 官網／LIFF 畫面
  },
  {
    id: 4,
    title: "RIV 精緻洗衣｜後台管理系統",
    subtitle: "用於管理門市、工廠與配送資訊的營運中樞。",
    challenge: "原有流程分散在多個系統，資訊不易統一管理，影響營運效率。",
    solution: "重新規劃後台資訊架構與操作流程，讓門市、工廠與物流能在同一套系統裡協作。",
    metric1: { value: "60%", label: "營運流程統整度" },
    metric2: { value: "40%", label: "跨部門溝通成本降低" },
    dark: false,
    mockupBg: "bg-[#88a8b8]",
    mockupImg: RIVADMIN, // RIV 後台管理畫面
  },
  {
    id: 5,
    title: "RIV 精緻洗衣｜POS 收銀系統",
    subtitle: "門市端用來處理金流、訂單與衣物流向的 POS 介面。",
    challenge: "第一次實作金流串接，過程中遇到許多技術與情境上的問題，需要一一排除。",
    solution: "與金流與後端團隊反覆測試流程，優化操作細節，讓門市能穩定完成收銀與建單。",
    metric1: { value: "60%", label: "收銀流程穩定度" },
    metric2: { value: "40%", label: "交易異常案例減少" },
    dark: false,
    mockupBg: "bg-neutral-900",
    mockupImg: RIVPOS, // RIV POS 畫面
  },
];

const stackRef = ref(null);
const viewportHeight = ref(0);
const containerTop = ref(0);
const scrollY = ref(0);

// 限制數值範圍
const clamp = (value, min, max) => {
  return Math.min(max, Math.max(min, value));
};

// 更新 viewport 高度 & 堆疊容器在整個頁面的 offset
const updateMetrics = () => {
  viewportHeight.value = window.innerHeight || 0;
  if (stackRef.value) {
    const rect = stackRef.value.getBoundingClientRect();
    containerTop.value = rect.top + window.scrollY;
    // 這裡直接用實際內容高度，避免多出灰色空白
    stackHeight.value = stackRef.value.scrollHeight;
  }
};

const stackHeight = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY || window.pageYOffset || 0;
};

const handleResize = () => {
  updateMetrics();
};

onMounted(async () => {
  await nextTick();
  updateMetrics();
  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

// 控制每張卡片的縮放與疊放順序
const cardStyle = (index) => {
  if (!viewportHeight.value) {
    return {
      zIndex: 50 + index,
      transformOrigin: "top center",
    };
  }

  const offset = scrollY.value - containerTop.value;

  // 調整每張卡片動畫區間（0.6 * viewport，高度比較短）
  const regionFactor = 0.8;
  const region = viewportHeight.value * regionFactor;

  // 每張卡片各自的動畫開始點
  const start = index * region;

  const rawProgress = (offset - start) / region;
  const progress = clamp(rawProgress, 0, 1);

  const minScale = 0.8;
  const scale = 1 - (1 - minScale) * progress;

  return {
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    // 這裡改成 index 越大 zIndex 越高：第三張 > 第二張 > 第一張
    zIndex: 50 + index,
  };
};
</script>
