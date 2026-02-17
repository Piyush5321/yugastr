import { db } from "./firebase.js";
import { collection, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const list=document.getElementById("list");

onSnapshot(collection(db,"requests"), snap=>{

  list.innerHTML="";

  snap.forEach(d=>{
    const data=d.data();
    const id=d.id;

    const card=document.createElement("div");
    card.className="card";

    if(data.status==="done"){
      card.classList.add("done");
    }

    card.innerHTML=`
      <b>${data.regId}</b><br>
      ${data.message}<br>
      Status: ${data.status}<br>
      <button onclick="toggle('${id}','${data.status}')">
        ${data.status==="done"?"Done":"Mark Done"}
      </button>
    `;

    list.appendChild(card);
  });

});

window.toggle = async (id,status)=>{
  const newStatus = status==="done"?"pending":"done";

  await updateDoc(doc(db,"requests",id),{
    status:newStatus
  });
};
/* NAVBAR js */
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "login.html";
        });
    });
}

