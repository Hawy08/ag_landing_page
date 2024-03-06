import React from "react";
import Header from "../Semicomponents/Navbar";
import man from "../assets/african-american-man-walks-past-field-examining-plantation_255755-8468-removebg-preview.png";
import { Element } from "react-scroll";

function Hero() {
  return (
    <Element className="flex justify-center w-full" name="section1">
      <div className="flex mb-12 md:w-4/5">
        <div className="">
          <div className="flex">
            <div>
              <div className="">
                <div className="mb-4">
                  <Header />
                </div>
                <p className="text-3xl font-bold py:12 md:w-2/3 at-item">
                  We are Naturing Answers to your Agricultural Questions
                </p>
                <p className="py-12 tracking-wide md:text-sm md:w-2/3 at-item">
                  Giving farmers insights through well researched articles,
                  answering their questions real-time and bridging the knowledge
                  gap.{" "}
                </p>
                <button className="p-2 my-8 tracking-wide text-white transition-all duration-500 ease-linear bg-green-500 rounded-md shadow-xl hover:scale-105 at-item">
                  Learn Now
                </button>
              </div>
            </div>
            <div className="w-2/3 ">
              <div className="flex flex-col-reverse h-full bg c-path at-item">
                <div className="w-full h-2/3 ">
                  <img
                    src={man}
                    alt="man reading"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* <div className="w-full bg-red-200 ">
                <p>A farmer</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
