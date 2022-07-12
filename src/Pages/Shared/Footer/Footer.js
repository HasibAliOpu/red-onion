import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/icons/logo/logo.png";
const Footer = () => {
  return (
    <footer className="bg-slate-700">
      <div className="text-white flex justify-evenly p-20">
        <span>
          <Link to="/">
            <img src={logo} alt="restaurant logo" className="w-1/3" />
          </Link>
        </span>
        <span>
          <h2 className="hover:text-red-600 ease-in-out duration-500">
            About Online Food
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500 py-2">
            Read Our Blogs
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500 pb-2">
            Sign up to deliver
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500">
            Add your Restaurant
          </h2>
        </span>
        <span>
          <h2 className="hover:text-red-600 ease-in-out duration-500">
            Get Help
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500 py-2">
            Read FAQ
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500 pb-2">
            View All Cities
          </h2>
          <h2 className="hover:text-red-600 ease-in-out duration-500">
            Restaurants near me
          </h2>
        </span>
      </div>
      <div className="flex justify-between mx-14 pb-5">
        <span className="ml-14 text-slate-500">
          <h1>Copyright @ {new Date().getFullYear()} Online Food</h1>
        </span>
        <span className="text-white flex gap-5">
          <h1>Privacy Policy.</h1>
          <h1>Terms of Use</h1>
          <h1>Pricing</h1>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
