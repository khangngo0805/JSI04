import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const loginButton = document.getElementById("btn");

function handleLogin() {
    const email = userEmail.value
    const password = userPassword.value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert(user.email)
        window.location = "./index.hml"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
      });
    
};
loginButton.addEventListener("click", handleLogin

)