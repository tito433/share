import type { User } from "firebase/auth";
import { computed, ref } from "vue";
import {
  auth,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
} from "../firebase";

export const currentUser = ref<User | null>(null);

const uid = computed(() => currentUser.value?.uid);
const userName = computed(() => getUserName(uid.value));

const getUserName = (user: string | undefined | null): string => {
  if (user) return "Bhai " + user.slice(-3);
  return "Bhai Anon";
};

onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
});

export function useAuth() {
  return {
    userId: uid,
    currentUser,
    userName,
    getUserName,
    signInAnonymously: () => signInAnonymously(auth),
    logout: () => signOut(auth),
  };
}
