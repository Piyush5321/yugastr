import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let role = "teacher";

window.setRole = (r) => {
  role = r;
  const slider = document.getElementById("slider");
  const field = document.getElementById("loginId");

  if (role === "student") {
    slider.style.left = "100px";
    field.placeholder = "Enter Student ID";
  } else {
    slider.style.left = "0px";
    field.placeholder = "Enter Teacher ID";
  }
};

document.getElementById("loginBtn").addEventListener("click", async () => {
  const id = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  try {
    let q;

    if (role === "student") {
      q = query(collection(db, "users"), where("studentId", "==", id));
    } else {
      q = query(collection(db, "users"), where("teacherId", "==", id));
    }

    const snap = await getDocs(q);

    if (snap.empty) {
      document.getElementById("msg").innerText = "ID not found";
      document.getElementById("msg").style.color = "red";
      return;
    }

    const userData = snap.docs[0].data();
    const email = userData.email;

    await signInWithEmailAndPassword(auth, email, password);

    document.getElementById("msg").innerText = "Login successfully!";
    document.getElementById("msg").style.color = "lightgreen";

    /* 🔥 SEND LOGIN EMAIL */
    emailjs.send("service_nvnlj5d", "template_yc6g4ww", {
      user_email: email,
      action: "Login completed",
    });

    /* 🔥 REDIRECT TO HOME PAGE */
    setTimeout(() => {
      window.location.href = "../home.html";
    }, 1000);
  } catch (err) {
    document.getElementById("msg").innerText = "Wrong password or role";
    document.getElementById("msg").style.color = "red";
  }
});
