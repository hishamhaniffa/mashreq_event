import React from "react";
import MashreqLogoWhite from './assets/mashreq-logo-white.png';
// import LandingWelcome from './assets/landing-welcome.png';
import Lottie from "lottie-react";
import LoadingWelcome from './assets/LandingWelcome.json';
import { useNavigate } from "react-router-dom";
import Logo from "./components/Logo";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/q1');
  };
  return (
    <div className="flex w-full h-full custom-landing-bg">
      <div className="absolute bottom-0 left-0 custom-rotate-bg z-0"></div>
      <div className="flex flex-col items-center w-full relative z-10">
          <Logo image={MashreqLogoWhite}/>
          <div className="flex w-6/12 h-max landing-animation">
              <Lottie animationData={LoadingWelcome} loop={true} />
          </div>
          <div className="flex w-10/12 landing-text">
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
