import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4 w-[75%] md:w-[50%] mx-auto text-sm">
      {cartItems.length !== 0 ? (
        <>
          <div className="flex justify-between border-b-2 border-black pb-2 mb-5 px-2">
            <span className="font-semibold text-black">Product</span>
            <span className="font-semibold text-black">Total</span>
          </div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between m-3">
                <span className="text-gray-900">{item.title}</span>
                <span className="text-gray-900">
                  {"$ " + (item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-black" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{"$ " + totalCost.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSummary;
