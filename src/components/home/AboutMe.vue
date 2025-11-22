<!-- src/views/AboutMe.vue -->
<template>
  <div
    class="rounded-4xl bg-[#292929] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14"
  >
    <div class="mb-6 text-xs font-semibold tracking-[0.25em] text-slate-300">
      ABOUT ME
    </div>

    <div class="flex flex-col gap-10 lg:flex-row lg:items-start">
      <!-- 左側逐字變白 -->
      <div class="flex-1 space-y-6">
        <div
          ref="textBlockRef"
          class="space-y-3 text-[18px] leading-relaxed text-slate-300 sm:text-[20px] lg:text-[22px]"
        >
          <p v-for="(line, lineIndex) in charLines" :key="lineIndex">
            <template v-for="char in line" :key="char.index">
              <span
                v-if="char.ch !== ' '"
                class="inline-block transition-colors duration-150"
                :class="
                  scrollProgress >= char.index / maxIndex ? 'text-white' : 'text-white/20'
                "
              >
                {{ char.ch }}
              </span>
              <span v-else>&nbsp;</span>
            </template>
          </p>
        </div>
      </div>

      <!-- 右側影片卡 -->
      <div class="w-full max-w-sm lg:max-w-xs">
        <button
          type="button"
          class="group relative block overflow-hidden rounded-3xl bg-slate-800 shadow-lg"
          @click="openVideo"
        >
          <img
            :src="videoThumb"
            alt="Intro video"
            class="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"
          ></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md transition-transform duration-300 group-hover:scale-105"
            >
              <PlayIcon class="h-7 w-7" />
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- 下方三個統計區塊（已加入數字從 0 跑到目標值的效果） -->
    <div class="mt-10 grid gap-8 md:grid-cols-3">
      <div v-for="(item, index) in stats" :key="item.label" class="space-y-3">
        <div
          class="inline-flex rounded-b-md bg-slate-700/80 px-4 py-2 text-xs font-medium text-slate-100"
        >
          {{ item.label }}
        </div>
        <div class="flex items-baseline gap-3">
          <div class="text-3xl font-semibold text-white sm:text-4xl">
            {{ animatedStats[index] }}<span v-if="item.suffix">{{ item.suffix }}</span>
          </div>
          <div class="text-xs leading-snug text-slate-300 sm:text-sm">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { PlayIcon } from "@heroicons/vue/24/solid";

const lines = [
  "我是 Douli Ti，一名專注使用者體驗的前端工程師。",
  "在我眼中，前端開發不是只把頁面做漂亮，",
  "而是讓每一次操作都覺得順手、舒服、自然。",
];

// 把所有字變成帶有全域 index 的陣列（跨三行連續）
const charLines = computed(() => {
  let counter = 0;
  return lines.map((line) => {
    return Array.from(line).map((ch) => {
      const currentIndex = counter;
      counter += 1;
      return {
        ch,
        index: currentIndex,
      };
    });
  });
});

// 最大 index（用來算 char 的比例位置）
const maxIndex = computed(() => {
  const lastLine = charLines.value[charLines.value.length - 1] || [];
  if (!lastLine.length) return 1;
  return lastLine[lastLine.length - 1].index || 1;
});

const textBlockRef = ref(null);
const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const el = textBlockRef.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;

  // 以區塊中心點為基準：
  // - 中心在視窗底部附近 => progress 接近 0
  // - 中心到視窗中間時 => progress 接近 1
  const blockCenter = rect.top + rect.height / 2;
  const middle = vh / 2;

  let p = (vh - blockCenter) / middle;

  if (p < 0) p = 0;
  if (p > 1) p = 1;

  scrollProgress.value = p;
};

onMounted(() => {
  updateScrollProgress();
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollProgress);
  window.removeEventListener("resize", updateScrollProgress);
});

// 影片設定
const videoUrl =
  "https://www.youtube.com/watch?v=Wm-Ya-qHdUc&list=RDWm-Ya-qHdUc&start_radio=1";
const videoThumb = "https://img.youtube.com/vi/Wm-Ya-qHdUc/hqdefault.jpg";

const openVideo = () => {
  window.open(videoUrl, "_blank", "noopener,noreferrer");
};

// 下方統計資料（value 用純數字，suffix 顯示 %、+）
const stats = [
  {
    label: "客戶滿意度",
    value: 98,
    suffix: "%",
    description: "為客戶帶來可量化的實際成效。",
  },
  {
    label: "協助轉型的企業",
    value: 99,
    suffix: "+",
    description: "協助企業成長並提升整體表現。",
  },
  {
    label: "專業實戰經驗",
    value: 14,
    suffix: "+",
    description: "深受客戶信任與推薦的合作夥伴。",
  },
];

// 用來顯示動畫中的數字
const animatedStats = ref(stats.map(() => 0));

// 控制是否已經啟動過數字動畫
const hasStartedCount = ref(false);

// 數字由 0 跑到目標值
const startCountUp = () => {
  const duration = 800; // 動畫時間（毫秒）

  stats.forEach((item, index) => {
    const start = 0;
    const end = item.value;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      animatedStats.value[index] = Math.floor(start + (end - start) * progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  });
};

// 等文字全變白之後再啟動數字效果
watch(scrollProgress, (val) => {
  // 這裡用 0.99 當門檻，代表幾乎到頂（全部字都會是白色）
  if (!hasStartedCount.value && val >= 0.99) {
    hasStartedCount.value = true;
    startCountUp();
  }
});
</script>
