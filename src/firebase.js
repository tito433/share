import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
  db,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  auth,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
};
