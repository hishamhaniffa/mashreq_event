import React from "react";
import MashreqLogoWhite from './assets/mashreq-logo-white.png';
// import LandingWelcome from './assets/landing-welcome.png';
import Lottie from "lottie-react";
import LoadingWelcoem from './assets/LandingWelcome.json';
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/q1');
  };
  return (
    <div className="flex w-full h-screen custom-landing-bg">
      <div className="absolute bottom-0 left-0 custom-rotate-bg z-0"></div>
      <div className="flex flex-col items-center w-full relative z-10">
          <div className="logo w-1/4 h-max pb-16">
              <img src={MashreqLogoWhite} />
          </div> 
          <div className="flex w-6/12 h-max pb-16">
              {/* <img src={LandingWelcome} /> */}
              <Lottie animationData={LoadingWelcoem} />
          </div>
          <div className="flex w-10/12 landing-text pb-20">
            <p>Discover in just 5 questions how Mashreq can help you with your lifestyle goals</p>
          </div>
          <div className="flex w-11/12 play-btn-container">
            <button onClick={handleClick} className="play-now-btn">Play now</button>
          </div>
      </div>
    </div>
  )
};

export default Landing;
