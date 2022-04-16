// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX2HnGXuBLi9JlHGG5n5T78IYBktSPTmI",
  authDomain: "on-tap-b6374.firebaseapp.com",
  projectId: "on-tap-b6374",
  storageBucket: "on-tap-b6374.appspot.com",
  messagingSenderId: "1085843022863",
  appId: "1:1085843022863:web:4f2137b3b0139c9cd16f7a",
  measurementId: "G-PFLR6T85X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

