import React, { useContext, useState } from "react";
import Image11 from './assets/q1/1.jpg';
import Image12 from './assets/q1/2.jpg';
import Image13 from './assets/q1/3.jpg';
import Image14 from './assets/q1/4.jpg';

import Image21 from './assets/q2/1.jpg';
import Image22 from './assets/q2/2.jpg';
import Image23 from './assets/q2/3.jpg';
import Image24 from './assets/q2/4.jpg';

import Image31 from './assets/q3/1.jpg';
import Image32 from './assets/q3/2.jpg';
import Image33 from './assets/q3/3.jpg';
import Image34 from './assets/q3/4.jpg';

import Image41 from './assets/q4/1.jpg';
import Image42 from './assets/q4/2.jpg';
import Image43 from './assets/q4/3.jpg';
import Image44 from './assets/q4/4.jpg';

import Image51 from './assets/q5/1.jpg';
import Image52 from './assets/q5/2.jpg';
import Image53 from './assets/q5/3.jpg';
import Image54 from './assets/q5/4.jpg';

import MashreqLogo from './assets/mashreq-logo-orange.png';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from "./store/context";
import { UPDATE_SCORE } from "./store/reducer";
import Logo from "./components/Logo";

const Questions = () => {
    const [currentStep, setStep] = useState(1);
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);
    const goNext = (e) => {
        dispatch({ type: UPDATE_SCORE, payload: { [`q${currentStep}`]: e.target.id } });
        console.log(`q- q${currentStep}`, e.target.id);
        if(currentStep == 5) {
            navigate('/loading');
        } else {
            setStep(currentStep + 1);
        }
        // navigate('/q2');
    }

    const Q1 = () => (
        <>
            <div className="flex w-full h-max bg-primary question">
                <h4>Question 1/5</h4>
            </div>
            <div className="flex w-full question-1-text">
                <p>How do you prefer to enjoy a meal with friends?</p>
            </div>
            <div className="w-full flex flex-col question-item">
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="1" onClick={goNext} src={Image11} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="2" onClick={goNext} src={Image12} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="3" onClick={goNext} src={Image13} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="4" onClick={goNext} src={Image14} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
            </div>
        </>
    )

    const Q2 = () => (
        <>
            <div className="flex w-full h-max bg-primary question">
                <h4>Question 2/5</h4>
            </div>
            <div className="flex w-full question-1-text">
                <p>What vacation would make you happy?</p>
            </div>
            <div className="w-full flex flex-col question-item">
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="4" onClick={goNext} src={Image21} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="3" onClick={goNext} src={Image22} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="2" onClick={goNext} src={Image23} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="1" onClick={goNext} src={Image24} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>

            </div>
        </>
    )

    const Q3 = () => (
        <>
            <div className="flex w-full h-max bg-primary question">
                <h4>Question 3/5</h4>
            </div>
            <div className="flex w-full question-1-text">
                <p>Where could you shop until you dropped?</p>
            </div>
            <div className="w-full flex flex-col question-item">
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="3" onClick={goNext} src={Image31} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="4" onClick={goNext} src={Image32} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="1" onClick={goNext} src={Image33} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="2" onClick={goNext} src={Image34} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
            </div>
        </>
    )

    const Q4 = () => (
        <>
            <div className="flex w-full h-max bg-primary question">
                <h4>Question 4/5</h4>
            </div>
            <div className="flex w-full question-1-text">
                <p>What activity gets your blood pumping?</p>
            </div>
            <div className="w-full flex flex-col question-item">
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="2" onClick={goNext} src={Image41} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="4" onClick={goNext} src={Image42} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="3" onClick={goNext} src={Image43} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="1" onClick={goNext} src={Image44} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
            </div>
        </>
    );

    const Q5 = () => (
        <>
            <div className="flex w-full h-max bg-primary question">
                <h4>Question 5/5</h4>
            </div>
            <div className="flex w-full question-1-text">
                <p>How do you love to travel?</p>
            </div>
            <div className="w-full flex flex-col question-item">
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="3" onClick={goNext} src={Image51} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="1" onClick={goNext} src={Image52} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                    <img id="4" onClick={goNext} src={Image53} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                    <img id="2" onClick={goNext} src={Image54} className="transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </div>
            </div>
        </>
    );
    return (
        <div className="flex q-container">
            <div className="flex flex-col items-center w-full z-10">
                <Logo image={MashreqLogo} />
                {currentStep === 1 ? <Q1 />: null}
                {currentStep === 2 ? <Q2 />: null}
                {currentStep === 3 ? <Q3 />: null}
                {currentStep === 4 ? <Q4 />: null}
                {currentStep === 5 ? <Q5 />: null}
                <div className="flex w-full">
                    <div className={`flex ${currentStep === 5 ? 'w-full': `w-${currentStep}/5` } self-start loading-status`}></div>
                </div>
            </div>
        </div >
    )
}

export default Questions;