<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import Editor from "@/components/Editor.vue";
import { useAuth } from "@/composables/useAuth";
import { addDoc, collection, db } from "../firebase";

const { currentUser, signInAnonymously } = useAuth();
const router = useRouter();
const isLoading = ref(false);
const error = ref("");

// Automatically login anonymously if not logged in
onMounted(async () => {
  if (!currentUser.value) {
    isLoading.value = true;
    try {
      await signInAnonymously();
    } catch (e) {
      error.value = e.message.replace("Firebase: ", "");
    } finally {
      isLoading.value = false;
    }
  }
});

const data = ref("");

const goBack = () => {
  router.back();
};

function sendShout() {
  if (data.value.trim()) {
    addShoutToFirestore(data.value.trim());
    data.value = "";
    goBack();
  }
}

function addShoutToFirestore(text) {
  // Always check before write
  if (!currentUser.value) return;
  addDoc(collection(db, "shouts"), {
    text,
    timestamp: new Date(),
    userId: currentUser.value.uid,
  });
}
</script>
<template>
  <section class="container">
    <Loader v-if="isBusy" />
    <div v-else class="shout-add-form">
      <Editor v-model="data" />

      <div class="footer">
        <button type="button" @click="goBack" class="button-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-3.78 5.78l-1.44 1.44L14.564 16l-3.782 3.78l1.44 1.44L16 17.437l3.78 3.78l1.44-1.437L17.437 16l3.78-3.78l-1.437-1.44L16 14.564l-3.78-3.782z"
            />
          </svg>
          Cancel
        </button>
        <button @click="sendShout" class="button-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
          Send
        </button>
      </div>
    </div>
  </section>
</template>
<style scopped lang="scss">
.footer {
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  gap: 1rem;
  button {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
