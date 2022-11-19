import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center h-24">
        <div className="cursor-pointer ring-1 ring-[#252529] w-fit h-11 rounded-full flex items-center p-2 bg-[#252529] border border-[#343438] ">
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="text-mywhite text-2xl w-full font-bold font-mono "
          >
            d/h
          </h1>
        </div>
        <ul className=" hidden md:flex justify-center items-center space-x-8 w-fit bg-[#252529] h-11 px-7 rounded-[40px] cursor-pointer text-mywhite">
          <li
            onClick={() => {
              navigate("/about");
            }}
            className="hover:text-gold"
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/projects");
            }}
            className="hover:text-gold"
          >
            Projects
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
            className="hover:text-gold"
          >
            Contact
          </li>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          <Bars3Icon className="w-8 cursor-pointer" />
        </div>
      </div>
      {/******* Mobile Menu ********/}
      <div
        //blured background layer
        onClick={handleNav}
        className={
          !nav
            ? "fixed top-0 left-0 w-full h-full bg-[#000000]/40 backdrop-blur ease-in-out "
            : ""
        }
      >
        <div
          //Mobile navbar
          className={
            !nav
              ? "fixed mx-auto w-[90%] h-[20%] inset-x-0 top-8 rounded-2xl shadow-xl bg-[#18181B] ease-in duration-1000"
              : " hidden"
          }
        >
          <XMarkIcon
            onClick={handleNav}
            className="absolute top-2 right-2 w-8 bol cursor-pointer"
          />
          <div className="flex justify-center place-items-center text-center w-full h-full ">
            <ul onClick={handleNav} className="space-y-6 text-mywhite">
              <li
                onClick={() => {
                  navigate("/about");
                }}
                className=" hover:text-gold cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => {
                  navigate("/projects");
                }}
                className="hover:text-gold cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => {
                  navigate("/contact");
                }}
                className="hover:text-gold cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
