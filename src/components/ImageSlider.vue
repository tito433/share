<template>
  <div class="w-full relative">
    <ImageLoader
      :src="images[currentIndex]"
      alt="image"
      class="w-full object-contain rounded"
    />

    <button v-if="showLeft" @click="prev" class="absolute rounded left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <path d="m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z" />
      </svg>
    </button>

    <button v-if="showRight" @click="next" class="absolute rounded right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <path d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ImageLoader from "@/components/ImageLoader.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const showLeft = computed(
  () => props.images.length > 1 && currentIndex.value > 0
);
const showRight = computed(
  () => props.images.length > 1 && currentIndex.value < props.images.length - 1
);
const currentIndex = ref(0);

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};
</script>
<style scoped lang="scss">
button {
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  fill: var(--app-primary-text-color);
  &.left {
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }
  &.right {
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
}
</style>
