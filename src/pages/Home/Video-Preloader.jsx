import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home'; 

const VideoPreloader = () => {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoLoaded(true);
    navigate('/home'); // Programmatically navigate to home page
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {!isVideoLoaded && (
        <video
          autoPlay
          playsInline
          muted
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/preloader/rsc-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPreloader;