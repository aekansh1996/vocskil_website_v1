import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9zRCka6eJgrUPoloJbXn6Z2_VhtoJhyI",
    authDomain: "vocskill-1bfe7.firebaseapp.com",
    projectId: "vocskill-1bfe7",
    storageBucket: "vocskill-1bfe7.firebasestorage.app",
    messagingSenderId: "744569389312",
    appId: "1:744569389312:web:8eb2f090e1c10672fa33e5",
    measurementId: "G-J1VQ3HX1SM"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
