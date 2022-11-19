import React from "react";
import AvatarCard from "../Components/AvatarCard";
import TechStack from "../Components/TechStack";

function Projects(props) {
  return (
    <div className="flex-col justify-center space-y-8 mt-10">
      <div className="md:w-[70%] lg:w-[60%] space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-mywhite">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-gray-400 text-greytext leading-7 ">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 pb-20">
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  );
}

export default Projects;
