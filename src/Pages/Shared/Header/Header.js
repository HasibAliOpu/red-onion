import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../../images/icons/logo/logo2.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="">
      <div className="flex justify-between mx-20 py-3">
        <span>
          <img width={"186px"} src={WebLogo} alt="company logo" />
        </span>
        <span className="flex gap-5 items-center font-medium">
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link to="/login">Login</Link>
          <Link className="signup-btn px-5 py-2  text-white" to="/signup">
            Sign Up
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;