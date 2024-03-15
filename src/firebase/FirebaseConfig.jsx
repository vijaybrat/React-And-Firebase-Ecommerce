// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiV2A4TidCxMMrH45qtedxmozStBcUm94",
  authDomain: "myecom-df73b.firebaseapp.com",
  projectId: "myecom-df73b",
  storageBucket: "myecom-df73b.appspot.com",
  messagingSenderId: "589772679547",
  appId: "1:589772679547:web:807f586a521ed5164f35de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
