// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9OTcba5Sh8kLq8SOQB4k_MG2JXiWDRJE",
    authDomain: "genshin-5e532.firebaseapp.com",
    projectId: "genshin-5e532",
    storageBucket: "genshin-5e532.firebasestorage.app",
    messagingSenderId: "625303049502",
    appId: "1:625303049502:web:96d12aa7fd58589687e50f",
    measurementId: "G-84RWG98QDQ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
