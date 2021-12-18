import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6qDdsgQibdM0cPLCM-lmYACNJVUpnaOI",
  authDomain: "finalhackthon-46442.firebaseapp.com",
  projectId: "finalhackthon-46442",
  storageBucket: "finalhackthon-46442.appspot.com",
  messagingSenderId: "260836475909",
  appId: "1:260836475909:web:cbf39437967b217513486c",
  measurementId: "G-LRD6KZHRR4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};