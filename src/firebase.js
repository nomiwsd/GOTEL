// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDrg7yXYRY3rkaI8jB4jO1n5u2fclELuYU",
  authDomain: "gotel-a442e.firebaseapp.com",
  projectId: "gotel-a442e",
  storageBucket: "gotel-a442e.appspot.com",
  messagingSenderId: "71191968375",
  appId: "1:71191968375:web:fd1584c681b477b8962472"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
export const realtime = getDatabase(app);