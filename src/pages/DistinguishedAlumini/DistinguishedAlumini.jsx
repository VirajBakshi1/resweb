import React from 'react';

const AlumniProfile = ({ photo, name, description }) => {
  return (
    <div className="flex bg-gray-800 p-4 rounded-lg mb-4">
      <img src={photo} alt={name} className="w-56 h-56 rounded-full mr-4" />
      <div>
        <h2 className="text-xl text-white">{name}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const DistinguishedAlumni = () => {
  const alumniData = [
    {
      name: 'John Doe',
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
      description: 'John Doe is a renowned scientist known for his work in renewable energy.',
    },
    {
      name: 'Jane Smith',
      photo: 'src/assets/alumni/jane.png',
      description: 'Jane Smith is a leading expert in artificial intelligence and machine learning.',
    },
    {
      name: 'Robert Brown',
      photo: 'src/assets/alumni/robert.png',
      description: 'Robert Brown is a successful entrepreneur and the founder of Tech Innovations Inc.',
    },
    // Add more alumni data as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl text-blue-300 font-bold mb-8 text-center">DISTINGUISHED ALUMINI</h1>
      <div className="container mx-auto">
        {alumniData.map((alumnus, index) => (
          <AlumniProfile
            key={index}
            photo={alumnus.photo}
            name={alumnus.name}
            description={alumnus.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DistinguishedAlumni;