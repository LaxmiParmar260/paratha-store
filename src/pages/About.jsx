import React from "react";
import paratha from "../assets/Aloo_partha-removebg-preview.png";
import { useSelector } from "react-redux";

const About = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div
      className={mode ? "bg-slate-900 text-white h-[600px]" : "bg-white"}
      id="About"
    >
      <h1 className="font-title font-bold text-[30px] text-center">
        Taste the Best from Our Kitchen
      </h1>
      <p className="text-center text-[20px]">
        Delicious Meals Delivered to You
      </p>
      <section className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[400px] p-4">
        <div className="left w-full md:w-1/2 h-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={paratha}
            alt="paratha"
            className="object-contain h-60 w-60 md:h-full md:w-full"
          />
        </div>
        <div className="right w-full md:w-2/3 md:p-6">
          <h1 className="font-title text-2xl md:text-3xl mb-2 md:mb-4">
            Indulge in Delicious Parathas
          </h1>
          <p className="font-body text-base md:text-lg font-title">
            Savor the rich flavors of our flaky, golden parathas—perfectly crisp
            on the outside and soft within. Each paratha is filled with spiced
            potatoes, paneer, or fresh veggies, bringing authentic taste and
            heartiness to every bite. Enjoy them with yogurt, pickles, or
            curries for a truly satisfying meal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
