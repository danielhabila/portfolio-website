import React from "react";
import nine from "../assets/nine.png";
import Socials from "../Components/Socials";
import EmailCard from "../Components/EmailCard";

function About() {
  return (
    <div className=" mt-10 md:flex md:gap-x-8">
      <img
        src={nine}
        alt=""
        className=" h-72 md:h-80 lg:h-96 rounded-2xl order-last mx-auto mb-10 "
      />

      <div className="space-y-6 md:w-[50%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          Welcome to my corner of the internet corner.
        </h1>
        <p className="text-[#A1A1AA]">
          You'll catch me talking/writing about tech, entrepreneurship, books,
          and generic life advice that I've found helpful. These days, I spend
          most of my time coding, flying around Vancouver, reading, or creating
          fun videos.
        </p>
        <p className="text-[#A1A1AA] ">
          I got an undergraduate degree in Aerospace Engineering (which I don't
          use), and a Commercial Pilot License (Yes! Seriously..) Ohh! I also
          like making internet friends, so if you're reading this, you can say
          hi to me on Twitter or the Gram. -Thanks for reading!
        </p>
        <p className="text-[#A1A1AA]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit
          facilis vero ipsam accusamus dolorem rerum, aliquid eius reprehenderit
          quibusdam libero facere amet, nisi assumenda incidunt error
          dignissimos dicta recusandae. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Necessitatibus illum voluptatum iusto expedita odit,
          ducimus, quam accusantium quos ipsa assumenda nulla ex facilis dolorem
          facere. Incidunt accusamus quaerat dolores ea!
        </p>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default About;

// import {
//   GrTwitter,
//   GrGithub,
//   GrInstagram,
//   GrYoutube,
//   GrMail,
// } from "react-icons/gr";

// <div className="flex-col space-y-5 my-8 cursor-pointer">
// <div className="flex items-center space-x-4">
//   <GrTwitter size={20} color="#A1A1AA" />
//   <p className="text-[#a1a1aa]">Lorem ipsum dolor</p>
// </div>
// <div className="flex items-center space-x-4">
//   <GrGithub size={20} color="#A1A1AA" />
//   <p className="text-[#a1a1aa]">Lorem ipsum dolor</p>
// </div>
// <div className="flex items-center space-x-4">
//   <GrInstagram className="mt-[1px]" size={19} color="#A1A1AA" />
//   <p className="text-[#a1a1aa]">Lorem ipsum dolor</p>
// </div>
// <div className="flex items-center space-x-4">
//   <GrYoutube size={21} color="#A1A1AA" />
//   <p className="text-[#a1a1aa]">Lorem ipsum dolor</p>
// </div>

// <div className="flex items-center space-x-4">
//   <GrMail size={20} color="#A1A1AA" />
//   <p className="text-[#a1a1aa]">dann.aviates@gmail.com</p>
// </div>
// </div>
