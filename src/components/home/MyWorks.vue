<template>
  <div class="space-y-12">
    <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start mt-12">
      <div class="flex-1 space-y-6">
        <div
          class="space-y-6 min-w-[460px] animate__animated animate__fadeInUp"
          :style="{
            '--animate-duration': '0.5s',
            '--animate-delay': '0s',
          }"
        >
          <div class="text-sm font-medium text-slate-500">Projects</div>
          <h1
            class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            專案作品展示
          </h1>
          <p class="max-w-xl text-sm text-slate-500 sm:text-base">
            精心規劃的介面與流程，提升使用者互動體驗。
          </p>
        </div>
      </div>
    </div>

    <!-- 卡片清單 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <article
        v-for="project in projects"
        :key="project.id"
        class="group rounded-4xl bg-white shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
      >
        <div class="relative">
          <img
            :src="project.image"
            :alt="project.title"
            class="h-64 md:h-80 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div class="px-6 pt-5 pb-6 flex items-start gap-4">
          <div class="flex-1 space-y-2">
            <h3 class="text-lg md:text-xl font-semibold text-slate-900">
              {{ project.title }}
            </h3>
            <p class="text-xs md:text-sm text-slate-500">
              {{ project.subtitle }}
            </p>
          </div>

          <button
            type="button"
            class="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
            @click="viewProject(project)"
          >
            <ArrowUpRightIcon class="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import POD from "@/assets/img/POD.png";
import Craft from "@/assets/img/Craft.png";
import Dash from "@/assets/img/Dash.png";
import Work from "@/assets/img/work.png";

const projects = [
  {
    id: 1,
    title: "Podcast Materians",
    subtitle: "為 Podcast 節目打造簡潔直覺的介紹與收聽入口，專注於閱讀體驗與版面節奏。",
    image: POD,
    link: "https://chang-hsi.github.io/podcast-materians/",
  },
  {
    id: 2,
    title: "MyFeCraft 網頁設計",
    subtitle: "為「選傳」課程打造的 MyFeCraft 主題網站，結合課程內容與個人作品展示。",
    image: Craft,
    link: "https://chang-hsi.github.io/myfecraft/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Dasher 分析儀表板與後台管理系統",
    subtitle: "將複雜數據轉化為清晰易讀的圖表，協助使用者快速掌握關鍵指標。",
    image: Dash,
    link: "https://chang-hsi.github.io/dashboard-admin/tasks",
  },
  {
    id: 4,
    title: "TailAdmin 後台管理系統",
    subtitle:
      "這是一個以 Vue 3 打造的後台管理系統作品，目標是建立「可複用、可擴充」的後台 UI 與權限流程。",
    image: Work,
    link: "https://chang-hsi.github.io/tailadmin-vue/",
  },
];

const viewProject = (project) => {
  if (!project.link) return; // 沒設定 link 就不動作
  window.open(project.link, "_blank", "noopener,noreferrer");
};
</script>
