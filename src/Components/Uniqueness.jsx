import React from "react";
import Oppcard from "../Semicomponents/Oppcard";
import Data from "../Semicomponents/featureData";
import { Element } from "react-scroll";

function Uniqueness() {
  return (
    <Element className="flex justify-center w-full" name="section2">
      <div className="flex flex-col items-center justify-center py-8 my-8 md:w-4/5">
        <div className="text-center md:w-1/2">
          <p className="my-2 text-3xl font-bold">New Opportunities</p>
          <p className="text-sm tracking-wide px-8">
            These are the diffrent ways that you can benefit as a farmer by
            joining Agroghala.
          </p>
        </div>
        <div className="gap-8 mx-12 my-12 md:w-full md:flex">
          {Data.map((item) => (
            <div key={item.index} className="md:w-full">
              <Oppcard
                logo={item.cardLogo}
                uniqueFeature={item.uniqueFeature}
                description={item.description}
                style={item.style}
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
export default Uniqueness;
