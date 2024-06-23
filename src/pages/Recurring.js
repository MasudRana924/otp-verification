import React from 'react';
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import axios from "axios";
const plans = [
    { planId: "1", planName: " সাবস্ক্রিপশন", duration: "monthly", amount: 10 },
    { planId: "2", planName: " সাবস্ক্রিপশন", duration: "month", amount: 100 },
    {
      planId: "2",
      planName: " সাবস্ক্রিপশন",
      duration: "annually",
      amount: 1000,
    },
  ];
const Recurring = () => {
    const colorArray = ["#F7D2F2 ", "#E2136E", "#F7D2F2 "];
  const textColorArray = ["#F00B96", "white", "#F00B96"];
  const subscriptionCreate = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/create/subscription",
        { amount: 10, frequency: "DAILY", orderId: 1 },
        { withCredentials: true }
      );
      console.log(data);
      window.location.href = data.redirectURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };
    return (
        <div className='mt-24 w-3/4 mx-auto border p-4'>
            <p className="text-start text-2xl text-gray-900">Recurring </p>
            <div className="mt-12 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {plans.map((plan, index) => (
          <div
            key={plan.planId}
            className="w-full border bg-white  p-8"
          >
            <h2 className="text-xl text-gray-900  text-center font-semibold mb-2">
              {plan.planName}
            </h2>
            <h2 className="text-4xl text-center plan-text-color font-semibold mt-8 mb-2">
              ট {plan.amount}
            </h2>
            <p className="text-xl text-center plan-text-color font-semibold mt-8 mb-2">
              {plan.duration === "monthly" && "১ মাস মেয়াদ"}
              {plan.duration === "annually" && "১ বছর মেয়াদ "}
              {plan.duration === "six-month" && "৬ মাস মেয়াদ "}
            </p>

            <button
              key={index}
              className="w-full mx-auto plan-card mt-8 h-12 text-md  font-semibold "
              style={{
                backgroundColor: colorArray[index % colorArray.length],
                color: textColorArray[index % textColorArray.length],
              }}
              onClick={subscriptionCreate}
            >
              সাবস্ক্রিপশন নিন
            </button>
            <div className="mt-8">
              <div>
                <div className="flex items-center gap-4">
                  <IoMdCheckmarkCircle className="plan-content-text text-2xl"></IoMdCheckmarkCircle>
                  <p className="text-start font-medium text-gray-900">
                    {plan.duration === "monthly"
                      ? "১"
                      : plan.duration === "annually"
                      ? "১২"
                      : "৬"}
                    মাসের জন্য সব কন্টেন্টের এ্যাক্সেস
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Recurring;