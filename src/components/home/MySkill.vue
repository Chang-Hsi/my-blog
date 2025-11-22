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
          <div class="text-sm font-medium text-slate-500">Creative Edge</div>
          <h1
            class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Creative Talent Showcase
          </h1>
          <p class="max-w-xl text-sm text-slate-500 sm:text-base">
            Combining innovation, strategy, and design to craft powerful brand experiences
            that drive real results.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 lg:flex-row lg:items-start">
      <div class="w-full lg:w-[420px] xl:w-[460px] shrink-0">
        <div class="rounded-4xl overflow-hidden shadow-xl">
          <img
            src="https://i.pinimg.com/736x/82/35/0e/82350e3ee30ac5cb38c282f26dce9680.jpg"
            alt="Creative workspace"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="flex-1">
        <div class="relative space-y-10">
          <div v-for="(item, index) in skillSections" :key="item.id" class="relative">
            <div
              v-if="index !== skillSections.length - 1"
              class="absolute -left-px top-6 -bottom-10 w-px bg-slate-200"
            ></div>

            <div class="space-y-3 ml-4">
              <h3 class="text-xl md:text-2xl font-semibold text-slate-900">
                {{ item.title }}
              </h3>
              <p class="text-base md:text-lg text-slate-500 leading-relaxed">
                {{ item.description }}
              </p>

              <div class="flex flex-wrap gap-2 pt-1">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm md:text-base text-slate-700"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillSections = [
  {
    id: 1,
    title: "UI / UX Design",
    description:
      "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
    tags: ["Wireframing", "Prototyping", "Usability", "Interaction"],
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Designing visuals that communicate clearly and align with brand strategy, from logos to layouts which help to grow.",
    tags: ["Typography", "Branding", "Illustration", "Layout"],
  },
  {
    id: 3,
    title: "Sketch Skills",
    description:
      "Focused on exploring ideas quickly through sketches, supporting concept development and visual storytelling.",
    tags: ["Symbols", "Artboards", "Prototyping", "Components"],
  },
  {
    id: 4,
    title: "Front-End Dev",
    description:
      "Focused on building accessible, performant interfaces that bridge design and development.",
    tags: ["Webflow", "HTML", "CSS", "JavaScript"],
  },
];
</script>
