<script setup lang="ts">
import Editor from "@/components/Editor.vue";
import { useAuth } from "@/composables/useAuth";
import { ref } from "vue";
import { addDoc, collection, db } from "../firebase";

const { currentUser, signInAnonymously } = useAuth();
const isOpen = ref(false);
const isLoading = ref(false);
const error = ref("");

// Automatically login anonymously if not logged in
// onMounted(async () => {
//   if (!currentUser.value) {
//     isLoading.value = true;
//     try {
//       await signInAnonymously();
//     } catch (e) {
//       error.value = e.message.replace("Firebase: ", "");
//     } finally {
//       isLoading.value = false;
//     }
//   }
// });

const data = ref("");

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
  <section class="shout-add-fab">
    <div v-if="isOpen" class="shout-add-fab__form">
      <Editor v-model="data" />
    </div>
    <div class="shout-add-fab__ctrl">
      <template v-if="isOpen">
        <button class="btn btn__secondary" @click="isOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </button>
        <button @click="sendShout" class="btn btn__primary">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
        </button>
      </template>
      <button v-else class="btn btn__primary" @click="isOpen = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
<style scopped lang="scss">
.shout-add-fab {
  &__form {
    position: fixed;
    left: var(--app-gap);
    right: var(--app-gap);
    height: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
  }
  &__ctrl {
    position: fixed;
    bottom: 4.5rem;
    right: 1rem;
    z-index: 1999;
    display: flex;
    gap: var(--app-gap);

    .btn {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}

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
