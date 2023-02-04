import React from "react";
import myFace from "../assets/myFace.png";
import jsImg from "../assets/js-logo.png";
import reactImg from "../assets/react-logo.png";
import nodeImg from "../assets/node-js.png";
import tailwindImg from "../assets/tailwind-css.png";
import mongoImg from "../assets/mongodb.png";
import gitImg from "../assets/git-logo.png";
import gitHubImg from "../assets/github-logo.png";
import wpImg from "../assets/wp.png";

function About() {
  const technologies = [
    { name: "Javascript (ES6+)", img: jsImg },
    { name: "React", img: reactImg },
    { name: "Node.js", img: nodeImg },
    { name: "Tailwind CSS", img: tailwindImg },
    { name: "MongoDB", img: mongoImg },
    { name: "Git", img: gitImg },
    { name: "Github", img: gitHubImg },
    { name: "Wordpress", img: wpImg },
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
            About me
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold ">
            Welcome to my corner of the internet corner.
          </h1>
          <p className="text-[#A1A1AA]">
            I’m Daniel, I love building intuitive and visually appealing web
            applications. I am a self-taught web developer with 1 year+
            experience working with technologies such as JavaScript, React,
            Node, and Tailwind CSS. I have a background in aerospace
            engineering, but my true passion lies in technology and programming.
            In my free time, I enjoy reading, flying and chatting about new
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
                  <div className="p-[0.3rem] bg-[#27272A] w-fit rounded-full">
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
          {/* Download CV */}
          {/* <a
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm bg-mywhite text-[#000] font-medium group mt-6 w-fit"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <span>
              <ArrowDownIcon className="w-4" />
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default About;
