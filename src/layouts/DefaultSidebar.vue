<!-- src/components/DefaultSidebar.vue -->
<template>
  <div class="sticky top-8 rounded-3xl bg-slate-100 p-3">
    <div class="space-y-4">
      <div class="overflow-hidden rounded-3xl bg-white">
        <div
          class="h-20 bg-cover bg-center"
          :style="{ backgroundImage: `url(${cardBg})` }"
        ></div>

        <div class="relative -mt-10 flex flex-col items-center px-4 pb-6">
          <div class="avatar">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-800 ring ring-white ring-offset-2 ring-offset-slate-100"
            >
              <img src="../assets/img/me.jpg" alt="我" />
            </div>
          </div>

          <div class="mt-3 text-base font-semibold text-slate-900">提長晰</div>
          <div class="mt-1 text-xs text-slate-500">前端工程師</div>

          <div
            class="mt-4 flex w-full items-center justify-between gap-3 rounded-2xl bg-slate-900/90 px-4 py-3"
          >
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-800/80 text-white transition hover:bg-slate-700"
            >
              <GlobeAltIcon class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-800/80 text-white transition hover:bg-slate-700"
            >
              <XMarkIcon class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-800/80 text-white transition hover:bg-slate-700"
            >
              <LinkIcon class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-800/80 text-white transition hover:bg-slate-700"
            >
              <Cog6ToothIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-3xl bg-white p-3">
        <div class="space-y-1">
          <button
            v-for="item in navItems"
            :key="item.label"
            type="button"
            @click="scrollToSection(item.sectionId)"
            :class="[
              'flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition',
              activeSectionId === item.sectionId
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-600 hover:bg-slate-50',
            ]"
          >
            <component
              :is="item.icon"
              class="h-4 w-4"
              :class="
                activeSectionId === item.sectionId ? 'text-slate-700' : 'text-slate-500'
              "
            />
            <span>{{ item.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import CardBg from "@/assets/card_bg.jpg";
import {
  GlobeAltIcon,
  XMarkIcon,
  LinkIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
  HeartIcon,
  BriefcaseIcon,
  BeakerIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/vue/24/outline";

const cardBg = CardBg;

const navItems = [
  { label: "Home", sectionId: "section-home", icon: HomeIcon },
  { label: "About me", sectionId: "section-about", icon: UserIcon },
  { label: "My Service", sectionId: "section-service", icon: HeartIcon },
  { label: "Case Studies", sectionId: "section-case", icon: BeakerIcon },
  { label: "Projects", sectionId: "section-works", icon: BriefcaseIcon },
  { label: "My Skill", sectionId: "section-skill", icon: SparklesIcon },
  { label: "Connect me", sectionId: "section-contact", icon: ChatBubbleLeftRightIcon },
];

const activeSectionId = ref(navItems[0].sectionId);
const sectionPositions = ref([]);

// 這個 offset 決定「哪一條水平線」用來判斷目前在哪個區塊
// 可以依照你的版頭高度自己調，例如 80、100
const HIGHLIGHT_OFFSET = 120;

const updateSectionPositions = () => {
  sectionPositions.value = navItems
    .map((item) => {
      const el = document.getElementById(item.sectionId);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      return { id: item.sectionId, top };
    })
    .filter(Boolean);
};

const handleScroll = () => {
  if (!sectionPositions.value.length) return;

  const current = window.scrollY + HIGHLIGHT_OFFSET;

  let currentId = sectionPositions.value[0].id;

  for (const pos of sectionPositions.value) {
    if (current >= pos.top) {
      currentId = pos.id;
    } else {
      break;
    }
  }

  activeSectionId.value = currentId;
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY - HIGHLIGHT_OFFSET;

  activeSectionId.value = id;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
};

onMounted(() => {
  nextTick(() => {
    updateSectionPositions();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSectionPositions);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateSectionPositions);
});
</script>
