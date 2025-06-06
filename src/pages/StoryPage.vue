<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Loader from "@/components/Loader.vue";
import type { Shout } from "@/utils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Post from "@/components/Post.vue";
import CommentAdd from "@/components/comments/Add.vue";
import CommentList from "@/components/comments/List.vue";
import Box404 from "@/components/Box404.vue";
import { notify } from "@/composables";

const route = useRoute();
const id = route.params.id;
const postId = Array.isArray(id) ? id[0] : id;

const isBusy = ref(false);

const post = ref<Shout | null>(null);
const lastVisible = ref(null);
const pageSize = 10;
const commentListKey = ref(0);

const loadStory = async () => {
  isBusy.value = true;
  try {
    const docRef = doc(db, "shouts", postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Record<string, any>;
      post.value = {
        id: docSnap.id,
        ...data,
      } as Shout;
    }
  } catch (error) {
    notify("পোস্ট পাওয়া যায় নি।", "error");
  }
  isBusy.value = false;
};
const handleCommentAdd = () => {
  commentListKey.value++;
};
onMounted(loadStory);
</script>
<template>
  <Loader v-if="isBusy" />
  <template v-else>
    <template v-if="post">
      <Post :item="post">
        <template #append>
          <CommentList :postId="post.id" :key="commentListKey" />
        </template>
      </Post>
      <CommentAdd
        :postId="post.id"
        @add="handleCommentAdd"
        class="post-add-comment z-10"
      />
    </template>
    <Box404 v-else />
  </template>
</template>
<style scoped lang="scss">
.post-add-comment {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--app-secondary-color);
}
</style>
