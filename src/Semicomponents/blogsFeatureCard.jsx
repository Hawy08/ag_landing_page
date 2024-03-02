import React from "react";
import background from "../assets/259.jpg"
import background1 from "../assets/gettyimages-538890850-612x612.jpg"
import background2 from "../assets/close-up-fresh-green-plant-against-sky_1048944-14869647.jpg"

const BlogsFeaturesCard = () => {
  const menuItem = [
    {
      text: "Accesibility",
      subtitle: "Get to hear from Fellow growers",
      image:
        background,
      description:
        "Getting to hear from other farmers help to enrich you with information amd get to know the farmer gatherings that are next to you in the coming weeks.",
    },
    {
      text: "Availability",
      subtitle: "Get to hear from Fellow growers",
      image:background1,
      description:
        "Getting to hear from other farmers help to enrich you with information amd get to know the farmer gatherings that are next to you in the coming weeks.",
    },

    {
      text: "Productivity",
      subtitle: "Get to hear from Fellow growers",
      image:
        background2,
      description:
        "Getting to hear from other farmers help to enrich you with information amd get to know the farmer gatherings that are next to you in the coming weeks.",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto  py-12 grid md:grid-cols-3 gap-6  mb-12 ">
      {/* Card */}

      {menuItem.map(({ text, subtitle, image }, index) => {
        return (
          <div
            key={index}
            className="relative max-h-80 rounded-md overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute  linear_g rounded-sm text-white flex flex-col p-6 text-left min-h-80">
              <p className="font-bold uppercase underline underline-offset-4 decoration-white text-green-500 text-sm px-2">
                {text}{" "}
              </p>
              <p className="px-2 mt-8 font-semibold w-2/3">{subtitle}</p>
              <p className="px-2 text-sm my-4 w-2/3">
                Getting to hear from other farmers help to enrich you with
                information amd get to know.
              </p>
              <button className="border rounded-sm px-5 py-1 border-white bg-white hover:bg-black/50 hover:text-white border-none mx-2 w-2/3 text-green-500 ">
                Take a Look
              </button>
            </div>

            <img className="max-h-80 w-full object-cover" src={image} alt="/" />
          </div>
        );
      })}
    </div>
  );
};

export default BlogsFeaturesCard;
