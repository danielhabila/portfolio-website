import React from "react";
import { GrTwitter, GrGithub, GrInstagram, GrYoutube } from "react-icons/gr";

function Footer(props) {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="w-full h-22 border-t border-[#52525a] py-3 ">
      <div className="flex justify-center space-x-6 cursor-pointer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/danielhabila_"
        >
          <GrTwitter size={20} color="#A1A1AA" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/danielhabila"
        >
          <GrGithub size={20} color="#A1A1AA" />
        </a>
      </div>

      <p className="grid grid-flow-col place-content-center mt-8 text-[#52525a] text-sm">
        © {year} Daniel Habila. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
