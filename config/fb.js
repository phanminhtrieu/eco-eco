import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCbOb0ZKHTLNdXznk4tS8mXzk1Ex30aKuc",
  authDomain: "final-test-9880c.firebaseapp.com",
  databaseURL:
    "https://final-test-9880c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-test-9880c",
  storageBucket: "final-test-9880c.firebasestorage.app",
  messagingSenderId: "730538509152",
  appId: "1:730538509152:web:aad913d0a28f8ac0865405",
  measurementId: "G-JZRYVD1R70",
};

// initialize firebase
initializeApp(firebaseConfig);
export const database = getFirestore();
