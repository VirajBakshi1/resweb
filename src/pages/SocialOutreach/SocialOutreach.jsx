import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import data from '../../data.json';

const EventCard = ({ section, isImageLeft }) => {
  return (
    <div className="flex flex-col md:flex-row bg-black border-l-2 border-t-2 border-blue-500/30 relative overflow-hidden">
      {isImageLeft ? (
        <>
          {/* Image on the left */}
          <div className="md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Text on the right */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            {section.title && (
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            )}
            <div className="flex items-center text-blue-100/70 space-x-2 mb-2">
              <Calendar className="text-cyan-400" size={18} />
              <span>{section.date}</span>
            </div>
            {section.location && (
              <div className="flex items-center text-blue-100/70 space-x-2 mb-2">
                <MapPin className="text-blue-400" size={18} />
                <span>{section.location}</span>
              </div>
            )}
            <ul className="text-blue-100 mb-4 list-disc pl-5">
              {section.content.split('\n').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {section.facilitators && (
              <div>
                <div className="flex items-center text-blue-100/70 space-x-2 mb-1">
                  <Users className="text-purple-400" size={18} />
                  <span className="font-semibold">Facilitators:</span>
                </div>
                <ul className="list-disc pl-6 text-blue-100/70">
                  {section.facilitators.split('\n').map((facilitator, index) => (
                    <li key={index}>{facilitator}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Text on the left */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            {section.title && (
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            )}
            <div className="flex items-center text-blue-100/70 space-x-2 mb-2">
              <Calendar className="text-cyan-400" size={18} />
              <span>{section.date}</span>
            </div>
            {section.location && (
              <div className="flex items-center text-blue-100/70 space-x-2 mb-2">
                <MapPin className="text-blue-400" size={18} />
                <span>{section.location}</span>
              </div>
            )}
            <ul className="text-blue-100 mb-4 list-disc pl-5">
              {section.content.split('\n').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {section.facilitators && (
              <div>
                <div className="flex items-center text-blue-100/70 space-x-2 mb-1">
                  <Users className="text-purple-400" size={18} />
                  <span className="font-semibold">Facilitators:</span>
                </div>
                <ul className="list-disc pl-6 text-blue-100/70">
                  {section.facilitators.split('\n').map((facilitator, index) => (
                    <li key={index}>{facilitator}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Image on the right */}
          <div className="md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full h-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

const SocialOutreach = () => {
  const { sections } = data.Organising['Social Outreach'];

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0 opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SOCIAL OUTREACH
            </span>
          </span>
        </h1>

        {/* Render each section in a two-column layout (text and image) */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <EventCard key={index} section={section} isImageLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialOutreach;