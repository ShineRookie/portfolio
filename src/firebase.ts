// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIiAdVT9HXlLy57JsziUX9BzsuoriFDfU",
    authDomain: "self-portfolio-30176.firebaseapp.com",
    projectId: "self-portfolio-30176",
    storageBucket: "self-portfolio-30176.firebasestorage.app",
    messagingSenderId: "523732969573",
    appId: "1:523732969573:web:92895a2604d23adfcfbe8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };