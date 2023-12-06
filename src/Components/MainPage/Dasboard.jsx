import React ,{useState,useEffect} from "react";
import AsteriodApi from "./AsteriodApi";
import Favourite from "./Favourite";
import InputData from "./InputData";
import Navbar from "./Navbar";
import { auth } from "../firebase";


function Dasboard() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
    console.log(user.email);
      } else {
        setUserEmail(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <>
        <Navbar userEmail={userEmail} />
        <InputData  userEmail={userEmail}/>

        <AsteriodApi />
      </>
    </div>
  );
}

export default Dasboard;
