import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast} from "react-toastify";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../utils/cartSlice";

const CartCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(decrementQuantity(product.id));
    }
  };

  const handleRemove = () => {
    toast.success("Item removed from Cart");
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="border p-4 rounded-lg bg-white w-[100%] flex ">
      <div className="w-[120px] h-[120px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-[120px] h-[120px] object-fit mb-2 p-3 border-black border"
        />
      </div>
      <div className="w-[100%] flex items-center justify-between flex-col h-[120px] py-2 px-3 md:px-6">
        <div className="flex w-[100%] justify-between pr-3">
          <h2 className="text-md font-semibold line-clamp-2 h-[50px]">
            {product.title}
          </h2>
          <p className="text-black font-bold">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex w-[100%] justify-between">
          <div className="flex items-center mt-2">
            <button
              onClick={handleDecrement}
              className="bg-yellow-200 px-1 py-2 md:p-2 rounded-l"
            >
              -
            </button>
            <span className="px-1 py-2 md:px-4">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-green-200 px-1 py-2 md:p-2 rounded-r"
            >
              +
            </button>
          </div>
          <button
            onClick={handleRemove}
            className="mt-4 bg-red-500 text-white px-2 md:p-2 md:px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
