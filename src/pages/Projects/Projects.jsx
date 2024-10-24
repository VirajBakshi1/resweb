import React from 'react';
import Card from '../../components/GlassCard'; // Correct import for the Card component

const Projects = () => {
  const cardData = [
    {
      title: 'Project 1',
      description: 'Description of project 1...',
      points: ['Point 1', 'Point 2', 'Point 3'],
      image:'src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png', // Use require for local images
    },
    {
      title: 'Project 2',
      description: 'Description of project 2...',
      points: ['Point A', 'Point B', 'Point C'],
      image: 'src/assets/robocon/Screenshot 2024-10-21 at 12.55.57 PM.png', // Use require for local images
    },
    {
      title: 'Project 2',
      description: 'Description of project 2...',
      points: ['Point A', 'Point B', 'Point C'],
      image: 'src/assets/robocon/Screenshot 2024-10-21 at 12.55.57 PM.png', // Use require for local images
    },
    // Add more project objects as needed
  ];

  return (
    <div className="min-h-screen p-4 bg-black py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-6xl font-bold text-blue-300 text-center mb-8">PROJECTS</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} /> // Pass card props directly
          ))}
        </div>
      </div>
      <h1 className="text-6xl font-bold mt-8 text-blue-300 text-center mb-8">ADVANCED ROBOTS</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} /> // Pass card props directly
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;