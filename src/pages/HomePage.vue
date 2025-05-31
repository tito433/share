<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { collection, db, onSnapshot, orderBy, query } from "../firebase";
import Loader from "@/components/Loader.vue";
import Post from "@/components/Post.vue";

const route = useRoute();

const isBusy = ref(false);
const shouts = ref([]);

const fetchData = async () => {
  isBusy.value = true;
  const q = query(collection(db, "shouts"), orderBy("timestamp", "desc"));
  onSnapshot(q, (querySnapshot) => {
    shouts.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    isBusy.value = false;
  });
};

onMounted(fetchData);

// This triggers when route is re-entered with same component
watch(() => route.fullPath, fetchData);
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

@media (max-width: 1200px) {
  .masonry {
    column-count: 3;
  }
}
@media (max-width: 600px) {
  .masonry {
    column-count: 1;
  }
}
</style>
