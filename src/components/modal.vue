<template>
  <teleport to="body">
    <div
      v-if="show"
      class="modal fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="absolute backrdop w-full h-full" @click="close"></div>
      <button @click="close" class="absolute btn-close">
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
      <div ref="modalRef" class="relative z-10 max-w-md w-full">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  show: Boolean,
});
const emit = defineEmits(["close"]);

const modalRef = ref(null);

const close = () => emit("close");

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    close();
  }
};

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    close();
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleKeyDown);
});
</script>
<style lang="scss">
.modal {
  .backrdop {
    background-color: var(--app-bg-color);
  }
  button {
    padding: 0.5rem;
    border: none;
    outline: none;
    &.btn-close {
      border-radius: 50%;
      top: 1rem;
      left: 1rem;
      fill: var(--app-primary-text-color);
    }
  }
}
</style>
