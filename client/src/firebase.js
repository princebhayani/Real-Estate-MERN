// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-9be08.firebaseapp.com",
  projectId: "real-estate-mern-9be08",
  storageBucket: "real-estate-mern-9be08.appspot.com",
  messagingSenderId: "48900295501",
  appId: "1:48900295501:web:0eedab5a221827c36b8504"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);