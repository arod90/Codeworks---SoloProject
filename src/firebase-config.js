import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'soloproject-352209.firebaseapp.com',
  projectId: 'soloproject-352209',
  storageBucket: 'soloproject-352209.appspot.com',
  messagingSenderId: '248779244921',
  appId: '1:248779244921:web:3ffabac817a80afc73dba8',
  measurementId: 'G-5XM6F9RRHC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
