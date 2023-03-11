// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oOzG6s4rYVnAlAW3gIFiPjh8WG16qkk",
  authDomain: "realtor-react-clone-51039.firebaseapp.com",
  projectId: "realtor-react-clone-51039",
  storageBucket: "realtor-react-clone-51039.appspot.com",
  messagingSenderId: "1047561725285",
  appId: "1:1047561725285:web:806ecc280a3b451b47ed8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()