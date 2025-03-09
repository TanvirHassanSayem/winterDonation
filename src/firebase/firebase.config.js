import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHdxJYmjsUiVP60sv9W7PLveh-4xJj48Q",
  authDomain: "winter-clothing-donation-d04bf.firebaseapp.com",
  projectId: "winter-clothing-donation-d04bf",
  storageBucket: "winter-clothing-donation-d04bf.firebasestorage.app",
  messagingSenderId: "248098988359",
  appId: "1:248098988359:web:de2d72add60e0e865e2c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;