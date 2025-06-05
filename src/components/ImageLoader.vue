<template>
  <div class="relative w-full h-full overflow-hidden">
    <div
      v-if="!loaded"
      class="absolute w-full h-full animate-shimmer rounded"
    />
    <img
      :src="src"
      :alt="alt"
      @load="handleLoad"
      :class="[
        'transition-opacity duration-700 ease-in-out w-full h-full object-cover',
        loaded ? 'opacity-100' : 'opacity-0',
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const loaded = ref(false);

function handleLoad() {
  loaded.value = true;
}
watch(
  () => props.src,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      loaded.value = false;
    }
  }
);
</script>
