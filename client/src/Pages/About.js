import React from "react";
import myFace from "../assets/myFace.png";
import jsImg from "../assets/js-logo.png";
import reactImg from "../assets/react-logo.png";
import nodeImg from "../assets/node-js.png";
import tailwindImg from "../assets/tailwind-css.png";
import mongoImg from "../assets/tailwind-css.png";

function About() {
  const technologies = [
    { name: "Javascript (ES6+)", img: jsImg },
    { name: "React", img: reactImg },
    { name: "Node", img: nodeImg },
    { name: "Tailwind CSS", img: tailwindImg },
    // { name: "MongoDB", img: mongoImg },
    // { name: "Node", img: reactImg },
  ];
  return (
    <div className=" mt-10 md:flex md:flex-row-reverse md:justify-between md:gap-x-8 mb-10">
      <div>
        <img
          src={myFace}
          alt=""
          className=" h-72 md:h-80 lg:h-96 rounded-2xl order-last mx-auto mb-10 "
        />
      </div>

      <div className="space-y-6 md:w-[50%]">
        <h1 className="text-3xl md:text-4xl wwlg:text-5xl font-bold ">
          Welcome to my corner of the internet corner.
        </h1>
        <p className="text-[#A1A1AA]">
          I’m Daniel, I love building intuitive and visually appealing web
          applications. I am a self-taught web developer with 1 year+ experience
          working with technologies such as vanilla JavaScript, React, Node, and
          Tailwind CSS. I have a background in aerospace engineering, but my
          true passion lies in technology and programming. In my free time, I
          enjoy reading, flying and discussing new developments in the tech
          industry.
        </p>

        <p className="text-[#A1A1AA]">
          Here are the technologies I’ve been working with recently:
        </p>
        {/* Skills */}
        <div className="grid grid-cols-2 gap-6">
          {technologies.map((tech) => {
            return (
              <div className="flex items-center space-x-4">
                <div className="p-[0.3rem] bg-[#27272A] w-fit rounded-full border border-[#343438] ">
                  <img
                    className="rounded-full ring-0 h-6 w-6"
                    src={tech.img}
                    alt=""
                  />
                </div>
                <p>{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
