<script setup lang="ts">
import AngrySvg from "@/assets/Angry.svg";
import HeartSvg from "@/assets/Heart.svg";
import LikeSvg from "@/assets/Like.svg";
import SadSvg from "@/assets/Sad.svg";
import SmileSvg from "@/assets/Smile.svg";
import UserSvg from "@/assets/User.svg";
import WowSvg from "@/assets/Wow.svg";
import PhotoGallery from "@/components/PhotoGallery.vue";
import ReactBtn from "@/components/ReactBtn.vue";
import { useAuth } from "@/composables/useAuth";
import type { Shout } from "@/utils";
import { ReactionEnum } from "@/utils";
import { format } from "timeago.js";
import { computed, nextTick, onMounted, ref } from "vue";

const props = defineProps<{
  item: Shout;
}>();

const { getUserName, userId } = useAuth();

const postId = props.item.id;
const postReaction = computed(() => {
  if (userId.value && props.item.reactions) {
    const exist = props.item.reactions.find((r) => r.id === userId.value);
    if (exist) {
      return exist.type;
    }
  }
  return null;
});
const totalReactions = computed(() => {
  return props.item.reactions?.reduce((acc, r) => {
    return acc + 1;
  }, 0);
});

const topReactions = computed(() => {
  const reactions = props.item.reactions;
  const countMap: Record<ReactionEnum, number> = {
    like: 0,
    haha: 0,
    love: 0,
    wow: 0,
    sad: 0,
    poop: 0,
    angry: 0,
  };

  for (const { type } of reactions) {
    countMap[type]++;
  }

  const maxCount = Math.max(...Object.values(countMap));

  return Object.entries(countMap)
    .filter(([, count]) => count === maxCount)
    .map(([type]) => type as ReactionEnum);
});

const textRef = ref(null);
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
    <div class="body flex flex-col gap-1">
      <div>
        <div
          ref="textRef"
          :class="['text-container', { expanded: isExpanded }]"
        >
          {{ item.text }}
        </div>
        <button
          v-if="isTruncatable && !isExpanded"
          @click="toggle"
          class="readmore"
        >
          আরও পড়ুন
        </button>
      </div>

      <PhotoGallery
        v-if="item.files && item.files.length > 0"
        :files="item.files"
      />
    </div>
    <div class="flex flex-center gap-1 summary">
      <span v-if="totalReactions > 0" class="flex flex-center reactions-count">
        <span>
          <template v-for="(reaction, index) in topReactions" :key="index">
            <LikeSvg v-if="reaction === ReactionEnum.Like" fill="#1E90FF" />
            <SmileSvg v-else-if="reaction === ReactionEnum.Haha" />
            <HeartSvg v-else-if="reaction === ReactionEnum.Love" />
            <WowSvg v-else-if="reaction === ReactionEnum.Wow" />
            <SadSvg v-else-if="reaction === ReactionEnum.Sad" />
            <AngrySvg v-else-if="reaction === ReactionEnum.Angry" />
          </template>
        </span>
        {{ totalReactions }}
      </span>
    </div>
    <div class="border-top"></div>
    <div class="footer flex">
      <ReactBtn :post-id="postId" :value="postReaction" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.post {
  background: var(--app-post-bg-color);
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
    .text-container {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: all 0.3s ease;
      white-space: pre-line;
    }

    .text-container.expanded {
      -webkit-line-clamp: unset;
      overflow: visible;
    }
    .readmore {
      color: var(--app-primary-color);
      background: transparent;
      border: none;
      cursor: pointer;
      margin-top: 0.5rem;
      padding-left: 0;
    }
  }
  .summary {
    padding-bottom: 0.25rem;
    .reactions-count {
      font-size: 1rem;
      gap: 0.5rem;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .footer {
    padding-top: 0.5rem;
  }
}
</style>
