import React from 'react'
import { useDispatch } from "react-redux";
import {
  addToCart,
} from "../utils//cartSlice";
const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addToCart({ ...product, quantity: 1 })); 
    };
  return (
    <div
      key={product.id}
      className="border p-4 rounded-lg bg-white w-full sm:w-60 md:w-72 lg:w-80"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[320px] object-fit mb-2"
      />
      <h2 className="text-md font-semibold line-clamp-2 h-[50px]">
        {product.title}
      </h2>
      <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
      <button
        className="bg-[#3d52a0] text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard