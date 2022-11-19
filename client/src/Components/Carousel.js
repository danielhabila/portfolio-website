import React, { useState } from "react";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";

function Carousel() {
  return (
    <div className="max-w-l my-16">
      <div id="carouselBox" className="carousel carousel-center gap-6 ">
        <div className="carousel-item object-cover h-96">
          <img src={one} alt="" className="rounded-xl" />
        </div>
        <div className="carousel-item h-96">
          <img src={two} alt="" className="rounded-xl" />
        </div>
        <div className="carousel-item h-96">
          <img src={three} alt="" className="rounded-xl" />
        </div>
        <div className="carousel-item h-96">
          <img src={four} alt="" className="rounded-xl" />
        </div>
        <div className="carousel-item h-96">
          <img src={five} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
