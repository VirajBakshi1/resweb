import React from 'react';
import CarouselFadeExample from '../../components/Carousel';

const AboutUs = () => {
  return (
    <div>
    <CarouselFadeExample />
    <div className="min-h-screen bg-black  items-center justify-center p-8">
    <h1 className="text-6xl font-bold text-blue-300 mb-4 text-center">About Us</h1>
      <div className="bg-gray-800 border-2 rounded-lg shadow-lg p-8 max-w-8xl mx-auto text-white">
      
        <p className="mb-4">
          The Robot Study Circle (RSC) is an undergraduate organization at College of Engineering, Pune (COEP). Robot Study Circle is a community of students guided by faculty members, industrial experts & alumni, who find pleasure in Robotics. It is a platform for like-minded people to come together, share knowledge, and strive to create futuristic automated machines.
        </p>
        <p className="mb-4">
          The objective of Robot Study Circle is to build international-quality robots that will prove to be useful in a variety of environments, especially in industries.
        </p>
        
        <h2 className="text-3xl font-semibold text-[#21d8ff] mt-8 mb-4 text-center">How can you join?</h2>
        <p className="mb-4">The only requirements are:</p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>You must be an undergraduate student from COEP.</li>
          <li>You must have a genuine interest in robotics.</li>
          <li>You should clear the induction process conducted by Team RSC.</li>
        </ul>
        <p>
          Even if you don’t know much about robotics, to begin with, you’ll learn a lot throughout the year. To be fully active, you need to work on some projects and interact with the more experienced members.
        </p>
      </div>
    </div>
    </div>

  );
};

export default AboutUs;