import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  // apiKey: 'AIzaSyCsITDQuwyXdyRsdWag9Rq95tWm3LfL-bk',
  authDomain: 'soloproject-352209.firebaseapp.com',
  projectId: 'soloproject-352209',
  storageBucket: 'soloproject-352209.appspot.com',
  messagingSenderId: '248779244921',
  appId: '1:248779244921:web:3ffabac817a80afc73dba8',
  measurementId: 'G-5XM6F9RRHC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
