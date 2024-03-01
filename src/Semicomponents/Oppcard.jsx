import React from "react";

function Oppcard({ logo, uniqueFeature, description, style }) {
  return (
    <div className="shadow-md hover:scale-105 transition-all duration-500 ease-linear flex-col p-4 rounded-md " style={style}>
      <div className="w-1/3 h-24 mx-2">
        <img src={logo} alt="timing" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-md font-bold p-4">{uniqueFeature}</h2>
      <p className="p-4 text-sm">{description}</p>
    </div>
  );
}

export default Oppcard;
