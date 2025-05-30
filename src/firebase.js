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
const db = getFirestore(app);
const auth = getAuth(app);

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
};
