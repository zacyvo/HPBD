// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf7-wrngAIliK-0dZUpJmX7UvNS09inwQ",
  authDomain: "linh-anna.firebaseapp.com",
  projectId: "linh-anna",
  storageBucket: "linh-anna.appspot.com",
  messagingSenderId: "994036111309",
  appId: "1:994036111309:web:9d5576c306125a3b285684",
  measurementId: "G-XMV33365KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);