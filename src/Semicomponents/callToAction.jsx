import React from "react";

function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-8 shadow-md md:w-4/5">
      <p className="text-3xl font-bold text-center ">
        The Future of <span className="text-green-500">Agricultural Information</span> is AgroGhala{" "}
      </p>
      <button className="p-2 my-8 text-white duration-500 ease-linear bg-green-500 rounded-md shadow-md hover:scale-105">Join Us Today</button>
    </div>
  );
}

export default CallToAction;
