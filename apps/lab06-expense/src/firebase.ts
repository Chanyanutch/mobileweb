import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpzSQ78f0zTIX9wM6cvu9fYNRFn88NWg",
  authDomain: "lab06ionicfirebase.firebaseapp.com",
  projectId: "lab06ionicfirebase",
  storageBucket: "lab06ionicfirebase.appspot.com",
  messagingSenderId: "1094416449335",
  appId: "1:1094416449335:web:0c8b9e7a3c8f2d1e4b9c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
