<!-- components/Notifications.vue -->
<template>
  <teleport to="body">
    <div class="fixed bottom-4 left-4 space-y-2 z-max flex flex-col-reverse">
      <transition-group name="fade" tag="div" class="flex flex-col gap-1">
        <div
          v-for="note in notifications"
          :key="note.id"
          :class="[
            'min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left',
            colorMap[note.type],
          ]"
        >
          {{ note.message }}
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { notifications } from "@/composables";

const colorMap = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500 text-black",
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
