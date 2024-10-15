import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4pI1-Jx4_5wf91ZacYv0BxX6PkYn544c",
    authDomain: "touriscope-4c584.firebaseapp.com",
    projectId: "touriscope-4c584",
    storageBucket: "touriscope-4c584.appspot.com",
    messagingSenderId: "465942310637",
    appId: "1:465942310637:web:c81b6365c28bbfd8f8a6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };