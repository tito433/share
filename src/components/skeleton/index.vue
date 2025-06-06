<template>
  <div class="skeleton">
    <template v-if="loading">
      <slot name="template">
        <SkeletonItem v-for="i in 3" :key="i" />
      </slot>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
import SkeletonItem from "@/components/skeleton/item.vue";
defineProps<{
  loading: boolean;
}>();
</script>
