<script setup lang="ts">
import SpinnerSvg from "@/assets/Spinner.svg";
defineProps<{
  disabled?: boolean;
  loading?: boolean;
}>();
</script>
<template>
  <button :disabled="disabled">
    <SpinnerSvg v-if="loading" width="24" height="24" />
    <slot v-else></slot>
  </button>
</template>
