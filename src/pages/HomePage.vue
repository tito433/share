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

import Loader from "@/components/Loader.vue";
import Post from "@/components/Post.vue";
import { newShoutCount } from "@/composables";
import { db } from "@/firebase";
import type { Shout } from "@/utils";

const isBusy = ref(false);

const shouts = ref<Shout[]>([]);
const lastVisible = ref(null);
const pageSize = 10;

const loadShoutsPage = async () => {
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
  const newShouts = [];
  for (const docSnap of snapshot.docs) {
    const shoutData = docSnap.data() as Record<string, any>;

    newShouts.push({
      id: docSnap.id,
      ...shoutData,
      // reactions,
    });
  }

  if (!snapshot.empty) {
    lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
  }

  shouts.value.push(...newShouts);
  // console.log(shouts.value);
  isBusy.value = false;
};

onMounted(loadShoutsPage);

const resetPagination = async () => {
  shouts.value = [];
  lastVisible.value = null;
  await loadShoutsPage();
};
// This triggers when route is re-entered with same component
// watch(() => route.fullPath, loadShoutsPage);
watch(newShoutCount, resetPagination);
</script>
<template>
  <Loader v-if="isBusy" />
  <div v-else class="masonry">
    <Post
      v-for="item in shouts"
      :key="item.id"
      :item="item"
      class="masonry-item"
    ></Post>
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
