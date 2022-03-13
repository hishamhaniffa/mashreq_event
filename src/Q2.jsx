import React, {useContext} from "react";
import Image1 from './assets/q2/1.png';
import Image2 from './assets/q2/2.png';
import Image3 from './assets/q2/3.png';
import Image4 from './assets/q2/4.png';
import MashreqLogoWhite from './assets/mashreq-logo-orange.png';
import {  useNavigate } from 'react-router-dom';
import { DispatchContext } from "./store/context";
import { UPDATE_SCORE } from "./store/reducer";

const Q2 = () => {
    const navigate = useNavigate();
    const dispatch= useContext(DispatchContext);

    const goNext = (e) => {
        dispatch({type: UPDATE_SCORE, payload: {'q2': e.target.id}});
        navigate('/q3');
    }
    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col items-center w-full z-10 px-8">
                <div className="logo w-1/4 h-max pb-16">
                    <img src={MashreqLogoWhite} />
                </div>
                <div className="flex w-full h-max pb-4 bg-primary question">
                    <h4>Question 2/5</h4>
                </div>
                <div className="flex w-full question-1-text pb-4">
                    <p>What vacation would make you happy?</p>
                </div>
                <div className="grid grid-cols-2 gap-4 grid-rows-2 place-content-around w-11/12">
                    <div><img id="4" onClick={goNext} src={Image1} /></div>
                    <div><img id="3" onClick={goNext} src={Image2} /></div>
                    <div><img id="2" onClick={goNext} src={Image3} /></div>
                    <div><img id="1" onClick={goNext} src={Image4} /></div>
                </div>
                <div className="flex w-11/12">
                    <div className="flex bg-orange-500 w-2/5 h-2 rounded-md self-start"></div>
                </div>
            </div>
        </div >
    );
}

export default Q2;