import React, { useContext } from "react";
import Image1 from './assets/q1/1.jpg';
import Image2 from './assets/q1/2.jpg';
import Image3 from './assets/q1/3.jpg';
import Image4 from './assets/q1/4.jpg';
import MashreqLogo from './assets/mashreq-logo-orange.png';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from "./store/context";
import { UPDATE_SCORE } from "./store/reducer";
import Logo from "./components/Logo";

const Q1 = () => {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);
    const goNext = (e) => {
        dispatch({ type: UPDATE_SCORE, payload: { 'q1': e.target.id } });
        navigate('/q2');
    }
    return (
        <div className="flex q-container">
            <div className="flex flex-col items-center w-full z-10">
                <Logo image={MashreqLogo} />
                <div className="flex w-full h-max bg-primary question">
                    <h4>Question 1/5</h4>
                </div>
                <div className="flex w-full question-1-text">
                    <p>How do you prefer to enjoy a meal with friends?</p>
                </div>
                <div className="w-full flex flex-col question-item">
                    <div className="flex flex-row w-full items-center justify-around">
                        <img id="1" onClick={goNext} src={Image1} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                        <img id="2" onClick={goNext} src={Image2} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    </div>
                    <div className="flex flex-row w-full items-center justify-around">
                        <img id="3" onClick={goNext} src={Image3} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                        <img id="4" onClick={goNext} src={Image4} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex w-1/5 self-start loading-status"></div>
                </div>
            </div>
        </div >
    );
}

export default Q1;