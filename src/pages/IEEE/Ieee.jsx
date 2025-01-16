import React from 'react';

const IEEE = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center">

        <h1 className="text-6xl text-blue-300 font-bold mb-4 text-center">IEEE</h1>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto border-2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="leading-relaxed text-lg mb-6">
          In the last few years, robotics activities in India have moved well beyond the traditional areas of industrial applications, atomic energy, etc., and entered newer domains of education, rehabilitation, entertainment, and even into our homes. Indian robotics researchers have similarly grown from a handful to over a hundred, engaged in research labs, education, industry, atomic energy, and more.
        </p>

        <p className="leading-relaxed text-lg mb-6">
          Many of us feel that it is about time to form an academic society to further augment our robotics activities and foster better interaction among ourselves. With this objective, researchers got together to form a society on 10th July 2011. Officially, The Robotics Society was registered on June 21, 2017.
        </p>

        <p className="leading-relaxed text-lg mb-6">
          Note that in some of the earlier documents, "Robotics Society of India (RSI)" might be mentioned, which should be read as “The Robotics Society,” the registered name of the society.
        </p>
      </div>

      {/* Activities Section */}
      <div className="max-w-7xl mx-auto border-2 bg-gray-800 p-6 mt-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Activities</h2>
        <p className="leading-relaxed text-lg mb-6">
          The Robotics Society organizes a main event every year around the month of July. The events are Advances in Robotics (AIR) and Workshop on Robotics, held alternatively.
        </p>

        {/* AIR Events */}
        <h3 className="text-2xl font-bold mb-4">Advances in Robotics (AIR)</h3>
        <p className="leading-relaxed text-lg mb-6">
          Advances in Robotics (AIR) is an international conference of The Robotics Society, held every two years. Below are the details of past AIR events:
        </p>

        <ul className="list-disc list-inside text-lg space-y-2">
          <li>AIR2013 at R&DE, DRDO, Pune during July 4-6, 2013</li>
          <li>AIR2015 at BITS Pilani Goa Campus, Goa during July 2-4, 2015</li>
          <li>AIR2017 at IIT Delhi, New Delhi, during June 28 – July 1, 2017</li>
          <li>AIR2019 at IIT Madras, Chennai, during July 2-6, 2019</li>
          <li>AIR2021 at IIT Kanpur, Kanpur during June 30 - July 4, 2021 (fully online)</li>
        </ul>

        {/* Workshops */}
        <h3 className="text-2xl font-bold mt-8 mb-4">Workshops on Robotics</h3>
        <p className="leading-relaxed text-lg">
          Workshops on Robotics and its Applications are held every alternate year, focusing on specific thrust areas of robotics.
        </p>
      </div>
    </div>
  );
};

export default IEEE ;