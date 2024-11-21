
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth

const firebaseConfig = {
    apiKey: "AIzaSyBz4zjjt9aIp5pVk-Z5M9t88OtCT4Z39sk",
    authDomain: "broker-system-2f8c5.firebaseapp.com",
    projectId: "broker-system-2f8c5",
    storageBucket: "broker-system-2f8c5.firebasestorage.app",
    messagingSenderId: "214436796043",
    appId: "1:214436796043:web:edf89b4f8aa3f99921a68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app); // Get the auth instance

// Export the app and auth
export { app, auth };
