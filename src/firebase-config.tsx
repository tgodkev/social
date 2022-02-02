// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAzGQCOhPkcur6ECrzZwvzTJnYWT2uA10E",

  authDomain: "social-b140c.firebaseapp.com",

  projectId: "social-b140c",

  storageBucket: "social-b140c.appspot.com",

  messagingSenderId: "874525361100",

  appId: "1:874525361100:web:5769f660598ac4c7cfd369",

  measurementId: "G-929N16Q1XB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default getFirestore();