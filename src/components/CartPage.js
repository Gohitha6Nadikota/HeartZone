import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
} from "../utils/cartSlice";
import CartCard from "./CartCard";
import { toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleClearCart = () => {
    toast.success("Cart Cleared");
    dispatch(clearCart());
  };

  return (
    <div className="w-[100%] flex flex-col">
      <div className="w-[100%] flex justify-between my-2">
        <h1 className="text-2xl font-semibold text-[#3d52a0] m-2">
          Shopping Cart
        </h1>
        <button
          onClick={handleClearCart}
          className="bg-[#3d52a0] text-white p-2 mr-2 rounded-lg shadow-lg"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-4 px-2">
        {cartItems.map((item) => (
          <CartCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
