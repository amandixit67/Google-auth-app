
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDc_2SO9nFpl17qEIOU91ytVmUcdp1YsDc",
    authDomain: "login-app-c1bcb.firebaseapp.com",
    projectId: "login-app-c1bcb",
    storageBucket: "login-app-c1bcb.firebasestorage.app",
    messagingSenderId: "860777115857",
    appId: "1:860777115857:web:886337b7aa72e20bd395f0",
    measurementId: "G-6WGVP7YEVJ"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

