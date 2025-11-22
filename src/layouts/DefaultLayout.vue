<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="min-h-screen bg-slate-50">
    <div class="mx-auto px-4 py-8">
      <div class="flex flex-col gap-4 md:flex-row">
        <aside class="md:w-64 shrink-0">
          <DefaultSidebar />
        </aside>

        <!-- 主內容 -->
        <main
          id="main"
          accesskey="C"
          class="flex-1 min-h-[50vh] rounded-3xl bg-white shadow-sm px-6 py-8 md:px-10 md:py-10"
        >
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import DefaultSidebar from "./DefaultSidebar.vue";
</script>
