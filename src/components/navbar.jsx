import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between py-5 font-medium">
        <img className=" h-32 " src={assets.logo} />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to={"/"} className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/about"} className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/shop"} className="flex flex-col items-center gap-1">
            <p>SHOP</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/blog"} className="flex flex-col items-center gap-1">
            <p>BLOG</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img src={assets.search} className=" cursor-pointer w-5" alt="" />
          <Link to={"/cart"} className=" relative">
            <img src={assets.cart} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          <img
            src={assets.menu}
            alt=""
            className=" w-5 cursor-pointer sm:hidden"
            onClick={() => {
              setVisible(true);
            }}
          />
        </div>
        {/* Sidebar menu for small screen */}
        <div
          className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => {
                setVisible(false);
              }}
              className="flex items-center gap-4 p-3"
            >
              <img
                src={assets.dropdown}
                className="h-4 rotate-180 cursor-pointer"
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className=" py-2 pl-6 border"
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className=" py-2 pl-6 border"
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className=" py-2 pl-6 border"
              to={"/shop"}
            >
              SHOP
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className=" py-2 pl-6 border"
              to={"/blog"}
            >
              BLOG
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
