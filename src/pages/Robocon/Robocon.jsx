import React from 'react';
import ImageGrid from '../../components/ImageGrid';

// Data for Robocon events
const roboconData = [
  {
    year: 2024,
    title: 'ABU ROBOCON THEME 2024',
    description: `This year’s Robocon theme revolves around ...`,
    details: `The competition is aimed at pushing ...`,
    images: [
      '/src/assets/robocon2024/Screenshot_2024-10-21_12.53.54_PM.png',
      '/src/assets/robocon2024/Screenshot_2024-10-21_12.55.57_PM.png',
      '/src/assets/robocon2024/Screenshot_2024-10-21_12.56.52_PM.png',
    ]
  },
  {
    year: 2023,
    title: 'ABU ROBOCON THEME 2023',
    description: `Lagori is a traditional and one of the most played ancient games...`,
    details: `IIT Delhi hosted Doordarshan (DD) Robocon 2023...`,
    images: [
      '/src/assets/robocon2023/Screenshot_2023-10-21_12.53.54_PM.png',
      '/src/assets/robocon2023/Screenshot_2023-10-21_12.55.57_PM.png',
      '/src/assets/robocon2023/Screenshot_2023-10-21_12.56.52_PM.png',
    ]
  },
  {
    year: 2022,
    title: 'ABU ROBOCON THEME 2022 Delhi, INDIA',
    description: `Lagori is a traditional game originating from the southern part of India...`,
    details: `IIT Delhi hosted Doordarshan (DD) Robocon 2022...`,
    images: [
      '/src/assets/robocon2022/Screenshot_2022-10-21_12.53.54_PM.png',
      '/src/assets/robocon2022/Screenshot_2022-10-21_12.55.57_PM.png',
      '/src/assets/robocon2022/Screenshot_2022-10-21_12.56.52_PM.png',
    ]
  },
  // You can continue adding more years like 2021, 2020, etc.
];

const Robocon = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <h1 className="text-6xl text-blue-300 font-bold mb-6 text-center">ROBOCON</h1>

      {roboconData.map((robocon, index) => (
        <div key={index} className="max-w-6xl bg-gray-800 p-8 mx-auto rounded-lg border-2 mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            {robocon.title} ({robocon.year})
          </h2>
          <p className="mb-4">{robocon.description}</p>
          
          <ImageGrid images={robocon.images} />
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Event Details</h3>
          <p className="mb-4">{robocon.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Robocon;