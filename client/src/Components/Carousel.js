import React, { useState } from "react";
import nodeImg from "../assets/node-js.png";
import reactImg from "../assets/react-logo.png";

function Carousel() {
  return (
    <div className="carousel w-fit rounded-xl">
      <div className="carousel-item w-full">
        <img src={nodeImg} className="w-full" />
      </div>
      <div className="carousel-item w-full">
        <img src={reactImg} className="w-full" />
      </div>
    </div>
  );
}

export default Carousel;
