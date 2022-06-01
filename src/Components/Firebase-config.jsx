import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCzYqk23IXKgzqCk9O55TZRgbwvrUcMiaA",
    authDomain: "kodecampstage13auth.firebaseapp.com",
    projectId: "kodecampstage13auth",
    storageBucket: "kodecampstage13auth.appspot.com",
    messagingSenderId: "5364636665",
    appId: "1:5364636665:web:5f88528f40763aee90fb28",
    measurementId: "G-JE1H9Q4W94"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);