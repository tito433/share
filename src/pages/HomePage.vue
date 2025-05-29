<template>
  <section>
    <ul>
      <li v-for="item in shouts" :key="item.id">
        {{ item.text }}
        <small>
          ({{
            item.timestamp &&
            new Date(item.timestamp.seconds * 1000).toLocaleTimeString()
          }})
        </small>
      </li>
    </ul>
    <router-link to="/add">
      <button class="shout-add-btn">
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
    </router-link>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ShoutAdd from "../components/ShoutAdd.vue";
import {
  db,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "../firebase";

const shouts = ref([]);

function addShoutToFirestore(text) {
  addDoc(collection(db, "shouts"), {
    text,
    timestamp: new Date(),
  });
}

onMounted(() => {
  const q = query(collection(db, "shouts"), orderBy("timestamp", "desc"));
  onSnapshot(q, (querySnapshot) => {
    shouts.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
});
</script>
<style scoped lang="scss">
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
</style>
