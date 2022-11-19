import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function EmailCard(props) {
  return (
    <div className="grid place-content-center ">
      <div className="border border-[#3F3F46] my-16 p-6 rounded-xl space-y-4">
        <h3>
          <span>
            <EnvelopeIcon className="w-6 inline mr-2" />
          </span>
          Stay up to date
        </h3>
        <p className="text-gray-400">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
        <div className=" flex justify-around space-x-6">
          <input
            type="text"
            className="border border-[#3F3F46] w-full bg-transparent h-10 rounded-xl pl-4"
            placeholder="Email Address"
          />
          <button className="bg-[#3F3F46] p-2 w-28 rounded-xl">Join</button>
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
