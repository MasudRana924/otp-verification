import React, { useEffect } from "react";
import "./Home.css";
import CheckoutUrl from "./CheckoutUrl";
import Recurring from "./Recurring";
import DynamicCharge from "./DynamicCharge";

const Home = () => {
  return (
    <div>
      <div className="flex flex-1 justify-center items-center ">
        <CheckoutUrl />
      </div>
      <Recurring/>
       <DynamicCharge/>

    </div>
  );
};

export default Home;
