import React from "react";

const Contact = () => {
  return (
    <div>
        <p className="text-start text-gray-900 text-xl  mb-4">Contact Information</p>
      <div className="flex gap-2 justify-between">
        <div className="">
          <label
            for="name"
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="name"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Name"
              />
            </div>
          </div>
        </div>
        <div className="">
          <label
            for="name"
            className="text-start block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="name"
                className="border outline-none h-10 w-full pl-4"
                placeholder="email"
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
            Phone
          </label>
          <div className="mt-2">
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="name"
                className="border outline-none h-10 w-full pl-4"
                placeholder="Phone"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
