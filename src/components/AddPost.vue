<script setup lang="ts">
import { newShoutCount, notify, useAuth } from "@/composables";
import { addDoc, collection, db } from "@/firebase";
import { computed, ref } from "vue";
import SendSvg from "@/assets/Send.svg";
import PhotoUploader from "@/components/PhotoUploader.vue";
import Btn from "@/components/Btn.vue";

const { currentUser, signInAnonymously } = useAuth();
const isOpen = ref(false);
const isBusy = ref(false);
const images = ref<string[]>([]);

const data = ref("");

// notify("পোস্ট ", "success");
// notify("পোস্ট 1", "info");
// notify("পোস্ট 2", "warning");
// notify("পোস্ট 3", "error");

const canPost = computed(() => {
  return !isBusy.value && (data.value.trim() !== "" || images.value.length > 0);
});

const sendShout = async () => {
  await addShoutToFirestore(data.value.trim());
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
      console.error(e);
      notify("Can not get private ID", "error");
    }
  }
  addDoc(collection(db, "shouts"), {
    text,
    timestamp: new Date(),
    userId: currentUser.value.uid,
    files: images.value,
  });
  handleClose();
  newShoutCount.value = newShoutCount.value + 1;
};
const handleFileChange = (value: string[]) => {
  images.value = [...value];
};
</script>
<template>
  <section class="post-add flex flex-col items-center">
    <div v-if="isOpen" class="post-add__form flex flex-col">
      <div class="header p-4 flex">
        <div class="flex flex-grow items-center gap-1">
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
          <h1 class="text-lg">নতুন পোস্ট</h1>
        </div>
        <Btn
          @click="sendShout"
          :loading="isBusy"
          class="btn btn__primary"
          :disabled="!canPost"
        >
          <SendSvg width="24" height="24" />
        </Btn>
      </div>
      <div class="body flex flex-col flex-grow">
        <textarea
          autofocus
          tabindex="0"
          v-model="data"
          class="form-control"
          placeholder="আপনার ভাবনা আমাদের সাথে ভাগ করুন"
          rows="5"
        ></textarea>
        <PhotoUploader @change="handleFileChange" />
      </div>
    </div>
    <div class="post-add__ctrl items-center">
      <button class="btn btn__primary circle" @click="isOpen = true">
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
      .btn {
        width: 3rem;
        height: 3rem;
        padding: 0;
      }
    }
    .body {
      gap: var(--app-gap);
      padding: var(--app-gap);
      background-color: var(--app-bg-color);
      position: fixed;
      top: 5rem;
      left: 0;
      right: 0;
      textarea {
        flex-grow: 1;
        border: none;
        outline: none;
        resize: none;
        font-size: 1rem;
        padding: 1rem;
        border-radius: var(--app-border-radius);
        background-color: var(--app-input-bg-color);
      }
    }
    .images {
      padding: var(--app-gap);
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
