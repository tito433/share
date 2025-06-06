<script setup lang="ts">
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { onMounted, ref, watch } from "vue";

import Post from "@/components/Post.vue";
import PostSkeleton from "@/components/PostSkeleton.vue";
import { newShoutCount } from "@/composables";
import { db } from "@/firebase";
import type { Shout } from "@/utils";
import { useRoute } from "vue-router";

const route = useRoute();

const isBusy = ref(true);

const shouts = ref<Shout[]>([]);
const lastVisible = ref();
const pageSize = 10;

const loadStories = async () => {
  let q;
  isBusy.value = true;
  if (lastVisible.value) {
    q = query(
      collection(db, "shouts"),
      orderBy("timestamp", "desc"),
      startAfter(lastVisible.value),
      limit(pageSize)
    );
  } else {
    q = query(
      collection(db, "shouts"),
      orderBy("timestamp", "desc"),
      limit(pageSize)
    );
  }

  const snapshot = await getDocs(q);
  const newShouts: Shout[] = [];
  for (const docSnap of snapshot.docs) {
    const shoutData = docSnap.data() as Record<string, any>;
    newShouts.push({
      id: docSnap.id,
      text: shoutData.text,
      timestamp: shoutData.timestamp,
      userId: shoutData.userId,
      files: shoutData.files || [],
    });
  }

  if (!snapshot.empty) {
    lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
  }

  shouts.value.push(...newShouts);
  // console.log(shouts.value);
  isBusy.value = false;
};

const resetPagination = async () => {
  shouts.value = [];
  lastVisible.value = null;
  loadStories();
};
// This triggers when route is re-entered with same component

watch(() => route.fullPath, loadStories);
onMounted(loadStories);
watch(newShoutCount, resetPagination);
</script>
<template>
  <div class="masonry">
    <PostSkeleton
      v-if="isBusy"
      v-for="i in 3"
      :key="i"
      class="masonry-item"
      :loading="isBusy"
    />

    <Post
      v-else
      v-for="item in shouts"
      :key="item.id"
      :item="item"
      class="app-card masonry-item"
    />
  </div>
</template>
<style scoped lang="scss">
.masonry {
  column-count: 2;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .masonry {
    column-count: 1;
  }
}
</style>
