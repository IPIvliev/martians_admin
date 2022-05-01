import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDcHH94vtczWGeC8lIyxzm86BaVF_d4E3U",
  authDomain: "dmeta-fb2a4.firebaseapp.com",
  projectId: "dmeta-fb2a4",
  storageBucket: "dmeta-fb2a4.appspot.com",
  messagingSenderId: "287284734379",
  appId: "1:287284734379:web:554cde0a0ba11f93654aee",
  measurementId: "G-0DYLZM8Q3N"
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)