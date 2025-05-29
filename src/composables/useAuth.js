import { ref } from "vue";
import {
  auth,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
} from "../firebase";

export const currentUser = ref(null);

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
