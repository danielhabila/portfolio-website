import React from "react";
import { GrTwitter, GrGithub, GrInstagram, GrYoutube } from "react-icons/gr";

function Socials(props) {
  return (
    <div className="flex space-x-8 my-8 cursor-pointer">
      <GrTwitter size={20} color="#A1A1AA" />
      <GrGithub size={20} color="#A1A1AA" />
      <GrInstagram className="mt-[1px]" size={19} color="#A1A1AA" />
      <GrYoutube size={21} color="#A1A1AA" />
    </div>
  );
}

export default Socials;
