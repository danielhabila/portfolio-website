import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Contact(props) {
  return (
    // mt-10 md:gap-x-8 md:justify-evenly
    //
    <div className="mt-10 grid grid-col-1 place-items-center lg:flex lg:justify-evenly lg:items-start">
      <div className="mb-10 lg:w-[40%]">
        <p className="font-bold text-2xl ">
          Send me a message, my ravens always find their way home.
        </p>
        <div className="hidden lg:flex lg:space-x-4 lg:items-center">
          <EnvelopeIcon className="w-6" />
          <p>Email: dann.aviates@gmail.com</p>
        </div>
      </div>
      <div className=" border-[#3F3F46] rounded-md space-y-4 max-w-lg">
        <div className=" flex justify-around space-x-2">
          <input
            type="text"
            className="border border-[#3F3F46] w-full bg-transparent h-10 rounded-md pl-4 bg-[#3F3F46]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-[#3F3F46] w-full bg-transparent h-10 rounded-md pl-4 bg-[#3F3F46]"
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          className="border border-[#3F3F46] w-full bg-transparent h-10 rounded-md pl-4 bg-[#3F3F46]"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="border border-[#3F3F46] w-full bg-transparent h-10 rounded-md pl-4 bg-[#3F3F46]"
          placeholder="Subject"
        />
        <input
          type="text"
          className="border border-[#3F3F46] w-full bg-transparent h-40 rounded-md pl-4 bg-[#3F3F46]"
          placeholder="Your Message..."
        />
        <button className="bg-mywhite text-[#000] p-2 w-full rounded-md hover:bg-opacity-80 ">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
