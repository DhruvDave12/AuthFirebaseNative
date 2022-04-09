// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYbrMTkoYrcbzGDlZaopXBbuvILkY_9ao",
  authDomain: "fir-reactnative-74533.firebaseapp.com",
  projectId: "fir-reactnative-74533",
  storageBucket: "fir-reactnative-74533.appspot.com",
  messagingSenderId: "60242187925",
  appId: "1:60242187925:web:d7f62d7f59ecdd0ef32d9c"
};

// Initialize Firebase
let Firebase;

if(getApps().length === 0){
    Firebase = initializeApp(firebaseConfig);
}
const authentication = getAuth(Firebase);

export {authentication};