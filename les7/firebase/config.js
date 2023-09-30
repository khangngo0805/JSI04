 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBYb1EbsZJh1Z90Ary2vEm9kVeASVwBjCA",
   authDomain: "project1-d3ab2.firebaseapp.com",
   databaseURL: "https://project1-d3ab2-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "project1-d3ab2",
   storageBucket: "project1-d3ab2.appspot.com",
   messagingSenderId: "663038836759",
   appId: "1:663038836759:web:fcee8c096cf39ea6759c52",
   measurementId: "G-45BMCZ0LKQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
