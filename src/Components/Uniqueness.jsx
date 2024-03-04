import React from 'react'
import Oppcard from '../Semicomponents/Oppcard'
import Data from '../Semicomponents/featureData'


function Uniqueness() {
  return (
    <div className="flex flex-col items-center justify-center py-8 my-8 md:w-4/5">
      <div className="w-1/2 text-center">
        <p className="my-2 text-3xl font-bold">New Opportunities</p>
        <p className="text-sm tracking-wide">
          These are the diffrent ways that you can benefit as a farmer by
          joining Agroghala.
        </p>
      </div>
      <div className="w-full gap-8 my-12 md:flex">
        {Data.map((item) => (
          <div key={item.index} className="w-full">
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
  );
}
export default Uniqueness