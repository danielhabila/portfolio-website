import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import myFace from "../assets/myFace.png";
import Carousel from "./Carousel";

function AvatarCard(props) {
  return (
    <div className=" space-y-4 rounded-xl">
      <div className="md:flex">
        <div className="grid md:w-[50%] gap-3">
          <h1 className="md:hidden font-bold font-mono text-xl">Q/Diary</h1>
          <Carousel />
          <div className="flex items-center">
            <LinkIcon className="w-4 mr-2" /> <a href="">okaviator.com</a>
          </div>
        </div>
        <div className=" md:w-[50%] md:pl-6 space-y-6">
          <h1 className="hidden font-bold md:block font-mono text-xl">
            Q/Diary
          </h1>
          <div>
            <h3>Features Added</h3>
            <p className=" text-greytext">
              that piques your interest, check out the code and contribute if
              you have ideas
            </p>
          </div>
          <div className="">
            <h3>Pending Updates</h3>

            <p className=" text-greytext">
              that piques your interest, check out the code and contribute if
              you have ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
