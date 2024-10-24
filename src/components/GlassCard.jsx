import React, { useState } from 'react';

const Card = ({ title, description, points, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!title || !image) {
    console.error("Missing required card data", { title, image });
    return null; // Avoid rendering if the required data is missing
  }

  return (
    <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-90 border border-gray-200" style={{ backdropFilter: 'blur(20px)' }}>
      <div className="max-w-md mx-auto">
        <img src={image} alt={title} className="w-full h-56 object-contain rounded-3xl mx-auto" />

        <div>
          <h1 className="px-3 text-2xl mt-5 font-bold text-center mx-auto text-blue-300 rounded-full">{title}</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className={`py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7 ${isExpanded ? '' : 'hidden'}`}>
            <p>{description}</p>
            <ul className="list-disc space-y-2">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;