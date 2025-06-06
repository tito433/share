<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
defineProps<{
  text: string;
  maxLength?: number;
}>();

const textRef = ref<HTMLTextAreaElement | null>(null);
const isTruncatable = ref(false);
const isExpanded = ref(false);

const checkTruncation = () => {
  const el = textRef.value;
  if (el) {
    isTruncatable.value = el.scrollHeight > el.clientHeight;
  }
};
const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
onMounted(() => {
  nextTick(checkTruncation);
  window.addEventListener("resize", checkTruncation);
});
</script>
<template>
  <div
    ref="textRef"
    class="overflow-hidden transition-all duration-300 whitespace-pre-line"
    :class="[isExpanded ? 'overflow-visible' : 'line-clamp-6 overflow-hidden']"
  >
    {{ text }}
  </div>
  <button
    v-if="isTruncatable && !isExpanded"
    @click="toggle"
    class="app-primary mt-2"
  >
    আরও পড়ুন
  </button>
</template>
