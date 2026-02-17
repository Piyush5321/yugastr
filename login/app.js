import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let role = "teacher";

window.setRole = (r)=>{
  role = r;

  const slider = document.getElementById("slider");
  const input = document.getElementById("uniqueId") || document.getElementById("loginId");

  if(role==="student"){
    slider.style.left="100px";
    if(input) input.placeholder="Enter Student ID";
  }else{
    slider.style.left="0px";
    if(input) input.placeholder="Enter Teacher ID";
  }
};

/* SIGNUP */
window.signup = async ()=>{
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const id = document.getElementById("uniqueId").value;
  const password = document.getElementById("password").value;

  const user = await createUserWithEmailAndPassword(auth,email,password);
  const uid = user.user.uid;

  await setDoc(doc(db,"users",uid),{
    name,
    phone,
    email,
    role,
    studentId: role==="student"? id : "",
    teacherId: role==="teacher"? id : ""
  });

  alert("Account created");
  location.href="login.html";
};

/* LOGIN */
window.login = async ()=>{
  const id = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  const email = prompt("Enter your email");

  try{
    const user = await signInWithEmailAndPassword(auth,email,password);
    const uid = user.user.uid;

    const snap = await getDoc(doc(db,"users",uid));
    const data = snap.data();

    if(data.role !== role){
      document.getElementById("error").innerText="Wrong role selected!";
      return;
    }

    if(role==="student" && data.studentId!==id){
      document.getElementById("error").innerText="Invalid Student ID";
      return;
    }

    if(role==="teacher" && data.teacherId!==id){
      document.getElementById("error").innerText="Invalid Teacher ID";
      return;
    }

    alert("Login success");

  }catch(e){
    document.getElementById("error").innerText=e.message;
  }
};
