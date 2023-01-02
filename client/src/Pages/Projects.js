import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import furniture from "../assets/modernLiving/furniture.png";
import lights from "../assets/modernLiving/lights.png";
import dining from "../assets/modernLiving/dining.png";
import details from "../assets/modernLiving/details.png";
import productPage from "../assets/modernLiving/product-page.png";
import cart from "../assets/modernLiving/cart.png";
import wallArt from "../assets/modernLiving/wallArt.png";
import crudPage from "../assets/qdiary/crud-page.png";
import quotePage from "../assets/qdiary/quote-page.png";
import jobsPage from "../assets/okAviator/jobs-page.png";

const wips = [
  {
    name: "Modern/Living",
    img: [furniture, wallArt, lights, dining, details, productPage, cart],
    description: "This is an e-commerce site inspired by the CB2 website.",
    website: "https://okaviator.com",
    shipped: `
    <ul style="list-style-type: disc">
      <li>Adding snap scroll to home page</li>
      <li>User Login and Authentication</li>
      <li>Adding data and functionality to Dining, Wall Art, Lighting </li>
    </ul>
  `,
    wipList: `
    <ul style="list-style-type: disc">
      <li>Adding Stripe payment</li>
      <li>User Login and Authentication</li>
      <li>Adding data and functionality to Dining, Wall Art, Lighting </li>
    </ul>
  `,
  },
  {
    name: "Ok/Aviator",
    img: [jobsPage],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic beatae fugit nobis fugiat magnam placeat veniam quas eum delectus consequatur",
    shipped: "",
    wipList: "",
    website: "https://okaviator.com",
  },
  {
    name: "Q/Diary",
    img: [quotePage, crudPage],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic beatae fugit nobis fugiat magnam placeat veniam quas eum delectus consequatur",
    shipped: "",
    wipList: "",
    website: "https://qdiary.info",
  },
];

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
          Here are the projects I am currently working on and constantly
          updating. I’ve worked on a good number of little projects over the
          past year but these are the ones that I’m focused on at the moment.
        </p>
      </div>

      {/* Mapping projects */}
      {wips.map((wip) => {
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
                  {wip.img.map((image) => {
                    return (
                      <div className="carousel-item w-full ">
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
                  <h3>Work in Progress</h3>
                  <div
                    className="text-greytext ml-4"
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
