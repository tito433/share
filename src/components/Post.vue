<script setup lang="ts">
import BtnShare from "@/components/BtnShare.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import User from "@/components/UserTimestamp.vue";
import ReactBtn from "@/components/reaction/ReactBtn.vue";
import ReactionTop from "@/components/reaction/top.vue";
import Skeleton from "@/components/skeleton/index.vue";
import SkeletonItem from "@/components/skeleton/item.vue";

import { useAuth } from "@/composables/useAuth";
import { db } from "@/firebase";
import type { Shout } from "@/utils";
import { ReactionEnum } from "@/utils";
import { collection, getDocs } from "firebase/firestore";
import { computed, nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  item: Shout;
}>();

const { getUserName, userId } = useAuth();
const router = useRouter();

const postId = props.item.id;
const reactions = ref([]);
const loadingReaction = ref(false);
const postReaction = computed(() => {
  if (userId.value && reactions.value.length > 0) {
    const exist = reactions.value.find((r) => r.id === userId.value);
    if (exist) {
      return exist.type;
    }
  }
  return null;
});
const totalReactions = computed(() => {
  return (
    reactions.value.reduce((acc, r) => {
      return acc + 1;
    }, 0) || 0
  );
});

const topReactions = computed(() => {
  const countMap: Record<ReactionEnum, number> = {
    like: 0,
    haha: 0,
    love: 0,
    wow: 0,
    sad: 0,
    poop: 0,
    angry: 0,
  };

  for (const { type } of reactions.value) {
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

const fetchReactions = async () => {
  loadingReaction.value = true;
  try {
    const reactionsSnap = await getDocs(
      collection(db, "shouts", postId, "reactions")
    );
    reactions.value = reactionsSnap.docs.map((r) => ({
      id: r.id,
      ...r.data(),
    }));
  } catch (error) {
    console.error("Error fetching reactions:", error);
  }
  loadingReaction.value = false;
};

function goToStory() {
  router.push("/story/" + postId);
}

onMounted(() => {
  fetchReactions();
  nextTick(checkTruncation);
  window.addEventListener("resize", checkTruncation);
});
</script>
<template>
  <div class="post">
    <div class="head">
      <User
        :user="getUserName(item.userId)"
        :timestamp="new Date(item.timestamp.seconds * 1000)"
      />
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
      <Skeleton :loading="loadingReaction">
        <template #template>
          <SkeletonItem variant="text" width="2rem" height="1.5rem" />
        </template>
        <ReactionTop
          class="flex flex-center"
          :total-reactions="totalReactions"
          :top-reactions="topReactions"
        />
      </Skeleton>
    </div>
    <div class="border-top"></div>
    <div class="footer flex justify-between">
      <ReactBtn :post-id="postId" :value="postReaction" />
      <button class="flex" @click="goToStory">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path
                d="M1.98608 11.1034C1.98608 13.3236 2.78607 15.376 4.13153 16.9992C5.93153 19.238 8.78608 20.6746 11.9861 20.6746C11.9861 20.6746 15.5028 21.9659 17.8427 22.4553C18.6528 22.6248 19.5517 22.0692 19.5517 21.3173C19.5517 20.4026 17.9861 18.753 17.9861 18.753C19.1009 17.959 20.033 16.9462 20.7162 15.7808C21.526 14.3994 21.9861 12.8036 21.9861 11.1034C21.9861 9.39876 21.5255 7.7997 20.7162 6.41587C19.9666 5.13402 18.9178 4.03683 17.6588 3.21143C16.0406 2.12931 14.0952 1.51367 11.9861 1.51367C6.45881 1.51367 1.98608 5.80475 1.98608 11.1034Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
        Comment
      </button>
      <BtnShare :post-id="postId" />
    </div>
    <slot name="append"></slot>
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
  }

  .footer {
    padding-top: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      gap: 0.5rem;
      stroke: var(--app-primary-color);
      fill: var(--app-primary-color);
      color: var(--app-primary-color);
    }
  }
}
</style>
