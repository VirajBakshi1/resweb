import React from 'react';

const PatentSection = ({ patent, reverse = false }) => {
  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-black to-gray-950">
      <div className={`container mx-auto px-6 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent">
            {patent.title}
          </h2>
          
          <div className="space-y-4">
            {patent.patentNo && (
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                  opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative px-4 py-2 bg-black border border-blue-500/30">
                  <p className="text-blue-100/70 group-hover:text-blue-100">
                    Patent No: {patent.patentNo}
                  </p>
                </div>
              </div>
            )}
            
            {patent.applicationNo && (
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                  opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative px-4 py-2 bg-black border border-blue-500/30">
                  <p className="text-blue-100/70 group-hover:text-blue-100">
                    Application No: {patent.applicationNo}
                  </p>
                </div>
              </div>
            )}

            {patent.date && (
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                  opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative px-4 py-2 bg-black border border-blue-500/30">
                  <p className="text-blue-100/70 group-hover:text-blue-100">
                    Date: {patent.date}
                  </p>
                </div>
              </div>
            )}

            {patent.letterNo && (
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                  opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative px-4 py-2 bg-black border border-blue-500/30">
                  <p className="text-blue-100/70 group-hover:text-blue-100">
                    Letters No: {patent.letterNo}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            {/* Image glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
              to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000">
            </div>
            
            {/* Actual image */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={patent.image} 
                alt={patent.imageCaption || patent.title}
                className="w-full h-[300px] md:h-[400px] object-cover transform 
                  group-hover:scale-105 transition duration-700"
              />
              {patent.imageCaption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2">
                  <p className="text-center text-sm text-blue-100/70">{patent.imageCaption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Patents = () => {
  // Patent data extracted from the image
  const patents = [
    {
      title: "AN ARRANGEMENT TO MAINTAIN STABILITY OF A BODY MOUNTED ON A ROCKER-BOGIE MECHANISM",
      patentNo: "362205(2212/MUM/2014)",
      date: "07.07.2014",
      letterNo: "SI. No. 022112492 Dt 19th March 2021",
      image: "/api/placeholder/400/300",
      imageCaption: "Patented Rocker Bogie Mechanism"
    },
    {
      title: "AN AUTONOMOUS IN-PIPE INSPECTION ROBOTIC SYSTEM",
      applicationNo: "202121031359",
      date: "13.07.2021",
      image: "/api/placeholder/400/300",
      imageCaption: "In-Pipe Inspection Robot"
    },
    {
      title: "NON CONVENTIONAL CALIBRATION SYSTEM FOR INDUSTRIAL ROBOTS",
      applicationNo: "202121012080",
      date: "22.03.2021",
      image: "/api/placeholder/400/300",
      imageCaption: "Calibration System for Ind. Robots"
    },
    {
      title: "AN AUTOMATIC BONE ALIGNMENT SYSTEM",
      applicationNo: "202121047545",
      date: "19.10.2021",
      image: "/api/placeholder/400/300",
      imageCaption: "Bone Alignment System"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Main title with enhanced glow effect */}
      <div className="py-16">
        <h1 className="text-6xl font-bold text-center">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
              to-purple-600 blur-md opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              PATENTS
            </span>
          </span>
        </h1>
      </div>
      
      {/* Patents sections */}
      {patents.map((patent, index) => (
        <PatentSection
          key={index}
          patent={patent}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default Patents;