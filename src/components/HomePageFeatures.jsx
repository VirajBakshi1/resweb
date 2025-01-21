import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const FeatureSection = ({ title, description, image, buttonText, link, reverse = false }) => {
  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-black to-gray-950">
      <div className={`container mx-auto px-6 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed">
            {description}
          </p>
          
          {buttonText && (
            <Link to={link} className="relative group inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
                to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000">
              </div>
              <button className="relative px-6 py-2 bg-black m-auto  rounded-lg border border-blue-500/30 
                text-blue-100 group-hover:text-white transition duration-200">
                {buttonText}
              </button>
            </Link>
          )}
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            {/* Image glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
              to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000">
            </div>
            
            {/* Actual image */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
  const features = data.Home?.Features?.sections || [];

  if (!features.length) return null;

  return (
    <div className="bg-black">
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.id || index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          buttonText={feature.buttonText}
          link={feature.link}
          reverse={feature.reverse}
        />
      ))}
    </div>
  );
};

export default HomepageFeatures;