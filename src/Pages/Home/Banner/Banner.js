import React from "react";
import banner from "../../../images/banner/bannerbackground.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="relative">
      <img className="w-screen" src={banner} alt="" />
      <h1 className="banner-title font-serif text-slate-700">
        Best Food Waiting for your Belly
      </h1>
      <form className="input-field flex bg-white border border-slate-300 rounded-3xl">
        <input
          class=" placeholder:italic placeholder:text-slate-400 block bg-white 
           py-2 pl-9 pr-3 shadow-sm rounded-3xl
         focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search your Food..."
          type="text"
          name="search"
        />
        <button className="btn font-medium text-white">Search</button>
      </form>
    </div>
  );
};

export default Banner;
