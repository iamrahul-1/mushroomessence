import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between py-5 font-medium">
        <img className=" h-32 " src={assets.logo} />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to={"./"} className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1">
            <p>SHOP</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1">
            <p>BLOG</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1">
            <p>CART</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
