// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBERLCKq9_zUpAZLrs8cmKq9gV86tTBJEc",
  authDomain: "twitter-clone1-98811.firebaseapp.com",
  projectId: "twitter-clone1-98811",
  storageBucket: "twitter-clone1-98811.appspot.com",
  messagingSenderId: "25794094189",
  appId: "1:25794094189:web:2f930ecb50cdebb329cb64",
  measurementId: "G-EM89XR3X5F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app);