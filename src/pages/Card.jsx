import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart/CartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    dispatch(addCart({ ...item, quantity }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto sm:max-w-2xl lg:max-w-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4">
        <div
          className="flex items-start space-x-4 md:w-2/3 cursor-pointer"
          onClick={handleClick}
        >
          <input
            type="checkbox"
            className="w-5 h-5 mt-1 text-green-600 form-checkbox"
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500">₹{item.price}</p>
            <p className="mt-1 text-gray-600 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:w-1/3 space-y-2 md:space-y-0 md:flex-row md:space-x-4">
          <img
            src={item.img}
            alt={item.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
