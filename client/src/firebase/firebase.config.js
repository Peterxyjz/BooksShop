// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWZL2LbANvV7F9o7YqTdsGmSXOPkyfcY",
  authDomain: "books-shop-inventory.firebaseapp.com",
  projectId: "books-shop-inventory",
  storageBucket: "books-shop-inventory.appspot.com",
  messagingSenderId: "896412103461",
  appId: "1:896412103461:web:2d2c7f33e6a66f9912e0cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;