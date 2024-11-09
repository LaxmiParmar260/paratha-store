import React from "react";
import paratha from "../assets/Aloo_partha-removebg-preview.png";
import playStore from "../assets/playstore.png";
import appStore from "../assets/appstore.png";
import tomatocut from "../assets/tomatocut.png";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Home = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div>
      <div
        className={
          mode ? "bg-slate-900 text-white h-[600px]" : "bg-orange-50 h-[600px]"
        }
      >
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 lg:max-w-7xl mx-auto relative">
          <div className="w-full lg:w-1/2 space-y-6 px-5 lg:px-10 relative">
            <div className="flex gap-2">
              <img
                src={playStore}
                alt="Play Store"
                className=" h-15 md:w-16"
                style={{ width: "25%" }}
              />
              <img
                src={appStore}
                alt="App Store"
                className="lg:w-50 h-15 md:w-16"
                style={{ width: "25%" }}
              />
            </div>

            <h1 className="font-bold text-3xl lg:text-5xl tracking-normal mt-4 lg:mt-0 font-title">
              <span className="text-green-500">Delicious</span> Parathas
              Delivered to Your Doorsteps.
            </h1>
            <p
              className={
                mode
                  ? "text-lg text-gray-300 my-3 font-title "
                  : "text-lg text-black my-3 font-title "
              }
            >
              Discover a world of culinary delights with our food delivery
              service. Enjoy fast, reliable delivery and a wide selection of
              mouthwatering dishes.
            </p>

            <div className="flex flex-col lg:flex-row gap-3  ">
              <button className="bg-green-900 px-3 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all">
                Order Now
              </button>
              <button className="bg-white px-3 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-gray-100 hover:scale-110 transition-all ">
                Contact Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center md:mt-10 sm:mt-10">
            <img
              id="img"
              src={paratha}
              alt="paratha"
              className="absolute mx-auto w-1/2 md:w-1/3 lg:w-1/4 md:top-96 spin lg:top-28"
            />
            <img
              src={tomatocut}
              alt="tomato"
              className="absolute w-32 right-0 -bottom-40"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
