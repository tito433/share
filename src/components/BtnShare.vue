<script setup lang="ts">
import { ref, computed } from "vue";
import Modal from "@/components/modal.vue";
import FacebookSvg from "@/assets/Facebook.svg";
import WhatsAppSvg from "@/assets/Whatsapp.svg";
import TwitterSvg from "@/assets/Twitter.svg";
import LinkSvg from "@/assets/Link.svg";
import { notify } from "@/composables";

const props = defineProps<{ postId: string }>();

const shareUrl = computed(
  () => `${window.location.origin}/story/${props.postId}`
);
const open = ref(false);
const shareText = encodeURIComponent(document.title || "Check this out!");

function shareTo(platform: string) {
  let url = "";
  const encodedUrl = encodeURIComponent(shareUrl.value);

  switch (platform) {
    case "facebook":
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      break;
    case "whatsapp":
      url = `https://wa.me/?text=${shareText}%20${encodedUrl}`;
      break;
    case "twitter":
      url = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;
      break;
    case "copy":
      navigator.clipboard
        .writeText(shareUrl.value)
        .then(() => notify("কপি করা হয়েছে।", "info"))
        .catch(() => notify("সমস্যা হয়েছে", "error"));
      return;
  }

  if (url) {
    window.open(url, "_blank");
  }

  open.value = false;
}
</script>
<template>
  <div class="share">
    <button class="opener" @click="open = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"
        />
      </svg>
      Share
    </button>

    <Modal :show="open" @close="open = false">
      <div class="rounded-lg shadow-lg w-full p-4 relative bg-2">
        <div class="flex flex-col gap-2">
          <h2 class="m-0 text-xl text-center">Share to</h2>
          <div class="border-top"></div>
          <div class="flex gap-4 text-base">
            <button @click="shareTo('facebook')" class="flex gap-2 w-full p-4">
              <FacebookSvg width="1.5rem" height="1.5rem" />
              Facebook
            </button>
            <button @click="shareTo('whatsapp')" class="flex gap-2 w-full p-4">
              <WhatsAppSvg width="1.5rem" height="1.5rem" />
              WhatsApp
            </button>
          </div>
          <div class="flex gap-4">
            <button @click="shareTo('twitter')" class="flex gap-2 w-full p-4">
              <TwitterSvg width="1.5rem" height="1.5rem" />
              Twitter
            </button>
            <button @click="shareTo('copy')" class="flex gap-2 w-full p-4">
              <LinkSvg width="1.5rem" height="1.5rem" />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<style scoped lang="scss">
.share {
  button.opener {
    background-color: transparent;
    border: none;
    gap: 0.5rem;
    stroke: var(--app-primary-color);
    fill: var(--app-primary-color);
    color: var(--app-primary-color);
  }
}
</style>
