import React from 'react';

const sponsorsData = [
  {
    name: 'JANATICS PNEUMATIC',
    logo: 'src/assets/sponsors/janatics.png', // Replace with the actual path to the logo
    website: 'https://www.janatics.com', // Replace with the actual website URL
  },
  {
    name: 'PEPPERL + FUCHS',
    logo: 'src/assets/sponsors/pepperl.png', // Replace with the actual path to the logo
    website: 'https://www.pepperl-fuchs.com', // Replace with the actual website URL
  },
  {
    name: 'ROBOT TECHNOLOGIES',
    logo: 'src/assets/sponsors/Robotechnologies.png', // Replace with the actual path to the logo
    website: 'https://www.robottechnologies.com', // Replace with the actual website URL
  },
  {
    name: 'SIEMENS',
    logo: 'src/assets/sponsors/simens.png', // Replace with the actual path to the logo
    website: 'https://www.siemens.com', // Replace with the actual website URL
  },
];

const affiliates = [
  {
    name: 'JANATICS PNEUMATIC',
    logo: 'src/assets/sponsors/janatics.png', // Replace with the actual path to the logo
    website: 'https://www.janatics.com', // Replace with the actual website URL
  },
  {
    name: 'PEPPERL + FUCHS',
    logo: 'src/assets/sponsors/pepperl.png', // Replace with the actual path to the logo
    website: 'https://www.pepperl-fuchs.com', // Replace with the actual website URL
  },
  {
    name: 'ROBOT TECHNOLOGIES',
    logo: 'src/assets/sponsors/Robotechnologies.png', // Replace with the actual path to the logo
    website: 'https://www.robottechnologies.com', // Replace with the actual website URL
  },
  {
    name: 'SIEMENS',
    logo: 'src/assets/sponsors/simens.png', // Replace with the actual path to the logo
    website: 'https://www.siemens.com', // Replace with the actual website URL
  },
];

const Sponsors = () => {
  return (
    <div className="bg-black p-4 text-white py-10">
      <h1 className="text-center text-6xl text-blue-300 font-bold mb-8">OUR SPONSORS</h1>
      <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sponsorsData.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="h-24 w-auto mb-4 mx-auto" />
            <h2 className="text-center text-lg">{sponsor.name}</h2>
          </a>
        ))}
      </div>
      <hr className="my-8" />
      <h1 className="text-center text-6xl text-blue-300 font-bold mt-8 mb-8">OUR AFFILIATIONS</h1>
      <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {affiliates.map((affiliates, index) => (
          <a
            key={index}
            href={affiliates.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border-2 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <img src={affiliates.logo} alt={affiliates.name} className="h-24 w-auto mb-4 mx-auto" />
            <h2 className="text-center text-lg">{affiliates.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;