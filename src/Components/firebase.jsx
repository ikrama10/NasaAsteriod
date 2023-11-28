
// firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA11m6DEp68Pxkru-8DK13rBJ8z9MhuhX4",
  authDomain: "auth-bd764.firebaseapp.com",
  projectId: "auth-bd764",
  storageBucket: "auth-bd764.appspot.com",
  messagingSenderId: "423620674637",
  appId: "1:423620674637:web:cb7ffeeefd37bf3fa18804"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword};
