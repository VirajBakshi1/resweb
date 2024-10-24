import React from 'react';
import ImageGrid from '../../components/ImageGrid';

// Data for robotics competitions
const competitionsData = [
  {
    year: 2024,
    title: 'ABU ROBOCON THEME 2024',
    description: `Robocon is an International Competition organized by ABU (Asia-Pacific Broadcasting Union). This competition is based on various themes in which two robots, one manual and one autonomous, are used to complete a certain set of tasks. The contestants in the competition are undergraduate students who need significant expertise in the fields of Mechanical, Electronics, and Software Engineering to accomplish the given tasks.`,
    details: `This year's theme focuses on innovative designs that challenge teams to push the limits of robotics and engineering.`,
    images: [
      "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
  "https://www.ripplesnigeria.com/wp-content/uploads/2024/08/images-23-1.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3wcmPATKyfJuapccpoU1UlCE4yiwhb1aYD-_Rqd4d7Ltulc6rVbb9_cx7hNVTgw409o&usqp=CAU",
    ]
  },
  {
    year: 2023,
    title: 'FIRST Robotics Competition 2023',
    description: `The FIRST Robotics Competition is an international high school robotics competition that combines the excitement of sport with the rigors of science and technology. Teams of students build and program robots to compete in a series of challenges.`,
    details: `In 2023, teams designed robots to compete in a game called 'Charged Up', where they must score points by moving game pieces into designated areas.`,
    images: [
      "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      "https://www.ripplesnigeria.com/wp-content/uploads/2024/08/images-23-1.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3wcmPATKyfJuapccpoU1UlCE4yiwhb1aYD-_Rqd4d7Ltulc6rVbb9_cx7hNVTgw409o&usqp=CAU",
    ]
  },
  {
    year: 2022,
    title: 'RoboCup 2022',
    description: `RoboCup is an international robotics competition that aims to promote robotics and AI research. The competition features various leagues, including soccer, rescue, and industrial robots.`,
    details: `In 2022, RoboCup hosted its first hybrid competition in Bordeaux, France, where teams participated both in-person and virtually.`,
    images: [
      "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
  "https://www.ripplesnigeria.com/wp-content/uploads/2024/08/images-23-1.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3wcmPATKyfJuapccpoU1UlCE4yiwhb1aYD-_Rqd4d7Ltulc6rVbb9_cx7hNVTgw409o&usqp=CAU",
  
    ]
  },
  {
    year: 2021,
    title: 'VEX Robotics Competition 2021',
    description: `The VEX Robotics Competition provides students with an exciting platform to learn and apply STEM principles. Teams design and build robots to compete in games against other teams.`,
    details: `The 2021 competition introduced new challenges focused on collaboration and strategy in a virtual format due to pandemic restrictions.`,
    images: [
      '/src/assets/vex_2021/Screenshot_2021-10-21_at_12.53.54_PM.png',
      '/src/assets/vex_2021/Screenshot_2021-10-21_at_12.55.57_PM.png',
      '/src/assets/vex_2021/Screenshot_2021-10-21_at_12.56.52_PM.png',
    ]
  },
  // Add more competitions as needed
];

const Competitions = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <h1 className="text-5xl text-blue-300 font-bold mb-6 text-center">COMPETITIONS</h1>

      {competitionsData.map((competition, index) => (
        <div key={index} className="max-w-6xl bg-gray-800 p-8 mx-auto rounded-lg border-2 mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            {competition.title} ({competition.year})
          </h2>
          <p className="mb-4">{competition.description}</p>
          
          <ImageGrid images={competition.images} />
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Event Details</h3>
          <p className="mb-4">{competition.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Competitions;