// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjKYAbH-RK1RLi2lz1mGdTVTz-Mc66u3E",
  authDomain: "chatbox-techtitans2023.firebaseapp.com",
  projectId: "chatbox-techtitans2023",
  storageBucket: "chatbox-techtitans2023.appspot.com",
  messagingSenderId: "560044158215",
  appId: "1:560044158215:web:5658861fe6db97e35229a2",
  measurementId: "G-1FMPK2P69V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);