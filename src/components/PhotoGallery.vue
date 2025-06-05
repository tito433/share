<script setup lang="ts">
import { notify } from "@/composables";
import { computed, ref } from "vue";
import ImageLoader from "@/components/ImageLoader.vue";
import Modal from "@/components/modal.vue";
import ImageSlider from "@/components/ImageSlider.vue";

const open = ref(false);

const props = defineProps<{
  files?: string[];
}>();

const maxDisplay = ref(4);
const displayedImages = computed(
  () => props.files?.slice(0, maxDisplay.value) ?? []
);

const hasMoreImages = computed(
  () => props.files?.length > displayedImages.value.length
);
const openPreview = () => {
  notify("Preview opened", "info");
};
</script>
<template>
  <div class="photo-gallery">
    <div class="photo-gallery__photos">
      <div
        @click="open = true"
        v-if="files.length === 1"
        class="photo-gallery__photos__item full-size"
      >
        <div class="aspect-wide">
          <div class="aspect-wide__wrap">
            <ImageLoader :src="files[0]" alt="Picture" />
          </div>
        </div>
      </div>
      <div
        v-else
        v-for="(item, idx) in displayedImages"
        :key="idx"
        class="photo-gallery__photos__item"
        @click="open = true"
      >
        <div class="aspect-wide">
          <div class="aspect-wide__wrap">
            <ImageLoader :src="item" alt="Picture" />
            <div
              v-if="hasMoreImages && displayedImages.length - 1 == idx"
              class="photo-gallery__photos__blury__counter"
              @click="openPreview"
            >
              <i>+{{ files.length - displayedImages.length + 1 }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :show="open" @close="open = false">
    <ImageSlider :images="props.files" />
  </Modal>
</template>
<style scoped lang="scss">
.photo-gallery {
  &__photos {
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.5rem;
    &__item {
      width: 50%;
      padding: 0 0 0.5rem 0.5rem;
      box-sizing: border-box;
      border-radius: var(--app-border-radius);
      overflow: hidden;
      &.full-size {
        width: 100%;
        padding-bottom: 0;
        max-height: 12rem;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__blury {
      &__counter {
        position: absolute;
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 1.5rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--flip-radius);
      }
    }
  }
}
</style>
