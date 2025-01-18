import React from 'react';
import ImageGrid from '../../components/ImageGrid';
import data from '../../data.json';

const EventCard = ({ title, year, description, details, images, isCurrentYear }) => (
  <div className="relative group">
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main card container */}
    <div className="relative bg-gradient-to-b from-gray-900 to-black border-l-2 border-t-2 
      border-blue-500/30 p-8">
      {/* Decorative corner pieces */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
          -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Current year indicator */}
      {isCurrentYear && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 
            opacity-75 blur"></div>
          <span className="relative text-cyan-200 font-bold">CURRENT YEAR</span>
        </div>
      )}

      {/* Title with animated gradient */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
        transition-all duration-1000 mb-6">
        {title} ({year})
      </h2>

      {/* Description with glow effect */}
      <div className="relative mb-8">
        <p className="text-blue-100/90 leading-relaxed group-hover:text-blue-100 
          transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Image grid with hover effects */}
      <div className="relative group-hover:transform group-hover:scale-[1.01] 
        transition-all duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
          to-purple-600 opacity-30 blur transition-all duration-500"></div>
        <div className="relative">
          <ImageGrid images={images} />
        </div>
      </div>

      {/* Event details section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 
          bg-clip-text text-transparent">
          Event Details
        </h3>
        <p className="text-gray-300/90 group-hover:text-gray-300 transition-colors duration-300">
          {details}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  </div>
);

const Robocon = () => {
  const roboconEvents = data.ROBOCON.RoboconData;
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-black p-4 py-12">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center 
        [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Glowing orb decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full 
          blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full 
          blur-3xl opacity-20 animate-pulse" />

        {/* Main title with animated gradient */}
        <h1 className="text-7xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              ROBOCON
            </span>
          </span>
        </h1>

        {/* Event cards */}
        <div className="max-w-6xl mx-auto space-y-12">
          {roboconEvents.map((robocon, index) => (
            <EventCard
              key={index}
              title={robocon.title}
              year={robocon.year}
              description={robocon.description}
              details={robocon.details}
              images={robocon.images}
              isCurrentYear={robocon.year === currentYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Robocon;