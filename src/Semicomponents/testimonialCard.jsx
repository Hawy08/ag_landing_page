import React from "react";

const WithStyles = ({ description, image }) => {
  return (
    <div className="flex flex-col max-w-sm mx-4 overflow-hidden rounded shadow-lg">
      <div className="flex px-4 ">
        <div className="w-12 h-12">
          <img
            src={image}
            alt={description}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="mx-4 font-bold text-green-500">
          <p>Alexis Maccalister</p>
          <p>Farmer, Juja</p>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <p className="text-sm">&quot;{description}&quot;</p>
      </div>
    </div>
  );
};

export default WithStyles;
