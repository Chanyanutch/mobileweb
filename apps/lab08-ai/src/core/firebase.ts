import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpzSQ78f0zTIX9wM6cvu9fYNRFn88NWg",
  authDomain: "lab06ionicfirebase.firebaseapp.com",
  projectId: "lab06ionicfirebase",
  storageBucket: "lab06ionicfirebase.firebasestorage.app",
  messagingSenderId: "368716721909",
  appId: "1:368716721909:web:5852c2ac8f5de100019fbc",
  measurementId: "G-13W10CL2RX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
