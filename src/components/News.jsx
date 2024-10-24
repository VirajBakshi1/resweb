import React, { useEffect, useRef, useState } from 'react';
import { FaLightbulb, FaCog, FaBullhorn } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaLightbulb className="text-3xl text-blue-500 mr-2" />,
    title: 'Projects',
    items: [
      'Soft Robotics - Jelly Fish',
      'Use of Robot Operating System (ROS)',
      'Spherical Robot',
      'Meta Limbs',
      'Self Balancing Cube',
      'Jumping Robot',
      'Rope Climbing Robot',
      'Wall Climbing Robot',
      'All Terrain Robot',
      'Automatic Floor Cleaning Robot',
      'Electronics Voting Machine'
    ]
  },
  {
    icon: <FaCog className="text-3xl text-blue-500 mr-2" />,
    title: 'Notices',
    items: [
      'National Robocon 2020: Judge\'s Special Award',
      'National Robocon 2019: 2nd Runner-Up in MathWorks Modeling Award',
      'National Robocon 2018: Best Aesthetic Robot Award',
      'ABU Robocon 2017 - Tokyo: Nagase Awards, Best Lovely Robot Award',
      'National Robocon 2017: Winners of National Robocon, Fastest Task Completing Robot Award, Best Idea Award, Winner - Matlab Simulation Award',
      'National Robocon 2016: 1st Runner-up, Fastest Task Completing Robot Award, Best Manual Robot Operator Award'
    ]
  },
  {
    icon: <FaBullhorn className="text-3xl text-blue-500 mr-2" />,
    title: 'Activities',
    items: [
      'Representing COEP in the prestigious National Robotics Competition - Robocon.',
      'Conducting seminars under The Robotics Society (TRS).',
      'Workshops for FY students.',
      'Organizing Robotics events in MindSpark.',
      'Participating in robotics events at IIT B TechFest, MindSpark.',
      'Building mini-projects and B.Tech projects in robotics and automation.',
      'Presenting research papers at IEEE conferences and Patents.'
    ]
  }
];

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);



  const renderCards = () => {
    return cardData.map((card, index) => (
      <div key={index} className="bg-gray-800 border-2 shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          {card.icon}
          <h2 className="text-2xl font-bold text-blue-400">{card.title}</h2>
        </div>
        <ul className="text-gray-100 space-y-2">
          {card.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black py-12 p-4" >
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">NEWS</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {renderCards()}
      </div>
    </div>
  );
};

export default NewsSection;