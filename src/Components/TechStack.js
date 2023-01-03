import React from "react";
import myFace from "../assets/myFace.png";

function TechStack() {
  return (
    <div className="grid place-content-center ">
      <div className="border border-[#3F3F46] mb-6 p-6 rounded-xl space-y-4">
        <p className="text-gray-400">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Tailwind</li>
          <li>Mongodb</li>
        </ul>
      </div>
    </div>
  );
}

export default TechStack;
