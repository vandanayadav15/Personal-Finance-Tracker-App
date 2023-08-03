// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQgPhlPtqihP133YNiF3E0qJl5VkEmys",
  authDomain: "personl-finance-tracker.firebaseapp.com",
  projectId: "personl-finance-tracker",
  storageBucket: "personl-finance-tracker.appspot.com",
  messagingSenderId: "972750992059",
  appId: "1:972750992059:web:f70791a302dfd62dd2af9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };



