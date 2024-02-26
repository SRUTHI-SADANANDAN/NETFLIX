// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore} from 'firebase/firestore';

import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAfRcQELmB0wEj4paGEdsZLkcqqcHodqII",
  authDomain: "netflix-a4b53.firebaseapp.com",
  projectId: "netflix-a4b53",
  storageBucket: "netflix-a4b53.appspot.com",
  messagingSenderId: "348925693955",
  appId: "1:348925693955:web:82ac3acd691215aa257e36",
  measurementId: "G-WYTF4TMJ63"
};

export const Firebase= firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();



