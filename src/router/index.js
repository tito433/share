import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AboutPage from "../pages/AboutPage.vue";
import AddPage from "../pages/Add.vue";
import AuthPage from "../pages/AuthPage.vue";
import HomePage from "../pages/HomePage.vue";
import PrivacyPage from "../pages/PrivacyPage.vue";
import TermsPage from "../pages/TermsPage.vue";
// Use named views/layouts pattern for layout (most universal)
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "home", component: HomePage },
      { path: "about", name: "about", component: AboutPage },
      {
        path: "add",
        name: "add",
        component: AddPage,
        meta: { requiresAuth: true },
      },
      { path: "auth", name: "auth", component: AuthPage },
      { path: "terms", name: "terms", component: TermsPage },
      { path: "privacy", name: "privacy", component: PrivacyPage },
    ],
  },
];

import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!requiresAuth) return next();

  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return next();
  } else {
    // Use to.fullPath as the return URL
    return next({
      path: "/auth",
      query: { returnUrl: to.fullPath },
    });
  }
});

export default router;
