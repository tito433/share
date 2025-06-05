<script setup lang="ts">
import UserSvg from "@/assets/User.svg";
import { format } from "timeago.js";
defineProps<{ user: string; timestamp: Date }>();
</script>
<template>
  <div class="user flex">
    <UserSvg width="40" height="40" />
    <div class="author flex">
      <span>{{ user }}</span>
      <i> {{ format(timestamp) }}</i>
    </div>
  </div>
</template>
<style scoped lang="scss">
.user {
  gap: 1rem;
  align-items: center;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--app-text-color);
  }
  .author {
    flex-direction: column;
    span {
      line-height: 1;
    }
    i {
      font-size: 0.75rem;
    }
  }
}
</style>
