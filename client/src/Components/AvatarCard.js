import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import nine from "../assets/nine.png";

function AvatarCard(props) {
  return (
    <div className="space-y-4 hover:bg-[#202023] p-4 rounded-xl">
      <div className="p-2 bg-[#27272A] w-fit rounded-full border border-[#343438]">
        <img className="rounded-full ring ring-0 h-9 w-9 " src={nine} alt="" />
      </div>
      <div>
        <h5 className="font-mono">Q/Diary</h5>
        <p className="mt-4 text-greytext">
          that piques your interest, check out the code and contribute if you
          have ideas
        </p>
        <div className="flex items-center space-x-3 mt-6">
          <LinkIcon className="w-4" /> <a href="">okaviator.com</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
