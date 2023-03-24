import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Contact() {
  return (
    <div
      className="py-10 h-[80vh] space-y-4 flex flex-col justify-center items-center text-center"
      id="contact"
    >
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Contact</h1>
      <p className="text-[#A1A1AA] ">
        Send me a message, my pigeons always find their way home :){" "}
      </p>
      <a
        href="mailto:dann.aviates@gmail.com"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-mywhite text-[#000] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-mywhite/70 focus:outline-none "
      >
        Get In Touch
        <EnvelopeIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Contact;
