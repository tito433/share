<script setup lang="ts">
import { notify, useAuth } from "@/composables";
import { storage } from "@/firebase";
import { UploadItem } from "@/utils";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { computed, reactive, ref } from "vue";

const emit = defineEmits<{
  (e: "change", images: string[]): void;
}>();
const { currentUser, signInAnonymously } = useAuth();

const maxDisplay = ref(4);
const uploads = ref<UploadItem[]>([]);
const displayedImages = computed(() =>
  uploads.value.slice(0, maxDisplay.value - 1)
);

const hasMoreImages = computed(
  () => uploads.value.length > displayedImages.value.length
);

const handleMultipleFiles = async (event: Event) => {
  if (!currentUser.value) {
    try {
      await signInAnonymously();
    } catch (e) {
      console.error(e);
      notify("Can not get private ID", "error");
    }
  }
  if (!currentUser.value) {
    notify("Please sign in to upload files", "error");
    return;
  }
  const userId = currentUser.value?.uid || "anonymous";
  const files = (event.target as HTMLInputElement).files;
  if (!files) return;

  Array.from(files).forEach((file) => {
    const fileData = reactive<UploadItem>({ progress: 0, url: null });
    uploads.value.push(fileData);
    const uid = uuidv4();
    const fileRef = storageRef(storage, `userId/${userId}/${uid}_${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        fileData.progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        notify(`Upload failed for ${file.name}:`, "error");
      },
      async () => {
        fileData.url = await getDownloadURL(uploadTask.snapshot.ref);
        emit(
          "change",
          uploads.value.map((it) => it.url)
        );
      }
    );
  });
};

const openPreview = () => {
  hasMoreImages.value = true;
  notify("Preview opened", "info");
};

// onMounted(() => {
//   uploads.value = [
//     {
//       file: new File([], "placeholder.jpg"),
//       progress: 70,
//       url: "https://placehold.co/600x400?text=1",
//     },
//     {
//       file: new File([], "placeholder.jpg"),
//       progress: 20,
//       url: "https://placehold.co/600x400?text=2",
//     },
//     {
//       file: new File([], "placeholder.jpg"),
//       progress: 10,
//       url: "https://placehold.co/600x400?text=3",
//     },
//     {
//       file: new File([], "placeholder.jpg"),
//       progress: 80,
//       url: "https://placehold.co/600x400?text=4",
//     },
//     {
//       file: new File([], "placeholder.jpg"),
//       progress: 20,
//       url: "https://placehold.co/600x400?text=5",
//     },
//   ];
// });
</script>
<template>
  <div class="photo-gallery">
    <div class="photo-gallery__photos">
      <div class="photo-gallery__photos__item add-image">
        <div class="aspect-wide">
          <div class="aspect-wide__wrap flex">
            <label class="uploader">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 27 24"
              >
                <path
                  fill="currentColor"
                  d="m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"
                />
                <path
                  fill="currentColor"
                  d="M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"
                />
                <path
                  fill="currentColor"
                  d="m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"
                />
              </svg>
              যোগ করুন

              <input type="file" multiple @change="handleMultipleFiles" />
            </label>
          </div>
        </div>
      </div>
      <div
        v-for="(item, idx) in displayedImages"
        :key="idx"
        class="photo-gallery__photos__item"
      >
        <div class="aspect-wide">
          <div
            class="aspect-wide__wrap"
            :progress="item.progress"
            :class="{ skeleton: item.progress < 100 }"
          >
            <img
              v-if="item.url"
              :src="item.url"
              alt="Uploaded file"
              class="photo-image"
            />
            <div
              v-if="hasMoreImages && displayedImages.length - 1 == idx"
              class="photo-gallery__photos__blury__counter"
              @click="openPreview"
            >
              <i>+{{ uploads.length - displayedImages.length + 1 }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
label.uploader {
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  border-width: 2px;
  border-style: dashed;
  border-color: var(--app-primary-color);
  border-radius: var(--app-border-radius);
  cursor: pointer;
  color: var(--app-primary-color);
  user-select: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--app-primary-light-color);
  }
  input[type="file"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
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
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &__delete {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        .el-button {
          padding: 0 0.375rem;
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 0.5rem;
          color: #fff;
          &:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }
    }

    .full-size {
      width: 100%;
      height: 100%;
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
