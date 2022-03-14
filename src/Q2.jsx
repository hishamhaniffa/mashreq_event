import React, { useContext } from "react";
import Image1 from './assets/q2/1.jpg';
import Image2 from './assets/q2/2.jpg';
import Image3 from './assets/q2/3.jpg';
import Image4 from './assets/q2/4.jpg';
import MashreqLogo from './assets/mashreq-logo-orange.png';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from "./store/context";
import { UPDATE_SCORE } from "./store/reducer";
import Logo from "./components/Logo";


const Q2 = () => {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    const goNext = (e) => {
        dispatch({ type: UPDATE_SCORE, payload: { 'q2': e.target.id } });
        navigate('/q3');
    }
    return (
        <div className="flex q-container">
            <div className="flex flex-col items-center w-full z-10">
                <Logo image={MashreqLogo} />
                <div className="flex w-full h-max bg-primary question">
                    <h4>Question 2/5</h4>
                </div>
                <div className="flex w-full question-1-text">
                    <p>What vacation would make you happy?</p>
                </div>
                <div className="w-full flex flex-col question-item">
                    <div className="flex flex-row w-full items-center justify-around">
                        <img id="4" onClick={goNext} src={Image1} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                        <img id="3" onClick={goNext} src={Image2} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    </div>
                    <div className="flex flex-row w-full items-center justify-around">
                        <img id="2" onClick={goNext} src={Image3} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                        <img id="1" onClick={goNext} src={Image4} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    </div>

                </div>
                <div className="flex w-full">
                    <div className="flex bg-orange-500 w-2/5 self-start loading-status"></div>
                </div>
            </div>
        </div>
    );
}

export default Q2;