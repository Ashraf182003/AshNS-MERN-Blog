// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "minutes-school-87da4.firebaseapp.com",
  projectId: "minutes-school-87da4",
  storageBucket: "minutes-school-87da4.appspot.com",
  messagingSenderId: "272886870858",
  appId: "1:272886870858:web:7a730c6aff786ce17707b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
