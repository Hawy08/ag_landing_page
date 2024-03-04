// import React from "react";
import background from "../assets/259.jpg";
import background1 from "../assets/gettyimages-538890850-612x612.jpg";
import background2 from "../assets/close-up-fresh-green-plant-against-sky_1048944-14869647.jpg";

const BlogsFeaturesCard = () => {
  const menuItem = [
    {
      text: "Reliability",
      subtitle: "You can always bank on us",
      image: background,
      description: "We got you covered with up-todate information on the field of agriculture.",
    },
    {
      text: "Accuracy",
      subtitle: "Information that is on point",
      image: background1,
      description:
        "Whatever you consume from agroghala is never wrong.",
    },

    {
      text: "Productivity",
      subtitle: "The best of knowledge is with us",
      image: background2,
      description:
        "We have the information you need to get the best from your activity.",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto  py-12 grid md:grid-cols-3 gap-6  mb-12 ">
      {/* Card */}

      {menuItem.map(({ text, subtitle, image, description }, index) => {
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-md max-h-80"
          >
            {/* Overlay */}
            <div className="absolute flex flex-col p-6 text-left text-white rounded-sm linear_g min-h-80">
              <p className="px-2 text-sm font-bold text-green-500 underline uppercase underline-offset-4 decoration-white">
                {text}{" "}
              </p>
              <p className="w-2/3 px-2 mt-8 font-semibold">{subtitle}</p>
              <p className="w-2/3 px-2 my-4 text-sm">
               
               {description}
              </p>
              <button className="w-2/3 px-5 py-1 mx-2 text-green-500 duration-500 bg-white border-white border-none rounded-sm hover:border-green-500 hover:border-4 hover:text-white hover:bg-transparent">
                Take a Look
              </button>
            </div>

            <img className="object-cover w-full max-h-80" src={image} alt="/" />
          </div>
        );
      })}
    </div>
  );
};

export default BlogsFeaturesCard;
