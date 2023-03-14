import { initializeApp } from 'firebase/app';  
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDwvUvzJxqYrz4ZmsQLXjINXTREAGME2ac",
    authDomain: "study-2db6d.firebaseapp.com",
    projectId: "study-2db6d",
    storageBucket: "study-2db6d.appspot.com",
    messagingSenderId: "821650797767",
    appId: "1:821650797767:web:c4883345df9b641116bae2",
    measurementId: "G-389KNNMGW9"

};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;