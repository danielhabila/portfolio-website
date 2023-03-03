import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import projectData from "../constant/projectData";

function Projects() {
  return (
    <div
      className="pt-10 pb-20 h-full flex flex-col justify-center space-y-8"
      id="projects"
    >
      <div className="md:w-[70%] lg:w-[60%] space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
          Projects
        </h1>
        <p className="text-gray-400 text-greytext leading-7 ">
          Here are projects I've worked on recently, I update them regularly.
          I’ve worked on a number of projects over the past year, but these are
          the ones that I’m focused on at the moment.
        </p>
      </div>

      {/* Mapping projects */}
      {projectData.map((wip) => {
        return (
          <div>
            <div className="md:flex space-y-6">
              <h1 className="md:hidden font-bold font-mono text-2xl">
                <a target="_blank" rel="noreferrer" href={wip.website}>
                  <div className="flex items-center gap-2">
                    {wip.name}
                    <span>
                      <LinkIcon className="w-4" />
                    </span>
                  </div>
                </a>
              </h1>
              {/* Carousel */}
              <div className=" mx-auto md:w-[46%] gap-3">
                <div className="carousel w-fit h-fit rounded-xl">
                  {wip.img.map((image, index) => {
                    return (
                      <div key={index} className="carousel-item w-full ">
                        <img src={image} className="w-full" alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className="flex space-x-3 justify-center text-greytext mt-2">
                  <ChevronLeftIcon className="w-4" /> <span>Swipe</span>
                  <ChevronRightIcon className="w-4" />
                </div>
              </div>
              <div className=" md:w-[50%] md:pl-6 space-y-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={wip.website}
                  className="hidden font-bold md:block font-mono text-2xl "
                >
                  <div className="flex items-center gap-2">
                    {wip.name}
                    <span>
                      <LinkIcon className="w-4" />
                    </span>
                  </div>
                </a>
                <p className=" text-greytext">{wip.description}</p>

                {/* Shipped Features bullet list */}
                <div>
                  <h3>Shipped Features</h3>
                  <div
                    className="text-greytext ml-5"
                    dangerouslySetInnerHTML={{ __html: wip.shipped }}
                  />
                </div>
                {/* Work in Progress bullet list */}
                <div className="">
                  {wip.wipList && wip.wipList !== "" && (
                    <h3>Work in Progress</h3>
                  )}
                  <div
                    className="text-greytext ml-5"
                    dangerouslySetInnerHTML={{ __html: wip.wipList }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
