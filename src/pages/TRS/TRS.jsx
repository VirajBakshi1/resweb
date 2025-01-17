import React, { useState } from '../../../node_modules/react';
import data from '../../data.json';

const PhotoWithInfo = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main card container */}
      <div className="relative h-full bg-black border-l-2 border-t-2 border-blue-500/30">
        {/* Decorative corner pieces */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Image container with overlay */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500
              transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
            transition-opacity duration-300" />
        </div>

        {/* Content section */}
        <div className="p-6">
          <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
            transition-all duration-1000">
            {title}
          </h3>
          <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom accent line with animation */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
            transform transition-transform duration-500 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({ title, content }) => (
  <div className="relative group">
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main content container */}
    <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-8">
      {/* Decorative corner piece */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {title && (
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 
          to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
          transition-all duration-1000">
          {title}
        </h2>
      )}
      <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300 
        leading-relaxed">
        {content}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  </div>
);

const TRS = () => {
  const { introduction: introductionParagraphs, activities } = data.StudentChapter.TRS;

  const columnData = [
    {
      title: "Research & Development",
      image: "/src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png",
      description: "Leading cutting-edge robotics research and development initiatives across India, fostering innovation in industrial applications, atomic energy, and emerging fields."
    },
    {
      title: "Education & Training",
      image: "/src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png",
      description: "Providing comprehensive robotics education and training programs to develop the next generation of robotics engineers and researchers in India."
    },
    {
      title: "Collaboration & Events",
      image: "/src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png",
      description: "Organizing conferences, workshops, and collaborative events to bring together robotics enthusiasts and experts from across the country."
    }
  ];

  const airEventsData = {
    title: activities.airEvents.title,
    content: activities.airEvents.description,
    events: activities.airEvents.events
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
              to-purple-600 blur-lg opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              The Robotics Society
            </span>
          </span>
        </h1>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            {/* Image border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
              to-purple-600 opacity-30 group-hover:opacity-100 transition duration-500 
              blur group-hover:blur-md"></div>
            <div className="relative">
              <img
                src="/src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png"
                alt="The Robotics Society"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">About Us</h2>
            {introductionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-blue-100/70 hover:text-blue-100 
                transition-colors duration-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {columnData.map((column, index) => (
            <PhotoWithInfo 
              key={index}
              image={column.image}
              title={column.title}
              description={column.description}
            />
          ))}
        </div>

        {/* Activities Section */}
        <div className="space-y-8">
          {/* Main Activities */}
          <ContentSection 
            title={activities.title}
            content={activities.description}
          />

          {/* AIR Events */}
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
              to-purple-600 opacity-30 group-hover:opacity-100 transition duration-500 
              blur group-hover:blur-md"></div>
            
            {/* Main content container */}
            <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 
                via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {airEventsData.title}
              </h2>
              <p className="text-blue-100/70 group-hover:text-blue-100 mb-4 
                transition-colors duration-300">
                {airEventsData.content}
              </p>
              <ul className="space-y-2 pl-5">
                {airEventsData.events.map((event, index) => (
                  <li key={index} className="text-blue-100/70 group-hover:text-blue-100 
                    transition-colors duration-300 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 
                      to-blue-500 transform rotate-45"></div>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workshops */}
          <ContentSection 
            title={activities.workshops.title}
            content={activities.workshops.description}
          />
        </div>
      </div>
    </div>
  );
};

export default TRS;