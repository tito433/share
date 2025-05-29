<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["addShout"]);
const newShout = ref("");
const isOpen = ref(false);

const popupRef = ref(null);

function sendShout() {
  if (newShout.value.trim()) {
    emit("addShout", newShout.value.trim());
    newShout.value = "";
    isOpen.value = false;
  }
}

const handleClickOutside = (event) => {
  if (popupRef.value && !popupRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <div ref="popupRef" v-if="isOpen" class="shout-add-form">
    <form @submit.prevent="sendShout">
      <textarea
        v-model="newShout"
        placeholder="বার্তা"
        required
        rows="3"
      ></textarea>
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
  <button v-else type="button" @click="isOpen = true" class="shout-add-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.shout-add-form {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 37.5rem;
  justify-content: center;
  align-items: center;
  background-color: var(--app-bg-color, #fff);
  padding: 1rem;
  h2 {
    color: #007b5e;
  }
  form {
    display: flex;
    width: 100%;
  }
  textaraea {
    flex-grow: 1;
  }
}
</style>
