import React from "react";
import AsteriodApi from "./AsteriodApi";
import Favourite from "./Favourite";
import InputData from "./InputData";
import Navbar from "./Navbar";

function Dasboard() {
  return (
    <div>
      <>
        <Navbar />
        <InputData />
        <AsteriodApi />
        {/* <Favourite /> */}
      </>
    </div>
  );
}

export default Dasboard;
