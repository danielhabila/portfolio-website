import React from "react";
import { useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <footer className="w-full h-28 mt-[100vh]] border-t border-[#52525a] py-5 ">
      <div className="">
        <ul className="grid grid-flow-col place-content-center space-x-6 text-mywhite">
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

        <p className="grid grid-flow-col place-content-center mt-10 text-[#52525a] text-sm">
          © 2022 Daniel Habila. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
