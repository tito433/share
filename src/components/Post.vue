<script setup lang="ts">
import { format } from "timeago.js";
import UserSvg from "@/assets/user.svg";
import { useAuth } from "@/composables/useAuth";

type Post = {
  id: string;
  text: string;
  timestamp: { seconds: number };
  userId: string;
};

const props = defineProps<{
  item: Post;
}>();

const { getUserName } = useAuth();
</script>
<template>
  <div class="post">
    <div class="head flex">
      <UserSvg width="48" height="48" />
      <div class="author flex">
        <span>{{ getUserName(item.userId) }}</span>
        <i>
          {{ format(new Date(item.timestamp.seconds * 1000)) }}
        </i>
      </div>
    </div>
    <div v-html="item.text" class="body"></div>
  </div>
</template>
<style scoped lang="scss">
.post {
  background: rgb(255 255 255 / 10%);
  padding: 1rem;
  gap: 1rem;
  border-radius: var(--app-border-radius);
  .head {
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
}
</style>
