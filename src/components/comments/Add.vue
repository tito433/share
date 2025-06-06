<script lang="ts" setup>
import UserSvg from "@/assets/User.svg";
import SendSvg from "@/assets/Send.svg";
import { notify, useAuth } from "@/composables";
import Btn from "@/components/Btn.vue";
import { addDoc, collection, db } from "@/firebase";
import { computed, ref } from "vue";

const props = defineProps<{
  postId?: string;
  commentId?: string;
}>();

const emit = defineEmits(["add"]);

const { userId, signInAnonymously } = useAuth();
const comment = ref("");
const parentCommentId = ref(null);
const isBusy = ref(false);
const canComment = computed(() => {
  return !isBusy.value && comment.value.trim() !== "";
});

const addComment = async () => {
  const content = comment.value.trim();
  if (!content) {
    return;
  }
  isBusy.value = true;
  if (!userId.value) {
    try {
      await signInAnonymously();
    } catch (e) {
      console.error(e);
      notify("Can not get private ID", "error");
    }
  }
  try {
    const commentsRef = collection(db, "shouts", props.postId, "comments");

    const newComment = {
      content,
      authorId: userId.value,
      parentCommentId: parentCommentId.value,
      timestamp: new Date(),
    };

    const docRef = await addDoc(commentsRef, newComment);
    comment.value = "";
    emit("add");
  } catch (error) {
    console.error("Error comment:", error);
    notify("সমস্যা হয়েছে", "error");
  }
  isBusy.value = false;
};
</script>
<template>
  <div class="comment-add flex z-30 gap-2 items-center">
    <UserSvg class="user" width="48" height="48" />
    <div class="flex flex-grow">
      <textarea
        v-model="comment"
        placeholder="আপনার মন্তব্য লিখুন..."
        class="comment-input flex-grow"
        rows="1"
      ></textarea>
      <Btn :disabled="!canComment" :loading="isBusy" @click="addComment">
        <SendSvg width="18" height="18" />
      </Btn>
    </div>
  </div>
</template>
<style scoped lang="scss">
.comment-add {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  svg.user {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--app-text-color);
  }

  textarea {
    flex-grow: 1;
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border-radius: var(--app-border-radius);
    background-color: var(--app-input-bg-color);
    overflow-y: hidden;
  }

  button {
    padding: 0 1rem;
    border: none;
    cursor: pointer;
    background-color: var(--app-primary-color);
    svg {
      fill: var(--app-secondary-color);
    }
  }
}
</style>
