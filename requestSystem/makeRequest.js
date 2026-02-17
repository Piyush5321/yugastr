import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btn = document.getElementById("sendBtn");

btn.addEventListener("click", async ()=>{

  const name = document.getElementById("name").value.trim();
  const regId = document.getElementById("regId").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!name || !regId || !message){
    show("Fill all fields","red");
    return;
  }

  try{
    await addDoc(collection(db,"requests"),{
      name,
      regId,
      message,
      status:"pending",
      time: serverTimestamp()
    });

    show("Request submitted!","lightgreen");
  }
  catch(err){
    show(err.message,"red");
    console.log(err);
  }

});

function show(t,c){
  const m=document.getElementById("msg");
  m.innerText=t;
  m.style.color=c;
}
