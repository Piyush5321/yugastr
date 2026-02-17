import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZIlWMGLwTIDg2TxPVpyl87uESnLe55Sw",
  authDomain: "buzzer-531ea.firebaseapp.com",
  databaseURL: "https://buzzer-531ea-default-rtdb.firebaseio.com",
  projectId: "buzzer-531ea",
  storageBucket: "buzzer-531ea.firebasestorage.app",
  messagingSenderId: "643955926356",
  appId: "1:643955926356:web:4fc0c25c31a7b09bcf94c1",
  measurementId: "G-L8568GXSST"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

