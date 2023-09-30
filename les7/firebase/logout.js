import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const logoutbutton = document.getElementById("logoutbtn")

function handleSignout() {


   
signOut(auth).then(() => {
  // Sign-out successful.
  alert("logout thanh cong")
  window.location = "./login.html"
}).catch((error) => {
  // An error happened.
});
};

logoutbutton.addEventListener("click", handleSignout)