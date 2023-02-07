import React, { useState, useEffect } from "react";
import resume from "/resume.pdf";
import { Link } from "react-scroll";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="px-[0.7rem] md:px-[2.5rem] lg:px-[6rem] flex justify-between items-center h-16 bg-[#18181B] shadow-md fixed top-0 left-0 w-full ">
        <div className="cursor-pointer ring-1 ring-[#252529] w-fit h-10 rounded-full flex items-center px-2 bg-[#252529] border border-[#343438] ">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="text-mywhite text-2xl w-full font-bold font-mono "
          >
            d/h
          </Link>
        </div>
        <div className="flex">
          <ul className=" hidden md:flex justify-center items-center space-x-14 w-fit bg-[#252529] h-10 px-7 rounded-[40px] cursor-pointer text-mywhite ring-[#343438] ring-1 mr-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="block hover:text-gold"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="block hover:text-gold"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="block hover:text-gold"
            >
              Contact
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <Bars3Icon className="w-8 cursor-pointer" />
          </div>

          {/* RESUME */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={resume}
            className="text-[#55d4b6] hover:bg-[#252529] cursor-pointer w-fit h-10 rounded-full hidden md:flex items-center px-4 bg-[#18181B] border-2 border-[#397568]"
          >
            {/* Resumé */}
            CV
            <ArrowDownIcon className="w-4 ml-1 font-gold" />
          </a>
        </div>
      </div>
      {/******* Mobile Menu ********/}
      <div
        //blured background layer
        onClick={handleNav}
        className={
          !nav
            ? "fixed top-0 left-0 w-full h-full bg-[#000]/40 backdrop-blur ease-in-out "
            : ""
        }
      >
        <div
          //Mobile navbar
          className={
            !nav
              ? "fixed mx-auto w-[90%] h-fit py-6 inset-x-0 top-8 rounded-2xl shadow-xl bg-[#18181B] ease-in duration-1000"
              : " hidden"
          }
        >
          <XMarkIcon
            onClick={handleNav}
            className="absolute top-2 right-2 w-8 bol cursor-pointer"
          />
          <div>
            <ul
              onClick={handleNav}
              className="space-y-6 text-mywhite grid grid-cols-1 place-items-center w-full h-full"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={handleNav}
                className=" hover:text-gold cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={handleNav}
                className="hover:text-gold cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleNav}
                className="hover:text-gold cursor-pointer"
              >
                Contact
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                className="text-[#55d4b6] hover:text-[#5affd8] cursor-pointer flex text-center"
              >
                CV
                <ArrowDownIcon className="w-4 ml-1 font-gold" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <a class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a> */
}
