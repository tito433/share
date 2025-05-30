import type { User } from "firebase/auth";
import { ref } from "vue";
import {
  auth,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
} from "../firebase";

export const currentUser = ref<User | null>(null);

onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
});

export function useAuth() {
  return {
    currentUser,
    signInAnonymously: () => signInAnonymously(auth),
    logout: () => signOut(auth),
  };
}
