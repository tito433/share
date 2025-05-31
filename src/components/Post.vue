<script setup lang="ts">
import { format } from "timeago.js";
import UserSvg from "@/assets/user.svg";
import { useAuth } from "@/composables/useAuth";
import ReactBtn from "@/components/ReactBtn.vue";
import type { Shout } from "@/utils";
import { computed } from "vue";

const props = defineProps<{
  item: Shout;
}>();

const { getUserName, userId } = useAuth();

const postId = props.item.id;
const postReaction = computed(() => {
  if (userId.value) {
    const exist = props.item.reactions.find((r) => r.id === userId.value);
    if (exist) {
      return exist.type;
    }
  }
  return null;
});
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
    <div class="body">{{ item.text }}</div>
    <div class="border-top"></div>
    <div class="footer flex">
      <ReactBtn :post-id="postId" :value="postReaction" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.post {
  background: rgb(255 255 255 / 10%);
  gap: 1rem;
  border-radius: var(--app-border-radius);
  padding: 1rem;

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
  .body {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .footer {
    padding-top: 0.5rem;
  }
}
</style>
