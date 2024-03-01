import React from 'react'
import Oppcard from '../Semicomponents/Oppcard'
import Data from '../Semicomponents/featureData'


function Uniqueness() {
    console.log(Data)

  return (
    <div className="my-8 py-8 w-4/5 flex justify-center flex-col items-center">
      <div className="text-center w-1/2">
        <p className="font-bold text-3xl my-2">New Opportunities</p>
        <p className="text-sm tracking-wide">
          These are the diffrent ways that you can benefit as a farmer by
          joining Agroghala.
        </p>
      </div>
      <div className="flex gap-8  w-full my-12">
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