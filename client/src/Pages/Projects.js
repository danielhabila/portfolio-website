import React from "react";
import AvatarCard from "../Components/AvatarCard";
import TechStack from "../Components/TechStack";

function Projects(props) {
  const wip = [
    {
      name: "Modern Living",
      img: "",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic beatae fugit nobis fugiat magnam placeat veniam quas eum delectus consequatur",
      added: "",
      toAdd: "",
      website: "https://okaviator.com",
    },
    {
      name: "Ok Aviator",
      img: "",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic beatae fugit nobis fugiat magnam placeat veniam quas eum delectus consequatur",
      added: "",
      toAdd: "",
      website: "https://okaviator.com",
    },
    {
      name: "Q-Diary",
      img: "",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic beatae fugit nobis fugiat magnam placeat veniam quas eum delectus consequatur",
      added: "",
      toAdd: "",
      website: "",
    },
  ];

  return (
    <div className="flex-col justify-center space-y-8 mt-10">
      <div className="md:w-[70%] lg:w-[60%] space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-mywhite">
          Work in Progress
        </h1>
        <p className="text-gray-400 text-greytext leading-7 ">
          Here are the projects I am currently working on and constantly
          updating. I’ve worked on a good number of little projects over the
          past year but these are the ones that I’m focused on at the moment.
        </p>
      </div>
      {/* <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 pb-20"> */}
      <div className="pb-20">
        <AvatarCard />
      </div>
      <div></div>
    </div>
  );
}

export default Projects;
