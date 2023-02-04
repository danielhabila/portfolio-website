import React, { useState } from "react";
import furnitureImg from "../assets/WebsiteScreenshots/furniture.png";
import lightsImg from "../assets/WebsiteScreenshots/furniture.png";

function Carousel() {
  return (
    <div className="carousel w-fit rounded-xl">
      <div className="carousel-item w-full">
        <img src={furnitureImg} className="w-full" />
      </div>
      <div className="carousel-item w-full">
        <img src={lightsImg} className="w-full" />
      </div>
    </div>
  );
}

export default Carousel;
