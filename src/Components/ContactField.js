import React from "react";

const ContactField = () => {
  return (
    <div>
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
};

export default ContactField;
