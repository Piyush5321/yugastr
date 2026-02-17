import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9WXnwsBVjDGvqlMR7BzWLi6pus9x4rR0",
  authDomain: "support-22b81.firebaseapp.com",
  projectId: "support-22b81",
  storageBucket: "support-22b81.firebasestorage.app",
  messagingSenderId: "63242093395",
  appId: "1:63242093395:web:8517d24eb53269147e17a6"
};

const app = initializeApp(firebaseConfig, "supportApp");
export const db = getFirestore(app);
