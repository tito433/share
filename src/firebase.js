import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",
  authDomain: "shout-01433.firebaseapp.com",
  projectId: "shout-01433",
  storageBucket: "shout-01433.firebasestorage.app",
  messagingSenderId: "20457265330",
  appId: "1:20457265330:web:80e9afd476768bc71d11ab",
  measurementId: "G-5S6Z0C32DV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "bha-brother-shout-433");
// const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Enable App Check with reCAPTCHA v3
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),
  isTokenAutoRefreshEnabled: true,
});

export {
  addDoc,
  auth,
  collection,
  db,
  getDocs,
  onAuthStateChanged,
  onSnapshot,
  orderBy,
  query,
  signInAnonymously,
  signOut,
  storage,
};
