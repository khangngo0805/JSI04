import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const button = document.getElementById("btn");

function userIn4() {
    const email = userEmail.value
    const password = userPassword.value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        });
};
button.addEventListener("click", userIn4

)