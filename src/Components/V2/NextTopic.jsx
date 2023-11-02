import React from "react";

const NextTopic = () => {
  return (
    <div className=" px-4 lg:px-10 py-10">
      <div className="grid grid-cols-2">
        <div className="flex justify-start">
          <h1 className="text-lg font-bold text-cyan-300">
            Next Topic : Something
          </h1>
        </div>
        <div className=" flex justify-end">
        <div className="w-10 h-10">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#67E8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        </div>
        </div>
      </div>
    </div>
  );
};

export default NextTopic;
