import React from 'react';
import bkashLogo from '../assets/bkashLogo.png'
const Shipping = () => {
    return (
        <div className='mt-12'>
            <p className="text-start text-gray-900 text-xl  mb-4">Shipping Information</p>
            <div>
          <div className="flex gap-2 justify-between">
            <div className="">
              <label
                for="name"
                className="text-start block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    className="border outline-none h-10 w-full pl-4"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label
                for="name"
                className="text-start block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    className="border outline-none h-10 w-full pl-4"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-between mt-4">
            <div className="">
              <label
                for="name"
                className="text-start block text-sm font-medium leading-6 text-gray-900"
              >
                Postal Code
              </label>
              <div className="mt-2">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    className="border outline-none h-10 w-full pl-4"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8'>
          <p className="text-start text-gray-900 text-xl  mb-4">Payment Method</p>
          <div className='flex gap-4'>
             <div className='border w-3/4 h-24 shadow-sm shadow-pink-500' style={{border:'1px solid #E2136E'}}>
                <img src={bkashLogo} alt="" className="w-3/4 h-16 mx-auto mt-4"/>
             </div>
             <div className=' w-3/4 h-24'>
             </div>
          </div>
          </div>
        </div>
        </div>
    );
};

export default Shipping;