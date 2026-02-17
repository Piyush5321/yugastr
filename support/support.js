import { db } from "./supportFirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("sendBtn").addEventListener("click", async ()=>{

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const id = document.getElementById("userId").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    showMsg("Enter valid email","red");
    return;
  }

  if(name==="" || id==="" || course==="" || message===""){
    showMsg("Please fill all fields","red");
    return;
  }

  try{

    await addDoc(collection(db,"supportTickets"),{
      name,
      email,
      id,
      course,
      message,
      time:new Date()
    });

    showMsg("Support request sent successfully!","lightgreen");
    document.getElementById("message").value="";

  }catch(err){
    showMsg(err.message,"red");
  }

});

function showMsg(text,color){
  const msg=document.getElementById("msg");
  msg.innerText=text;
  msg.style.color=color;
}
