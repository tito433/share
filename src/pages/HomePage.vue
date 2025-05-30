<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { format } from "timeago.js";
import { collection, db, onSnapshot, orderBy, query } from "../firebase";
import Loader from "@/components/Loader.vue";
import { useAuth } from "@/composables/useAuth";
import UserSvg from "@/assets/User.svg";

const { getUserName } = useAuth();

const route = useRoute();

const isBusy = ref(false);
const shouts = ref([]);

const fetchData = async () => {
  isBusy.value = true;
  const q = query(collection(db, "shouts"), orderBy("timestamp", "desc"));
  onSnapshot(q, (querySnapshot) => {
    shouts.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    isBusy.value = false;
  });
};

onMounted(fetchData);

// This triggers when route is re-entered with same component
watch(() => route.fullPath, fetchData);
</script>
<template>
  <Loader v-if="isBusy" />
  <div v-else class="masonry">
    <div v-for="item in shouts" :key="item.id" class="masonry-item">
      <div class="card flex flex-col">
        <div class="head flex">
          <UserSvg width="48" height="48" />
          <div class="author flex">
            <span>{{ getUserName(item.userId) }}</span>
            <i>
              {{ format(new Date(item.timestamp.seconds * 1000)) }}
            </i>
          </div>
        </div>
        <div v-html="item.text" class="body"></div>
      </div>
    </div>
  </div>
  <router-link to="/add">
    <button class="button-primary shout-add-btn">
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
  </router-link>
</template>
<style scoped lang="scss">
.masonry {
  column-count: 2;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem;
  gap: 1rem;
  border-radius: var(--app-border-radius);
  .head {
    gap: 1rem;
    align-items: center;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      fill: var(--app-text-color);
    }
    .author {
      flex-direction: column;
      span {
        line-height: 1;
      }
      i {
        font-size: 0.75rem;
      }
    }
  }
}

.shout-add-btn {
  position: fixed;
  bottom: 4.5rem;
  right: 1rem;
  border-radius: 50%;
  border: none;
  width: 4rem;
  height: 4rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
@media (max-width: 1200px) {
  .masonry {
    column-count: 3;
  }
}
@media (max-width: 600px) {
  .masonry {
    column-count: 1;
  }
}
</style>
