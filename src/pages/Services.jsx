import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../features/cart/CartSlice";
import Card from "./Card";

const Services = () => {
  const { allCart, isLoading } = useSelector((state) => state.cart);
  const { mode } = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-out-back",
      delay: 200,
    });
  }, []);

  return (
    <section
      id="menu"
      className={
        mode
          ? "w-full h-fit bg-slate-950 px-8 lg:px-20 py-20 flex flex-col justify-center items-center gap-10"
          : "w-full h-fit bg-orange-50 px-12 lg:px-20 py-20 flex flex-col justify-center items-center gap-10 text-black"
      }
    >
      <h1
        data-aos="zoom-in"
        className={
          mode
            ? "text-white font-bold text-3xl text-center"
            : "text-black font-bold text-3xl text-center"
        }
      >
        View Our Tasty <span className="text-green-500 italic">Foods</span>
      </h1>
      <p
        className={
          mode
            ? "text-white font-semibold text-xl text-center mb-10"
            : "font-semibold text-xl text-center text-black mb-10"
        }
      >
        Discover the flavors of our freshly prepared dishes, crafted with
        high-quality ingredients and delivered to you with care.
      </p>

      {/* commit :  sppiner added if isLoading true */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border border-x-cyan-950 animate-spin inline-block w-12 h-12 border-4 rounded-full"
            role="status"
          ></div>
        </div>
      ) : (
        <div
          id="grids"
          className="container mx-auto px-4 flex flex-col space-y-4"
        >
          {allCart.map((item) => (
            <div key={item.id} data-aos="fade-up">
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
