import React from 'react';
import ImageGrid from '../../components/ImageGrid';

const Mindspark = () => {
  const imageArray = [
    '/src/assets/robocon/Screenshot 2024-10-21 at 12.53.54 PM.png', // Replace with actual images related to Robocon
    'src/assets/robocon/Screenshot 2024-10-21 at 12.55.57 PM.png',
    'src/assets/robocon/Screenshot 2024-10-21 at 12.56.52 PM.png',
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
        <h1 className="text-6xl text-blue-300 font-bold mb-6 text-center">MINDSPARK</h1>

      <div className="max-w-6xl bg-gray-800 p-8 mx-auto rounded-lg border-2">
        <p className="mb-4">
          Robocon is an International Competition organized by ABU (Asia-Pacific Broadcasting Union). This competition is based on various themes in which two robots, one manual and one autonomous, are used to complete a certain set of tasks. The contestants in the competition are undergraduate students who need significant expertise in the fields of Mechanical, Electronics, and Software Engineering to accomplish the given tasks.
        </p>

        <ImageGrid images={imageArray} />

        <h2 className="text-2xl font-bold mt-8 mb-4">ABU ROBOCON THEME 2022 Delhi, INDIA</h2>
        <p className="mb-4">
          Lagori is a traditional and one of the most played ancient games that originate in the southern part of India. It was one of the most popular games in India around the 1990s. One can find the game history in Bhagavata Purana, a Hindu religious text written around 5000 years ago. It mentions that Lord Krishna played this game with his friends. The game is between two teams (Team 1: “Seeker” and Team 2: “Hitter”) and the game starts by throwing a ball by the seeker to break a stone tower called “Lagori” (see figure below). While the seekers try to pile up the stones again, the hitter throws balls to interrupt them.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">National DD-Robocon 2022, IIT Delhi</h2>
        <p className="mb-4">
          IIT Delhi is hosting Doordarshan (DD) Robocon 2022 on July 17, 2022 (Sunday). The winning team of DD-Robocon 2022, which follows the same game rules as of ABU Robocon 2022, will represent India.
        </p>

        <p className="mb-4">
          The event is aimed to encourage the scientific temperament of undergraduate engineering students of the country. It gives a platform to the students to innovate, to create, and to work in a team comprising of students belonging to various streams of engineering. On the other hand, at the international level, it gives an opportunity to the students to interact with their counterparts belonging to various participating countries. Further, it strengthens the spirit of sportsmanship, brotherhood, and showcases unity and cultural exchange among the countries of the Asia-Pacific Region.
        </p>

        <p className="mb-4">
          IIT Delhi hosts DD-Robocon 2022 on behalf of Doordarshan (DD).
        </p>
      </div>
    </div>
  );
};

export default Mindspark;