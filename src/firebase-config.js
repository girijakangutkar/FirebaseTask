// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1GduiF6q9F7hzNpimoP8ucApYtqOAPNw",
  authDomain: "taskmgmt-963b3.firebaseapp.com",
  projectId: "taskmgmt-963b3",
  storageBucket: "taskmgmt-963b3.firebasestorage.app",
  messagingSenderId: "164806023296",
  appId: "1:164806023296:web:32a14bd21d3da428e42e65",
  measurementId: "G-EHYZFLS3KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
