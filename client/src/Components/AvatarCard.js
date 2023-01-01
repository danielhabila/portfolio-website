import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import myFace from "../assets/myFace.png";
import Carousel from "./Carousel";

function AvatarCard(props) {
  return (
    <div className=" space-y-4 rounded-xl">
      <div className="md:flex">
        <h1 className="md:hidden font-bold font-mono text-2xl">Q/Diary</h1>
        <div className=" mx-auto w-[80%] md:w-[36%] gap-3">
          <Carousel />
        </div>
        <div className=" md:w-[50%] md:pl-6 space-y-6">
          <h1 className="hidden font-bold md:block font-mono text-2xl">
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
            <h3>Work in Progress</h3>

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
