// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKd-o556d3Zna2TjRK_AXono8bZi8mB70",
  authDomain: "react-backend-7d37b.firebaseapp.com",
  projectId: "react-backend-7d37b",
  storageBucket: "react-backend-7d37b.appspot.com",
  messagingSenderId: "1084815450511",
  appId: "1:1084815450511:web:d148db8732aeb0b0fd2bfa"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
