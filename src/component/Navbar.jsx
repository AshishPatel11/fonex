import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-900 px-24 py-2 font-poppins">
        <div className="">
          <img className="h-24 object-cover" src={logo} />
        </div>
        <div className="flex items-center justify-between text-white w-2/6 text-lg font-medium">
          <NavLink
            className={"hover:text-orange-500 transition duration-300 group"}
            to={"/"}
          >
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
          </NavLink>
          <NavLink
            className={"hover:text-orange-500 transition duration-300 group"}
            to={"/products"}
          >
            Products
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
          </NavLink>
          <NavLink
            className={"hover:text-orange-500 transition duration-300 group"}
            to={"/about-us"}
          >
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
