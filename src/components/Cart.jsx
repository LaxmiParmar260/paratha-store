import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../assets/empty-image-removebg-preview.png";
import {
  getCart,
  updateQuantity,
  toggleExtraSauce,
  removeItem,
} from "../features/cart/CartSlice";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const extraSauceCost = 20;

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // Handle quantity changes
  const handleQuantityChange = (id, amount) => {
    const item = products.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, (item.quantity || 1) + amount);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleExtraSauceToggle = (id) => {
    dispatch(toggleExtraSauce(id));
  };

  const handleApplyPromo = () => {
    setDiscount(promoCode === "DISCOUNT10" ? 10 : 0);
  };

  const totalItems = products.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
  const subtotal = products.reduce((acc, item) => {
    const itemTotal =
      item.price * (item.quantity || 1) +
      (item.extraSauce ? extraSauceCost * (item.quantity || 1) : 0);
    return acc + itemTotal;
  }, 0);
  const totalCost = subtotal - discount;

  return (
    <div className="container mx-auto py-8 px-4 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Shopping Cart</h1>
        <Link to="/home#services" className="text-indigo-600">
          <div className="flex items-center">
            <FaArrowLeft /> &nbsp; Continue Shopping
          </div>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src={emptyCart}
            alt="Empty Cart"
            className="w-full max-w-xs mb-4"
          />
          <p className="text-lg font-semibold text-gray-500">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{totalItems} Items</h2>
            {products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center py-4 border-b gap-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <button
                    className="text-sm text-red-500 mt-1"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={item.extraSauce || false}
                    onChange={() => handleExtraSauceToggle(item.id)}
                  />
                  <span className="text-gray-500">
                    Extra Sauce (₹{extraSauceCost})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <span className="text-gray-700">
                    ₹
                    {item.price * (item.quantity || 1) +
                      (item.extraSauce
                        ? extraSauceCost * (item.quantity || 1)
                        : 0)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between py-2">
              <span>Items</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span className="text-green-600">Upto 5 km - Free</span>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="promo" className="text-gray-600 mb-1">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="p-2 border rounded"
              />
              <button
                onClick={handleApplyPromo}
                className="text-sm text-indigo-600 mt-2"
              >
                Apply
              </button>
              {promoCode && discount === 0 && (
                <p className="text-red-500 text-sm mt-1">
                  Enter valid Promocode
                </p>
              )}
            </div>

            <div className="flex justify-between py-2 mt-4">
              <span>Discount:</span>
              <span>₹{discount}</span>
            </div>

            <div className="flex justify-between font-semibold py-2 border-t mt-4">
              <span>Total Cost</span>
              <span>₹{totalCost}</span>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 mt-6 rounded-lg hover:bg-indigo-700">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
