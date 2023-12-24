// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDGm4I8pRFD5nWH9T2Yv0fK5f30lagOWx0",
//   authDomain: "a8-job-task-scc-technovision.firebaseapp.com",
//   projectId: "a8-job-task-scc-technovision",
//   storageBucket: "a8-job-task-scc-technovision.appspot.com",
//   messagingSenderId: "514776427136",
//   appId: "1:514776427136:web:441964e205a7ddd1659465",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);