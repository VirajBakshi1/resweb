import React from 'react';

const timelineData = [
  {
    title: 'Event 1  (2021)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 2 (2022)',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.',
  },
  {
    title: 'Event 3 (2023)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 4 (2024)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.',
  },
  {
    title: 'Event 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 7',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.',
  },
  {
    title: 'Event 8',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 9',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?',
  },
  {
    title: 'Event 10',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.',
  },
];

const Journey = () => {
  return (
    <div className='bg-black p-2 '>
        <h1 className="text-4xl font-bold text-center pt-4 text-blue-400 mb-12">JOURNEY</h1>
    <div className="container  mx-auto ">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto  text-blue-50">
        {timelineData.map((event, index) => (
          <div key={index} className="flex md:contents">
            {/* Left-aligned events */}
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-gray-800 border-2  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-blue-400 text-lg mb-1">{event.title}</h3>
                    <p className="leading-tight text-justify">{event.description}</p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Right-aligned events */}
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                </div>
                <div className="bg-gray-800 border-2  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h3 className="font-semibold text-blue-400 text-lg mb-1">{event.title}</h3>
                  <p className="leading-tight text-justify">{event.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Journey;