<script setup>
import { Bold, ClassicEditor, Essentials, Italic, Paragraph } from "ckeditor5";
import { computed, ref } from "vue";
import { useAuth } from "../composables/useAuth.js";
import { addDoc, collection, db } from "../firebase";

const { currentUser, signInAnonymously } = useAuth();
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

const config = computed(() => {
  return {
    licenseKey: "GPL", // Or 'GPL'.
    plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
    toolbar: ["undo", "redo", "|", "bold", "italic", "|", "formatPainter"],
  };
});

const data = ref("");

function sendShout() {
  if (data.value.trim()) {
    addShoutToFirestore(data.value.trim());
    data.value = "";
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
  <section>
    <div class="shout-add-form">
      <form @submit.prevent="sendShout">
        <ckeditor :editor="ClassicEditor" v-model="data" :config="config" />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>
