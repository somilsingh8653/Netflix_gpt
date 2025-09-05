// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY57tpZjLWLN_VUYXXZrSHeRMAIZpna8s",
  authDomain: "netflixgpt-ccea2.firebaseapp.com",
  projectId: "netflixgpt-ccea2",
  storageBucket: "netflixgpt-ccea2.firebasestorage.app",
  messagingSenderId: "950521642268",
  appId: "1:950521642268:web:3edec0e4c0f69fd5b20ed9",
  measurementId: "G-R2EBL6VZHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();