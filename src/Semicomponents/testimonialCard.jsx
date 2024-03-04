import React from "react";

const WithStyles = ({ description, image, name, occupation, area }) => {
  return (
    <div className="flex flex-col h-full max-w-sm mx-4 overflow-hidden rounded shadow-lg">
      <div className="flex px-4 ">
        <div className="w-12 h-12">
          <img
            src={image}
            alt={description}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="mx-4 text-green-500">
          <p className="font-semibold">{name}</p>
          <p className="text-xs">
            {occupation}, {area}
          </p>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <p className="text-sm">&quot;{description}&quot;</p>
      </div>
    </div>
  );
};

export default WithStyles;
