import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// dotenv.config();
 
//  console.log(import.meta.env.VITE_AUTH_DOMAIN)
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID,
//     measurementId: import.meta.env.VITE_MEASUREMENT_ID
//   };
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default app;