import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let role = "teacher";

window.setRole = (r)=>{
  role = r;

  const slider = document.getElementById("slider");
  const idField = document.getElementById("uniqueId");
  const courseBox = document.getElementById("course");

  if(role==="student"){
    slider.style.left="100px";
    idField.placeholder="Enter Student ID";
    courseBox.style.display="block";
  }else{
    slider.style.left="0px";
    idField.placeholder="Enter Teacher ID";
    courseBox.style.display="none";
  }
};

document.getElementById("createBtn").addEventListener("click", async ()=>{

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const id = document.getElementById("uniqueId").value.trim();
  const password = document.getElementById("password").value.trim();
  const course = document.getElementById("course").value;

  /* PHONE VALIDATION */
  if(!/^[0-9]{10}$/.test(phone)){
    document.getElementById("msg").innerText="Phone must be exactly 10 digits";
    document.getElementById("msg").style.color="red";
    return;
  }

  /* COURSE VALIDATION */
  if(role==="student" && course===""){
    document.getElementById("msg").innerText="Please select course";
    document.getElementById("msg").style.color="red";
    return;
  }

  try{

    const user = await createUserWithEmailAndPassword(auth,email,password);
    const uid = user.user.uid;

    await setDoc(doc(db,"users",uid),{
      name,
      phone,
      email,
      role,
      course: role==="student" ? course : "",
      studentId: role==="student" ? id : "",
      teacherId: role==="teacher" ? id : ""
    });

    document.getElementById("msg").innerText="Signup successfully!";
    document.getElementById("msg").style.color="lightgreen";

    emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
  user_email: email,
  action: "Signup completed"
});


  }catch(err){
    document.getElementById("msg").innerText=err.message;
    document.getElementById("msg").style.color="red";
  }

});
