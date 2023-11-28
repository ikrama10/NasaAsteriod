// App.js
import React, { useEffect, useState } from "react";
import { auth } from "./Components/firebase";
import LogIn from "./Components/auth/LogIn";
import SignUp from "./Components/auth/SignUp";
import DasBoard from "./Components/MainPage/Dasboard";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css'


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/dasboard" element={<DasBoard/>}/>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/signup"  element={<SignUp/>}/>
      
     </Routes>
     </BrowserRouter>

      
    
    
  );
};

export default App;
