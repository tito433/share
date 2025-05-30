<script setup lang="ts">
import { signInAnonymously } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase";

import { useAuth } from "@/composables/useAuth";
const { userId, userName } = useAuth();
const isSinginInProgress = ref(false);
const isSignOutProgress = ref(false);

const _signIn = async () => {
  isSinginInProgress.value = true;
  try {
    const userCredential = await signInAnonymously(auth);
    isSinginInProgress.value = false;
  } catch (error) {
    console.error("Anonymous sign-in error:", error);
    alert("Failed to sign in: " + (error as Error).message);
  }
};
const _signOut = async () => {
  isSignOutProgress.value = true;
  try {
    await auth.signOut();
    isSignOutProgress.value = false;
  } catch (error) {
    console.error("Sign-out error:", error);
    alert("Failed to sign out: " + (error as Error).message);
  }
};
</script>
<template>
  <section class="container">
    <h2>About you</h2>
    <div class="identity" v-if="userId">
      {{ userName }}<br />ID: {{ userId }}
    </div>
    <p class="desc">
      You’re an anonymous user created by Firebase Authentication. When you
      first opened the app, Firebase gave you a unique, private ID—no email or
      password needed. This lets the app save your progress without knowing who
      you are. Later, if you decide to sign up using email and password (which
      I’ve enabled), your anonymous account can be upgraded and linked to your
      new identity—so none of your data is lost. Your privacy stays intact the
      whole time; nothing personal is shared until you choose to provide it.
      Just remember, if you uninstall before signing up, your anonymous data
      might be lost.
    </p>
    <div class="signin">
      <button
        v-if="!userId"
        @click="_signIn"
        class="button-primary"
        :disabled="isSinginInProgress"
      >
        Sign in as Guest
      </button>
      <button
        v-else
        @click="_signOut"
        class="btn ml-2"
        :disabled="isSignOutProgress"
      >
        Sign out
      </button>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  .identity {
    font-weight: bold;
    font-size: 0.75rem;
    margin-bottom: 2rem;
  }
  .desc {
    line-height: 1.5;
  }
}
.signin {
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  button {
    padding: 1rem 2rem;
  }
}
</style>
