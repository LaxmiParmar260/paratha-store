import React from "react";

const Card = ({ item, handleAddToCart }) => {
  // Handle add to cart
  const handleClick = () => {
    handleAddToCart(item);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-slate-900 py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col justify-center items-center gap-4"
      >
        <img
          src={item.img} // Ensure you pass an image for the card
          alt="dish image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="w-full flex flex-col justify-center items-center gap-4 px-6">
          <h1 className="text-white font-bold text-xl lg:text-2xl">
            {item.name}
          </h1>
          <p className="text-white font-semibold text-center text-sm lg:text-lg">
            {item.description}
          </p>
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold text-white ">
              ${item.price}
            </span>
            <button
              onClick={handleClick}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-4 py-2.5 text-center"
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
