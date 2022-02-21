import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  // const firebaseConfigTesting = {
  //   apiKey: "AIzaSyBt65LrNPNlkmJvevh3kFnu-dE0B7oR3QA",
  //   authDomain: "listacurso-82f37.firebaseapp.com",
  //   databaseURL: "https://listacurso-82f37.firebaseio.com",
  //   projectId: "listacurso-82f37",
  //   storageBucket: "listacurso-82f37.appspot.com",
  //   messagingSenderId: "69454959701",
  //   appId: "1:69454959701:web:54ae04e045e86fd61470dc"
  // };

  
  // Initialize Firebase
  // const app = initializeApp(process.env.NODE_ENV ==='test'?firebaseConfigTesting:firebaseConfig);
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