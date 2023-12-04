import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyA11m6DEp68Pxkru-8DK13rBJ8z9MhuhX4',
  authDomain: 'auth-bd764.firebaseapp.com',
  projectId: 'auth-bd764',
  storageBucket: 'auth-bd764.appspot.com',
  messagingSenderId: '423620674637',
  appId: '1:423620674637:web:cb7ffeeefd37bf3fa18804',
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const LogIn = ({ }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    // Retrieve email from localStorage if "Remember Me" is checked
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      await signInWithEmailAndPassword(auth,email, password);
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email,password);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      navigate("/DasBoard");
    } catch (error) {
      console.error("Login Error:", error.code, error.message, error.serverResponse);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-md shadow-md ">
    <h2 className="text-2xl text-center font-semibold mb-12">Welcome Back!</h2>
    <form className="flex flex-col justify-center items-center" onSubmit={handleLogin}>
      <div className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md  bg-[#e8fofe]"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-600">Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2  w-full border rounded-md"
        />
      </div>
       <div className="mb-4 w-full">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">Remember Me</span>
          </label>
        </div>
      <button
        type="submit"
        className="bg-[#f14536] text-center text-white  font-sans  font-semibold mt-12 p-4 w-[50%] rounded-md"
      >
        Login
      </button>
    </form>
    <p className="mt-4 text-center">
       <Link to="/signup" className="text-[#f14536]">
       
        Don't have an account?</Link>
    </p>
  </div>
  );
};

export default LogIn;
