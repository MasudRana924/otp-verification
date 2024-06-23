import React from "react";
import { useState } from "react";
import axios from "axios";
const DynamicCharge = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [payerReference, setpayerReference] = useState("");
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8088/api/bkash/payment/create",
        { name,type:"fees", phone, amount, payerReference, orderId: 1 },
        { withCredentials: true }
      );
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="mt-24 w-3/4 mx-auto border p-4">
        <p className="text-start text-2xl text-gray-900 mb-8">Dynamic Charging </p>
      <div className="w-2/4">
        <div className=" mt-4">
          <label
            for=""
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                autocomplete="name"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Student Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <label
            for=""
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Student Id
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                autocomplete="payerReference"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Student ID"
                onChange={(e) => setpayerReference(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            for=""
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                autocomplete="phone"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            for=""
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Tuition Fees
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name="amount"
                id="amount"
                autocomplete="amount"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Tuition Fees"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button className="h-12 w-full border mt-4 text-white " style={{backgroundColor:'#E2136E'}}
          onClick={pay}>Pay Fees</button>
        </div>
      </div>
    </div>
  );
};

export default DynamicCharge;
