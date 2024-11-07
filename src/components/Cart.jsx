import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getCart } from "../features/cart/CartSlice";

const Cart = () => {
  // Initial state for products in the cart

  const { allCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { itemID } = useParams();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const [cart, setCart] = useState([
    { id: 1, name: "Veg Paratha", price: 50, quantity: 1, extraSauce: false },
    { id: 2, name: "Aalo Paratha", price: 50, quantity: 1, extraSauce: false },
  ]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Functions to handle quantity changes
  const handleQuantityChange = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Function to handle extra sauce toggle
  const handleExtraSauceToggle = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, extraSauce: !item.extraSauce } : item
      )
    );
  };

  // Function to handle promo code application
  const handleApplyPromo = () => {
    // Example condition for promo code
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  // Calculate total
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalCost = subtotal - discount;

  return (
    <div>
      <div className="container mx-auto py-8 px-8">
        {/* {/ Header /} */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <Link to="/Service" className="text-indigo-600">
            Continue Shopping
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* {/ Product List /} */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{totalItems} Items</h2>

            {cart.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img
                  // src={`https://via.placeholder.com/80`}
                  src="./more images/aloo_paratha.jpg"
                  alt={item.name}
                  className="w-20 h-20 rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <button
                    className="text-sm text-red-500 mt-1"
                    onClick={() =>
                      setCart(cart.filter((prod) => prod.id !== item.id))
                    }
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={item.extraSauce}
                    onChange={() => handleExtraSauceToggle(item.id)}
                  />
                  <span className="text-gray-500">Extra Sauce</span>
                </div>
                <div className="flex items-center ml-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <div className="text-right ml-4">
                  <span className="text-gray-700">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* {/ Order Summary /} */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
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

            <div className="flex justify-between py-2">
              <span>Shipping:</span>
              <span>₹0</span>
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
      </div>
    </div>
  );
};

export default Cart;
