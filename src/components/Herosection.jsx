import React, { useEffect, useState } from '../../../node_modules/react';
import backgroundImage from '../assets/heroimage.png';
import { Helmet } from 'react-helmet';
import rscwhitelogo from '../assets/rscwhitelogo.png';


const HeroSection = () => {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      // Trigger the fade-in effect after a short delay
      setTimeout(() => {
        setFadeIn(true);
      }, 500); // Delay for the effect (500ms)
    }, []);
  
    return (
      <div className="relative w-screen h-screen">
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet" />
        </Helmet>
  
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}  // Using the imported image
        ></div>
  
        {/* Black overlay with 50% opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
        {/* Fade-in text */}
        <div
          className={`absolute z-10 w-full h-full flex flex-col items-center justify-center transition-opacity duration-6000 ease-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={rscwhitelogo} alt="RSC Logo" className="h-40 w-auto" />
          
          <h1 className="text-white text-center text-6xl  md:text-8xl font-bold" style={{ fontFamily: 'Nova Square, sans-serif' }}>
            ROBOT STUDY CIRCLE
          </h1>
        </div>
      </div>
    );
  };
  
  export default HeroSection;