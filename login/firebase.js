import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC-NfULdAUdp4yDbKHiNYTF9EZg1qG_Lg",
  authDomain: "yugastrlogin.firebaseapp.com",
  projectId: "yugastrlogin",
  storageBucket: "yugastrlogin.firebasestorage.app",
  messagingSenderId: "391276873890",
  appId: "1:391276873890:web:79f5c1ed7afa32ec8daffb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
