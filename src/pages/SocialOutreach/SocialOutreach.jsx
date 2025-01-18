import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import data from '../../data.json';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative group">
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main carousel container */}
      <div className="relative w-full h-[600px] overflow-hidden border-l-2 border-t-2 
        border-blue-500/30">
        {/* Decorative corner pieces */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Image container */}
        <div className="relative w-full h-full">
          <div className={`absolute w-full h-full transition-opacity duration-500 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            <img
              src={images[currentIndex]}
              alt={`Social Outreach Slide ${currentIndex + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 
              to-black"></div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
              opacity-50 blur rounded-full transition-opacity duration-300 
              group-hover/btn:opacity-100"></div>
            <div className="relative bg-black/30 p-4 rounded-full backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6 text-blue-100" />
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              opacity-50 blur rounded-full transition-opacity duration-300 
              group-hover/btn:opacity-100"></div>
            <div className="relative bg-black/30 p-4 rounded-full backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-blue-100" />
            </div>
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group/indicator"
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-6 bg-gradient-to-r from-cyan-400 to-blue-400'
                    : 'bg-white/50 group-hover/indicator:bg-white/75'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ section }) => {
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
        {/* Decorative corner piece */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Title section */}
        {section.title && (
          <h3 className="text-xl font-bold p-6 pb-4 border-b border-blue-500/30 
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text 
            text-transparent group-hover:bg-gradient-to-l transition-all duration-1000">
            {section.title}
          </h3>
        )}
        
        {/* Content section */}
        <div className="p-6 space-y-4">
          <div className="flex items-center text-blue-100/70 space-x-2 
            group-hover:text-blue-100 transition-colors duration-300">
            <Calendar className="text-cyan-400" size={18} />
            <span>{section.date}</span>
          </div>
          
          {section.location && (
            <div className="flex items-center text-blue-100/70 space-x-2 
              group-hover:text-blue-100 transition-colors duration-300">
              <MapPin className="text-blue-400" size={18} />
              <span>{section.location}</span>
            </div>
          )}
          
          <p className="text-blue-100/70 group-hover:text-blue-100 
            transition-colors duration-300">{section.content}</p>

          {section.facilitators && (
            <div className="mt-6">
              <div className="flex items-center text-blue-100/70 space-x-2 mb-2 
                group-hover:text-blue-100 transition-colors duration-300">
                <Users className="text-purple-400" size={18} />
                <span className="font-semibold">Facilitators:</span>
              </div>
              <ul className="list-none space-y-1">
                {section.facilitators.split('\n').map((facilitator, index) => (
                  <li key={index} className="flex items-center space-x-2 pl-6 
                    text-blue-100/70 group-hover:text-blue-100 
                    transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 
                      to-purple-500 transform rotate-45"></div>
                    <span>{facilitator}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SocialOutreach = () => {
  const { imageArray, sections } = data.Organising['Social Outreach'];

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              SOCIAL OUTREACH
            </span>
          </span>
        </h1>

        {/* Image Carousel */}
        <div className="mb-12">
          <ImageCarousel images={imageArray} />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <EventCard key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialOutreach;