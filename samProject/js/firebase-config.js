 // Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBwY5BK6rj4zS16GPacpPiZ6DG9KkQXs",
  authDomain: "sam-project-5839a.firebaseapp.com",
  projectId: "sam-project-5839a",
  storageBucket: "sam-project-5839a.firebasestorage.app",
  messagingSenderId: "187369760334",
  appId: "1:187369760334:web:84b31660f4baac4612c51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
