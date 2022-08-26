
  // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyC7dJ-esm1XjZc5LFNvAAoXdqZFcn6PasY",
    authDomain: "projeto-mundo-invertido-cf386.firebaseapp.com",
    projectId: "projeto-mundo-invertido-cf386",
    storageBucket: "projeto-mundo-invertido-cf386.appspot.com",
    messagingSenderId: "539800965243",
    appId: "1:539800965243:web:42101f3024d546288052de",
    measurementId: "G-TCYC83CVV0"
};

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    export default app