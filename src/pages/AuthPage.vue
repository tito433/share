<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth.js";
import { useRouter, useRoute } from "vue-router";

const { register, login } = useAuth();
const router = useRouter();
const route = useRoute();

const email = ref("");
const password = ref("");
const isRegister = ref(false);
const error = ref("");

const submit = async () => {
  error.value = "";
  try {
    if (isRegister.value) {
      await register(email.value, password.value);
    } else {
      await login(email.value, password.value);
    }
    // Redirect after success
    const redirectTo = route.query.returnUrl || "/";
    router.replace(redirectTo);
  } catch (e) {
    error.value = e.message.replace("Firebase: ", "");
  }
};
</script>

<template>
  <form @submit.prevent="submit" style="max-width: 300px; margin: 30px auto">
    <h2 v-if="isRegister">Register</h2>
    <h2 v-else>Login</h2>
    <div>
      <input v-model="email" type="email" required placeholder="Email" />
    </div>
    <div>
      <input
        v-model="password"
        type="password"
        required
        placeholder="Password"
      />
    </div>
    <div>
      <button type="submit">{{ isRegister ? "Register" : "Login" }}</button>
    </div>
    <div style="color: red" v-if="error">{{ error }}</div>
    <div>
      <small>
        <a href="#" @click.prevent="isRegister = !isRegister">
          {{
            isRegister
              ? "Already have an account? Login."
              : "No account? Register"
          }}
        </a>
      </small>
    </div>
  </form>
</template>
