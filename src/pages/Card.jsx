import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart/CartSlice";

const Card = ({ item }) => {
  // Handle add to cart
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white text-black py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-slate-800 md:h-30">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col justify-center items-center gap-4"
      >
        <img
          src={item.img}
          alt="dish image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="w-full flex flex-col justify-center items-center gap-4 px-6">
          <h1 className="text-black font-bold text-xl lg:text-2xl">
            {item.name}
          </h1>
          <p className="text-black font-semibold text-center text-sm lg:text-lg">
            {item.description}
          </p>
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-2xl font-bold text-black">₹{item.price}</span>
            <button
              onClick={() => handleClick(item)}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
