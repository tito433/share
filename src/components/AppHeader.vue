<script setup lang="ts">
import AddPost from "@/components/AddPost.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(true);
let lastScroll = window.scrollY;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scrolling down → hide header
    isVisible.value = false;
  } else if (currentScroll < lastScroll) {
    // Scrolling up → show header
    isVisible.value = true;
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header
    :class="[
      'w-full bg-white shadow transition-transform duration-300 z-50',
      isVisible
        ? 'fixed top-0 translate-y-0'
        : 'fixed -top-16 -translate-y-full',
    ]"
  >
    <router-link class="brand" :to="{ name: 'home' }">
      <svg
        class="logo"
        version="1.1"
        viewBox="0 0 123.94 123.94"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"
        />
        <path
          d="m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"
        />
        <path
          d="m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"
        />
        <path
          d="m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"
        />
        <circle cx="48.926" cy="12.825" r="12.825" />
      </svg>
      <h1>ভাই ব্রাদার্স</h1>
    </router-link>
    <div class="right flex items-center gap-1">
      <AddPost />
      <!-- <router-link v-if="currentUser" class="user" :to="{ name: 'UserPage' }">
        <UserSvg alt="User Icon" width="48" height="48" />
      </router-link> -->
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--app-header-color);
  gap: 1rem;
  .brand {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: var(--app-text-color);
    gap: var(--app-gap);

    svg.logo {
      width: 3rem;
      height: 3rem;
      fill: var(--app-text-color);
    }
    h1 {
      margin: 0;
      flex-grow: 1;
      .break-sm {
        display: none;
      }
    }
  }

  .user {
    text-decoration: none;
    font-size: 0;
    svg {
      width: 3rem;
      height: 3rem;
      fill: var(--app-text-color);
    }
  }
}
@media (max-width: 600px) {
  header .brand {
    svg.logo {
      width: 3rem;
      height: 3rem;
    }
    h1 {
      font-size: 1.334rem;
      .break-sm {
        display: block;
        height: 0;
      }
    }
  }
}
@media (max-width: 400px) {
  header .brand {
    svg.logo {
      width: 3em;
      height: 3em;
    }
    h1 {
      font-size: 1rem;
    }
  }
}
</style>
