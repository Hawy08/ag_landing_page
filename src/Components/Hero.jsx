import React from "react";
import Header from "../Semicomponents/Navbar";
import man from "../assets/african-american-man-walks-past-field-examining-plantation_255755-8468-removebg-preview.png"

function Hero() {
  return (
    <div className=" w-4/5 flex ">
      <div className="">
        <div className="flex">
          <div>
            <div className="">
              <div className="mb-4">
                <Header />
              </div>
              <p className="text-3xl font-bold py-12 w-2/3 at-item">
                We are Naturing Answers to your Agricultural Questions
              </p>
              <p className="py-8 tracking-wide w-2/3 at-item">
                Giving farmers insights through well researched articles,
                answering their questions real-time and bridging the knowledge
                gap.{" "}
              </p>
              <button className="bg-green-500 shadow-xl p-2 rounded-md my-8 tracking-wide text-white hover:scale-105 transition-all duration-500 ease-linear at-item">
                Learn Now
              </button>
            </div>
          </div>
          <div className=" w-2/3">
            <div className="bg h-full c-path flex flex-col-reverse at-item">
              <div className="h-2/3 w-full ">
                <img
                  src={man}
                  alt="man reading"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* <div className="w-full  bg-red-200 ">
                <p>A farmer</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
