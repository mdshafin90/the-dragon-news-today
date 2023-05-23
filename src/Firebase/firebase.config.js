// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS-Bn8tVIBdGLQRfC6bH4gODbbA6nO1JU",
    authDomain: "the-dragon-news-today.firebaseapp.com",
    projectId: "the-dragon-news-today",
    storageBucket: "the-dragon-news-today.appspot.com",
    messagingSenderId: "253501397981",
    appId: "1:253501397981:web:6a0b9e04ec697841ba3434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app