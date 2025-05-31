<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";

import { db } from "@/firebase";
import { newShoutCount } from "@/composables";
import Loader from "@/components/Loader.vue";
import Post from "@/components/Post.vue";
import type { Shout } from "@/utils";

const route = useRoute();

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
    const shoutId = docSnap.id;

    const reactionsSnap = await getDocs(
      collection(db, "shouts", shoutId, "reactions")
    );
    const reactions = reactionsSnap.docs.map((r) => ({
      id: r.id,
      ...r.data(),
    }));

    newShouts.push({
      id: shoutId,
      ...shoutData,
      reactions,
    });
  }

  if (!snapshot.empty) {
    lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
  }

  shouts.value.push(...newShouts);
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
