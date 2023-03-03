import React from "react";
import myFace from "../assets/myFace.png";
import jsImg from "../assets/icons/js-logo.png";
import reactImg from "../assets/icons/react-logo.png";
import nodeImg from "../assets/icons/node-js.png";
import tailwindImg from "../assets/icons/tailwindcss.png";
import mongoImg from "../assets/icons/mongodb.png";
import gitHubImg from "../assets/icons/github-logo.png";
import nginxImg from "../assets/icons/nginx.png";
import cloudinaryLogo from "../assets/icons/cloudinaryLogo.png";

function About() {
  const technologies = [
    { name: "Javascript (ES6+)", img: jsImg },
    { name: "React", img: reactImg },
    { name: "Node.js", img: nodeImg },
    { name: "Tailwind CSS", img: tailwindImg },
    { name: "MongoDB", img: mongoImg },
    { name: "Github", img: gitHubImg },
    { name: "Nginx", img: nginxImg },
    { name: "Cloudinary", img: cloudinaryLogo },
  ];
  return (
    <div className="py-20 lg:pt-10 lg:pb-20">
      <div
        className=" h-fit md:h-screen md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-x-8"
        id="about"
      >
        <h1 className="md:hidden text-3xl font-bold md:text-4xl lg:text-5xl">
          About
        </h1>
        <div>
          <img
            src={myFace}
            alt=""
            className=" h-72 md:h-80 lg:h-96 rounded-2xl order-last mx-auto mb-10 "
          />
        </div>

        <div className="space-y-6 md:w-[50%]">
          <h1 className="hidden md:block md:font-bold md:text-4xl lg:text-5xl">
            About
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold ">
            Welcome to my corner of the internet corner.
          </h1>
          <p className="text-[#A1A1AA]">
            I am Daniel, and I love building intuitive and visually appealing
            web applications. As a self-taught web developer, I have been
            writing code for two years and working with technologies such as
            JavaScript, React, Node, and Tailwind CSS. While my background is in
            aerospace engineering, my true passion lies in tech and programming.
            In my free time, I enjoy reading, flying, and discussing new
            developments in the tech industry.
          </p>

          <p className="text-[#A1A1AA]">
            Here are the technologies I’ve been working with:
          </p>
          {/* Skills */}
          <div className="grid grid-cols-2 gap-6">
            {technologies.map((tech) => {
              return (
                <div className="flex items-center space-x-4">
                  <div className="p-[0.3rem] bg-[#27272A] w-fit rounded-full ring-1 ring-[#343438]">
                    <img
                      className="rounded-full  h-6 w-6"
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
    </div>
  );
}

export default About;
