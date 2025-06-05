<template>
  <div
    class="animate-shimmer"
    :class="`skeleton-${variant}`"
    :style="{ width, height, borderRadius }"
  />
</template>

<script setup lang="ts">
defineProps<{
  variant?: "text" | "circle" | "rect";
  width?: string;
  height?: string;
  borderRadius?: string;
}>();
</script>

<style scoped>
.skeleton-text {
  height: 1em;
  border-radius: 4px;
}

.skeleton-circle {
  border-radius: 50%;
}

.skeleton-rect {
  border-radius: 4px;
}
</style>
