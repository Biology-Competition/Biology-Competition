// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8YfR37co0eDJOVIA7csdVm5piTRUZAjo",
  authDomain: "arbc-5570e.firebaseapp.com",
  projectId: "arbc-5570e",
  storageBucket: "arbc-5570e.firebasestorage.app",
  messagingSenderId: "614997417852",
  appId: "1:614997417852:web:8c50ba980e7c538975cef9",
  measurementId: "G-7HQS2LQED3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);