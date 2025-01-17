import React from '../../../node_modules/react';

const ImageGrid = ({ images }) => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;