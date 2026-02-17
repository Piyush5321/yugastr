import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btn = document.getElementById("sendBtn");

btn.addEventListener("click", async () => {

  const name = document.getElementById("name").value.trim();
  const regId = document.getElementById("regId").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !regId || !message) {
    show("Fill all fields", "red");
    return;
  }

  try {
    await addDoc(collection(db, "requests"), {
      name,
      regId,
      message,
      status: "pending",
      time: serverTimestamp()
    });

    show("Request submitted!", "lightgreen");
  }
  catch (err) {
    show(err.message, "red");
    console.log(err);
  }

});

function show(t, c) {
  const m = document.getElementById("msg");
  m.innerText = t;
  m.style.color = c;
}
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


// ==================== THEME TOGGLE ====================
window.toggleTheme = function () {
  const body = document.body;
  const isDark = body.classList.toggle("dark-theme");
  const icon = document.getElementById("themeIcon");
  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (document.getElementById("themeIcon")) {
      document.getElementById("themeIcon").textContent = "☀️";
    }
  }
});
