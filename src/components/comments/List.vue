<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";
import { db } from "@/firebase";
import { Comment } from "@/utils";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import UserSvg from "@/assets/User.svg";

import { format } from "timeago.js";
import { onMounted, ref } from "vue";

const props = defineProps<{
  postId: string;
}>();

const { userId, getUserName } = useAuth();

const comments = ref<Comment[]>([]);

const getComments = async () => {
  const commentsRef = collection(db, "shouts", props.postId, "comments");
  const q = query(commentsRef, orderBy("timestamp", "asc"));

  const snapshot = await getDocs(q);

  const flatComments: Comment[] = [];
  const commentMap: Record<string, Comment> = {};

  snapshot.forEach((doc) => {
    const data = doc.data();
    const comment: Comment = {
      id: doc.id,
      content: data.content,
      authorId: data.authorId,
      parentCommentId: data.parentCommentId || null,
      timestamp: data.timestamp,
      replies: [],
    };
    flatComments.push(comment);
    commentMap[comment.id] = comment;
  });

  // Nest replies under their parent comment
  const nested: Comment[] = [];
  flatComments.forEach((comment) => {
    if (comment.parentCommentId) {
      const parent = commentMap[comment.parentCommentId];
      if (parent) {
        parent.replies = parent.replies || [];
        parent.replies.push(comment);
      } else {
        // Orphaned reply (parent not found), treat as top-level
        nested.push(comment);
      }
    } else {
      nested.push(comment); // top-level
    }
  });

  comments.value = nested;
};

onMounted(getComments);
</script>
<template>
  <div class="comment-list flex flex-col gap-1">
    <div v-if="comments.length > 0" class="border-top"></div>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="comment-item flex"
    >
      <UserSvg class="icon" width="2.5rem" height="2.5rem" />
      <div class="comment-item-body flex flex-col flex-grow">
        <div class="comment-item-body-author flex justify-between">
          <span class="author-name">{{ getUserName(comment.authorId) }}</span>
          <i class="timestamp">{{
            format(new Date(comment.timestamp.seconds * 1000))
          }}</i>
        </div>
        <div class="content">
          {{ comment.content }}
        </div>
        <div v-if="comment.replies.length > 0" class="replies">
          <CommentList :comments="comment.replies" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.comment-list {
  padding-top: 0.5rem;
  .comment-item {
    gap: 0.5rem;
    .icon {
      fill: var(--app-text-color);
    }

    .timestamp {
      font-size: 0.75rem;
    }
    .comment-item-body {
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      background-color: var(--app-comment-bg-color);
    }
  }
}
</style>
