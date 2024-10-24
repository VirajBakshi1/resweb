import React from 'react';

const papersData = [
  {
    conference: '6th International Conference on Intelligent Technologies (ICIT - 2021)',
    papers: [
      {
        title: 'Autonomous RFID Controlled Assisting Robot for Isolation Wards',
        authors: 'Dr. S S Ohol, Lalit Duseja, Yash Deshmukh, Shantanu Karmuse',
        id: 'ICIT22',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Design and Development of a Multi-finger Prosthetic Robotic Hand',
        authors: 'Dr. S S Ohol, Arya Arsan, Samarth Chaudhari, Poorval Wanere, Rushikesh Pabalkar, Chetan Pathrabe',
        id: 'ICIT24',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'ROS based Compact Mobile Robot for Area mapping, Autonomous Navigation and Path Planning',
        authors: 'Dr. S S Ohol, Aniruddha Gaikwad, Mihir Kulkarni, Anuja Agnihotri, Samruddhi Purohit',
        id: 'ICIT26',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'A low latency self-balancing algorithm for real-time quadrupedal robots',
        authors: 'Dr. S S Ohol, Mudit Singal',
        id: 'ICIT35',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'The Performance Parameter Analysis and Calibration Methodology for the Industrial Robot',
        authors: 'Dr. S S Ohol, Ravindra Shinde',
        id: 'ICIT08',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Development of Low cost Adaptive Cruise Control System for Automatic Transmission vehicle for low speed operations',
        authors: 'Dr. S S Ohol, Aniruddha Sonawane',
        id: 'ICIT15',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Two legs Balancing with Appropriate Gait Cycle and its simulation for combined motion analysis',
        authors: 'Dr. S S Ohol, Shantanu Bharad',
        id: 'ICIT17',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'In-pipe Inspection Robot for Varying pipe sizes',
        authors: 'Dr. S S Ohol, Atul Gargade',
        id: 'ICIT18',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Design, development, analytical study and performance analysis of a prototype of ornithopter',
        authors: 'Dr. S S Ohol, Madhura Mitkari, Vaishnavi Chakradeo, Riyaa Jadhav, Kalyani Deshmukh',
        id: 'ICIT27',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Finite Element Analysis of a Novel Robotic Gripper: GRABO',
        authors: 'Dr. S S Ohol, Aniket H Bhelsaikar, Pratik Chothe, Vinod Atpadkar, Debanik Roy',
        id: 'ICIT29',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Qualitative flexural modulus analysis for establishing appropriateness of pig femur bone for biomedical experimentation',
        authors: 'Dr. S S Ohol, Pankaj S. Aglawe, Subodh Gade',
        id: 'ICIT32',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Study of aerodynamic behavior of a symmetrical airfoil in a low wind speed region',
        authors: 'Dr. S S Ohol, Pranoti Shinde, Vipin K. Tripathi',
        id: 'ICIT44',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Impact on industrial robot calibration due to techno-commercial aspects in conventional industrial robot',
        authors: 'Dr. S S Ohol, Pranoti Shinde, Vipin K. Tripathi',
        id: 'ICIT44',
        link: 'https://example.com/paper1', // replace
      },
    ],
  },
  {
    conference: 'International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)',
    papers: [
      {
        title: 'DESIGN AND VALIDATION OF A MATLAB SIMULATION TO OBTAIN CUSTOMIZED GAIT CYCLE FOR EXOSKELETON',
        authors: 'Dr. S S Ohol',
        id: 'RIACT 121',
        award: 'BEST PAPER AWARD',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Inverse kinematic analysis of a fixture for fine alignment of central axis of top and bottom frame using simulation',
        authors: 'Dr. S S Ohol and P S Aglawe',
        id: 'RIACT 121',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Comparative Need Analysis of Industrial Robot Calibration Methodologies',
        authors: 'Sumedh N Chiwande and Dr. Shantipal S Ohol',
        id: 'RIACT 117',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Design and Development of In-pipe Inspection Robot for Various Pipe Sizes',
        authors: 'Atul Gargade and Dr. Shantipal Ohol',
        id: 'RIACT 11',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'SEMI-AUTONOMOUS PARKING SYSTEM FOR AUTOMATIC TRANSMISSION VEHICLES',
        authors: 'Sameer Kaware, Dr. S. S. Ohol',
        id: 'RIACT 122',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'INDUSTRIAL ROBOT PERFORMANCE ANALYSIS USING LOW COST SET-UP',
        authors: 'Kirti Chachane, Dr. S. S. Ohol, S Chiwande',
        id: 'RIACT 118',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Development of lower body exoskeleton, mathematical modeling and video analysis of its prototype for obtaining customized joint actuation',
        authors: 'Dr. S. S. Ohol and K. D. Kalantri',
        id: 'RIACT 120',
        award: 'BEST PAPER AWARD',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Design, development and analysis of human exoskeleton for enhancing human capabilities',
        authors: 'R V Vibhute, S S Yeole, S D Waghmare, T A Tonde and Dr. S S Ohol',
        id: 'RIACT 124',
        link: 'https://example.com/paper1', // replace
      },
      {
        title: 'Autonomous Snake Robot with Serpentine type Navigation',
        authors: 'M G Bangar, H S Nirgude, S P Ghodake and Dr. S S Ohol',
        id: 'RIACT 126',
        link: 'https://example.com/paper1', // replace
      },
    ],
  },
];

const PapersPublished = () => {
    return (
      <div className="bg-black text-white p-6">
        <h1 className="text-5xl text-blue-300 font-bold text-center mb-8">PAPERS PUBLISHED</h1>
        {papersData.map((conference, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-4">{conference.conference}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conference.papers.map((paper, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-white transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {paper.title} {paper.award && <span className="text-yellow-400">({paper.award})</span>}
                    </a>
                  </h3>
                  <p className="text-sm">{paper.authors}</p>
                  <p className="text-sm text-gray-400">Paper ID: {paper.id}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default PapersPublished;