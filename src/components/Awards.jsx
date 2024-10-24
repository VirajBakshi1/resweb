import React from "react";

export function Awards({ awards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-black text-white">
      {awards.map(({ image, name, year, position }, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg border-2 shadow-lg p-6 text-center"
        >
          {/* Award Image */}
          <img
            src={image}
            alt={`${name} award`}
            className="h-50 w-full object-contain rounded-md mb-4"
          />
          
          {/* Award Details */}
          <h3 className="text-xl font-bold text-gray-100">{name}</h3>
          <p className="text-gray-400">{year}</p>
          <p className="text-lg font-semibold text-yellow-500 mt-2">
            {position}
          </p>
        </div>
      ))}
    </div>
  );
}