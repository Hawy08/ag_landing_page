import React from "react";

function Oppcard({ logo, uniqueFeature, description, style }) {
  return (
    <div className="flex-col h-full p-4 my-8 transition-all duration-500 ease-linear rounded-md shadow-md hover:scale-105" style={style}>
      <div className="w-1/3 h-24 mx-2">
        <img src={logo} alt="timing" className="object-contain w-full h-full" />
      </div>
      <h2 className="p-4 font-bold text-md">{uniqueFeature}</h2>
      <p className="p-4 text-sm">{description}</p>
    </div>
  );
}

export default Oppcard;
