<script setup lang="ts">
import SpinnerSvg from "@/assets/spinner.svg";
defineProps<{
  disabled?: boolean;
  loading?: boolean;
}>();
</script>
<template>
  <button>
    <SpinnerSvg v-if="loading" width="24" height="24" />
    <slot v-else></slot>
  </button>
</template>
<style scoped lang="scss"></style>
