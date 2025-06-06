<script setup lang="ts">
import UserSvg from "@/assets/User.svg";
import BtnShare from "@/components/BtnShare.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";

import TextTrim from "@/components/TextTrim.vue";
import ReactBtn from "@/components/reaction/ReactBtn.vue";
import ReactionTop from "@/components/reaction/top.vue";
import Skeleton from "@/components/skeleton/index.vue";
import SkeletonItem from "@/components/skeleton/item.vue";

import { useAuth } from "@/composables/useAuth";
import { db } from "@/firebase";
import type { Reaction, Shout } from "@/utils";
import { ReactionEnum } from "@/utils";
import { collection, getCountFromServer, getDocs } from "firebase/firestore";
import { format } from "timeago.js";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  item: Shout;
}>();

const { getUserName, userId } = useAuth();
const router = useRouter();

const postId = props.item.id;
const reactions = ref<Reaction[]>([]);
const loadingReaction = ref(false);
const loadingCommentsCount = ref(false);
const commentsCount = ref(0);

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

const fetchReactions = async () => {
  loadingReaction.value = true;
  try {
    const reactionsSnap = await getDocs(
      collection(db, "shouts", postId, "reactions")
    );
    reactions.value = reactionsSnap.docs.map((r) => {
      const { type, timestamp } = r.data();
      return { type: type as ReactionEnum, timestamp };
    });
  } catch (error) {
    console.error("Error fetching reactions:", error);
  }
  loadingReaction.value = false;
};

const fetchCommentsCount = async () => {
  if (!postId) {
    commentsCount.value = 0;
    return 0;
  }
  loadingCommentsCount.value = true;
  const commentsRef = collection(db, "shouts", postId, "comments");
  const snapshot = await getCountFromServer(commentsRef);
  commentsCount.value = snapshot.data().count;
  loadingCommentsCount.value = false;
};

function goToStory() {
  router.push("/story/" + postId);
}

const initLoad = () => {
  fetchReactions();
  fetchCommentsCount();
};

onMounted(initLoad);
</script>
<template>
  <div class="app-card flex flex-col gap-2">
    <div class="flex gap-2">
      <UserSvg width="40" height="40" class="app-fill" />
      <div class="flex flex-col gap-1">
        <span class="text-lg font-medium">{{ getUserName(item.userId) }}</span>
        <i class="text-xs">
          {{ format(new Date(item.timestamp.seconds * 1000)) }}</i
        >
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div>
        <TextTrim :text="item.text" />
      </div>

      <PhotoGallery
        v-if="item.files && item.files.length > 0"
        :files="item.files"
      />
    </div>
    <div class="flex items-center gap-2 justify-between">
      <Skeleton :loading="loadingReaction">
        <template #template>
          <SkeletonItem variant="text" width="2rem" height="1.5rem" />
        </template>
        <ReactionTop
          class="flex items-center text-base"
          :total-reactions="totalReactions"
          :top-reactions="topReactions"
        />
      </Skeleton>
      <Skeleton :loading="loadingCommentsCount">
        <template #template>
          <SkeletonItem variant="text" width="4rem" />
        </template>
        <div v-if="commentsCount > 0" class="text-base">
          {{ commentsCount }} comment{{ commentsCount > 1 ? "s" : "" }}
        </div>
      </Skeleton>
    </div>
    <div class="border-top"></div>
    <div class="flex justify-between">
      <ReactBtn :post-id="postId" :value="postReaction" />
      <button class="flex app-primary" @click="goToStory">
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
