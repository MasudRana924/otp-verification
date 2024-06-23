import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Cart = () => {
  const createAfterAgreement = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/create/agreement/payment",
        { amount: 1, orderId: 1 },
        { withCredentials: true }
      );
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div class="">
      <div class="">
        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              <li class="flex py-6">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Throwback Hip Bag</a>
                      </h3>
                      <p class="ml-4">10.00 TK</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Salmon</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty 1</p>

                    <div class="flex">
                      <button
                        type="button"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li class="flex py-6">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Medium Stuff Satchel</a>
                      </h3>
                      <p class="ml-4">32.00 TK</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Blue</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty 1</p>

                    <div class="flex">
                      <button
                        type="button"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>42.00 TK</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div class="mt-6">
          <button
            class="w-full border h-12 text-white" style={{backgroundColor:'#E2136E'}}
          >
            Checkout
          </button>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <button
              type="button"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
