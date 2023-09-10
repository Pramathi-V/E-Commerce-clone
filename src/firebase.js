import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJYf8r-HUgWo7qosirJn8K_I8r49EwicQ",
    authDomain: "e-commerce-2128f.firebaseapp.com",
    projectId: "e-commerce-2128f",
    storageBucket: "e-commerce-2128f.appspot.com",
    messagingSenderId: "858583131572",
    appId: "1:858583131572:web:d692e601666cb65a51fee1",
    measurementId: "G-J77J5H3CB9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };