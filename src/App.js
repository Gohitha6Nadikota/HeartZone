import "./App.css";
import React, { useEffect, useState } from "react";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BrowserRouter as Router,Link, Routes, Route} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [data, setData] = useState([]);
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error in fetch: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="w-full bg-[#b2c4f0] min-h-screen">
        <div className="w-full bg-[#3D52A0] h-[9vh] flex items-center shadow-xl">
          <div className="flex w-full justify-between items-center px-4 md:px-8">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-4xl text-white">
                <IoHeartCircleSharp />
              </h1>
              <h1 className="text-lg md:text-2xl text-white font-semibold ml-2">
                Zone
              </h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link to="/">
                <p className="text-sm md:text-lg text-white">Home</p>
              </Link>
              <Link to="/cart">
                <div className="relative flex items-center">
                  <p className="text-lg md:text-xl text-white">
                    <FaCartShopping />
                  </p>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-4 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/login">
                <p className="text-sm md:text-lg text-white">Login</p>
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-wrap justify-center gap-4 py-4 px-2">
                {data.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
