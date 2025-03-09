import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHSlGdWVHoTRp5n8kkqVVHE-j02k_Rzqc",
  authDomain: "hoichoidev-f27a5.firebaseapp.com",
  projectId: "hoichoidev-f27a5",
  storageBucket: "hoichoidev-f27a5.appspot.com",
  messagingSenderId: "579988425072",
  appId: "1:579988425072:web:29fd71348b5d7ab92767b5",
  measurementId: "G-VNL3TW7L1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

