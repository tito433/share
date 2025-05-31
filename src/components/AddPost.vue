<script setup lang="ts">
import { useAuth, newShoutCount } from "@/composables";
import { ref } from "vue";
import { addDoc, collection, db } from "@/firebase";
import { computed } from "vue";

const { currentUser, signInAnonymously } = useAuth();
const isOpen = ref(false);
const isBusy = ref(false);
const error = ref("");

const data = ref("");

const canPost = computed(() => {
  return !isBusy.value && data.value.trim() !== "";
});

const sendShout = async () => {
  if (data.value.trim()) {
    await addShoutToFirestore(data.value.trim());
  }
};
const handleClose = () => {
  isOpen.value = false;
  data.value = "";
  isBusy.value = false;
};
const addShoutToFirestore = async (text) => {
  isBusy.value = true;
  if (!currentUser.value) {
    try {
      await signInAnonymously();
    } catch (e) {
      error.value = e.message.replace("Firebase: ", "");
      alert(error.value);
    }
  }
  addDoc(collection(db, "shouts"), {
    text,
    timestamp: new Date(),
    userId: currentUser.value.uid,
  });
  handleClose();
  newShoutCount.value = newShoutCount.value + 1;
};
</script>
<template>
  <section class="post-add flex flex-col flex-center">
    <div v-if="isOpen" class="post-add__form">
      <div class="header">
        <div class="flex flex-center gap-1">
          <button class="btn" @click="handleClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          </button>
          <h2>নতুন পোস্ট</h2>
        </div>
        <button
          @click="sendShout"
          class="btn btn__primary"
          :disabled="!canPost"
        >
          <svg
            v-if="!isBusy"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
          <svg v-else class="animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke-width="4"
            />
            <path class="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        </button>
      </div>
      <div class="body flex flex-col">
        <textarea
          v-model="data"
          class="form-control"
          placeholder="আপনার ভাবনা আমাদের সাথে ভাগ করুন"
          rows="5"
        ></textarea>
      </div>
    </div>
    <div class="post-add__ctrl flex-center">
      <button class="btn btn__primary" @click="isOpen = true">
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
.post-add {
  &__form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--app-bg-color);
    z-index: 1000;
    .header {
      background-color: var(--app-header-color);
      display: flex;
      padding: var(--app-gap);
      justify-content: space-between;
      align-items: center;
      h2 {
        color: var(--app-text-color);
        font-size: 1.334rem;
        margin: 0;
      }
      .btn {
        width: 3rem;
        height: 3rem;
        padding: 0;
      }
    }
    .body {
      padding: var(--app-gap);
      textarea {
        flex-grow: 1;
        border: none;
        outline: none;
        resize: none;
        font-size: 1rem;
        padding: 1rem;
        border-radius: var(--app-border-radius);
      }
    }
  }
  &__ctrl {
    .btn {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      .animate-spin {
        animation: spin 1s linear infinite;
      }

      .opacity-25 {
        opacity: 0.25;
      }

      .opacity-75 {
        opacity: 0.75;
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
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
