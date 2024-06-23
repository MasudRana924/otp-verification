import React from "react";
import Shipping from "./Shipping";
import Contact from "./Contact";
import Cart from "./Cart";

const CheckoutUrl = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-between mt-24 border p-4">
      <div>
        <Contact/>
        <Shipping/>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  );
};

export default CheckoutUrl;
