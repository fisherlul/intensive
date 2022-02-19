// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { doc, getDoc,  getFirestore} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwjup3OXcHk7eBaQOXXzaQ10vEr9A2P2k",
  authDomain: "checkpoint2-95568.firebaseapp.com",
  projectId: "checkpoint2-95568",
  storageBucket: "checkpoint2-95568.appspot.com",
  messagingSenderId: "40658683951",
  appId: "1:40658683951:web:8e4588d19393fed2ab9eda",
  measurementId: "G-E05RZZXM18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getFirestore();
const Signin = document.getElementById("Signin")

function signin(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result').value;

    var user = localStorage.getItem(username).value;
    var data = JSON.parse(user);

    if(user = null){
        result.innerHTML = "Wrong username"
    } else if (username == data.username && password == data.password){
        result.innerHTML = "Logged in" 
    } else {
        result.innerHTML = "Wrong password"
    }
}