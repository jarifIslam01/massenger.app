// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLn4GdS0rtC-a2aFkvV8Kg-inlM-b5Clk",
  authDomain: "massenger-6fa2a.firebaseapp.com",
  projectId: "massenger-6fa2a",
  storageBucket: "massenger-6fa2a.appspot.com",
  messagingSenderId: "1017270461913",
  appId: "1:1017270461913:web:ff54ebfd4f52672743a5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);