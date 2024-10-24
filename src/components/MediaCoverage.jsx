import React from "react";

export function MediaCoverage({ articles }) {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-4xl text-center font-bold mb-12">Media Coverage</h1>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-2 gap-8">
        {articles.map(({ image, title }, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            
            {/* Article Image */}
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain"
            />

            {/* Article Title */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-100">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}