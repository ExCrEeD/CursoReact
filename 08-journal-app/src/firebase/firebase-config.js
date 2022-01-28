import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApLj4c_8Ry9k1-VhFnFBRVvuXwn0X2JkM",
    authDomain: "react-app-excreed.firebaseapp.com",
    projectId: "react-app-excreed",
    storageBucket: "react-app-excreed.appspot.com",
    messagingSenderId: "1031496108330",
    appId: "1:1031496108330:web:f4248e2cd1566c1e9b3653"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const googleAuthProvider = new GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    signInWithPopup,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
}