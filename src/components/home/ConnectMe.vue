<template>
  <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start mt-12">
    <div class="flex-1 space-y-6">
      <div
        class="space-y-6 min-w-[460px] animate__animated animate__fadeInUp"
        :style="{
          '--animate-duration': '0.5s',
          '--animate-delay': '0s',
        }"
      >
        <div class="text-sm font-medium text-slate-500">Let’s Work Together</div>
      </div>
    </div>
  </div>
  <section class="py-10">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 左：資訊 -->
        <div class="rounded-2xl bg-white p-6 shadow-sm">
          <div class="text-xl font-extrabold text-slate-900">聯絡資訊</div>

          <div class="mt-6 space-y-5">
            <div class="flex items-start gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600"
              >
                <MapPinIcon class="w-5 h-5" />
              </div>
              <div>
                <div class="font-semibold text-slate-900">地址</div>
                <div class="text-slate-600">桃園市中壢區中山路138號6樓</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600"
              >
                <PhoneIcon class="w-5 h-5" />
              </div>
              <div>
                <div class="font-semibold text-slate-900">電話</div>
                <div class="text-slate-600">(03) 426-0010</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600"
              >
                <EnvelopeIcon class="w-5 h-5" />
              </div>
              <div>
                <div class="font-semibold text-slate-900">Email</div>
                <div class="text-slate-600">contact@example.com</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600"
              >
                <ClockIcon class="w-5 h-5" />
              </div>
              <div>
                <div class="font-semibold text-slate-900">服務時間</div>
                <div class="text-slate-600">週一至週五 8:00–17:30</div>
              </div>
            </div>
          </div>

          <div class="mt-8 rounded-2xl bg-slate-50 p-4">
            <div class="text-slate-900 font-bold">位置地圖</div>

            <div class="mt-3 rounded-xl overflow-hidden">
              <iframe
                class="w-full h-56 md:h-80"
                :src="mapEmbedUrl"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :title="`Google 地圖 - ${props.address}`"
              ></iframe>
            </div>

            <div class="mt-2 text-sm">
              <a
                :href="mapOpenUrl"
                target="_blank"
                rel="noopener"
                class="text-sky-700 hover:underline"
              >
                在 Google 地圖開啟
              </a>
            </div>
          </div>
        </div>

        <!-- 右：表單（DaisyUI） -->
        <div class="rounded-2xl bg-white p-6 shadow-sm">
          <div class="text-xl font-extrabold text-slate-900">發送訊息</div>

          <div v-if="showToast" class="mt-4 mb-2">
            <div class="alert alert-success shadow-sm">
              <span>{{ toastMessage }}</span>
            </div>
          </div>

          <form class="mt-6 grid grid-cols-1 gap-4" @submit.prevent="submit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2"
                  >主旨</label
                >
                <select
                  v-model="form.subject"
                  class="select select-bordered w-full h-11 min-h-0 text-[15px]"
                >
                  <option disabled value="">請選擇主旨</option>
                  <option v-for="item in subjects" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
                <small v-if="errors.subject" class="text-red-600 text-xs">
                  {{ errors.subject }}
                </small>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2"
                  >姓名</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  class="input input-bordered w-full h-11 text-[15px]"
                  placeholder="請輸入您的姓名"
                />
                <small v-if="errors.name" class="text-red-600 text-xs">
                  {{ errors.name }}
                </small>
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2"
                  >公司/單位</label
                >
                <input
                  v-model="form.org"
                  type="text"
                  class="input input-bordered w-full h-11 text-[15px]"
                  placeholder="請輸入公司或單位"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2"
                  >電話</label
                >
                <input
                  v-model="form.phone"
                  type="text"
                  class="input input-bordered w-full h-11 text-[15px]"
                  placeholder="請輸入您的電話"
                />
                <small v-if="errors.phone" class="text-red-600 text-xs">
                  {{ errors.phone }}
                </small>
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  class="input input-bordered w-full h-11 text-[15px]"
                  placeholder="請輸入您的 Email"
                />
                <small v-if="errors.email" class="text-red-600 text-xs">
                  {{ errors.email }}
                </small>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2">地址</label>
              <input
                v-model="form.address"
                type="text"
                class="input input-bordered w-full h-11 text-[15px]"
                placeholder="請輸入地址"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2"
                >訊息內容</label
              >
              <textarea
                v-model="form.message"
                class="textarea textarea-bordered w-full text-[15px] min-h-[180px]"
                :maxlength="2000"
                placeholder="請詳細描述您的需求或問題…"
              ></textarea>
              <small v-if="errors.message" class="text-red-600 text-xs">
                {{ errors.message }}
              </small>
            </div>

            <div class="text-xs text-slate-500 -mt-2 mb-2">
              最少 10 個字元，目前 {{ messageCount }} 字元
            </div>

            <div>
              <button
                type="submit"
                class="btn btn-primary rounded-xl px-5 gap-2"
                :disabled="submitting || messageCount < 10"
                :class="{
                  'btn-disabled': submitting || messageCount < 10,
                  loading: submitting,
                }"
              >
                <PaperAirplaneIcon class="w-4 h-4" />
                <span>送出訊息</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";

const subjects = ["一般洽詢", "課程/活動", "技術支援", "合作提案", "其他"];

const submitting = ref(false);
const showToast = ref(false);
const toastMessage = ref("");

const form = ref({
  subject: "",
  name: "",
  org: "",
  phone: "",
  email: "",
  address: "",
  message: "",
});

const errors = ref({
  subject: "",
  name: "",
  phone: "",
  email: "",
  message: "",
});

const messageCount = computed(() => (form.value.message || "").trim().length);

function validate() {
  const e = { subject: "", name: "", phone: "", email: "", message: "" };

  if (!form.value.subject) e.subject = "請選擇主旨";
  if (!form.value.name?.trim()) e.name = "請輸入姓名";
  if (!form.value.phone?.trim()) e.phone = "請輸入電話";

  if (!form.value.email?.trim()) e.email = "請輸入 Email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email))
    e.email = "Email 格式不正確";

  if (!form.value.message?.trim()) e.message = "請輸入訊息內容";
  else if (form.value.message.trim().length < 10) e.message = "至少 10 個字";

  errors.value = e;
  return Object.values(e).every((msg) => !msg);
}

const props = defineProps({
  address: { type: String, default: "桃園市中壢區中山路138號6樓" },
});

const mapEmbedUrl = computed(
  () =>
    `https://www.google.com/maps?hl=zh-TW&q=${encodeURIComponent(
      props.address
    )}&t=&z=17&ie=UTF8&iwloc=B&output=embed`
);

const mapOpenUrl = computed(
  () => `https://maps.google.com/?q=${encodeURIComponent(props.address)}`
);

async function submit() {
  if (!validate()) return;

  try {
    submitting.value = true;
    await new Promise((r) => setTimeout(r, 700)); // 之後換成真正 API

    toastMessage.value = "訊息已送出，我們會盡快回覆您。";
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 2500);

    form.value = {
      subject: "",
      name: "",
      org: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    };
    errors.value = { subject: "", name: "", phone: "", email: "", message: "" };
  } finally {
    submitting.value = false;
  }
}
</script>
