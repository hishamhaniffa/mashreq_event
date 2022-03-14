import React, { useContext } from "react";
import Lottie from "lottie-react";
import ResImage from './assets/res1.json';
import ImageLeft from './assets/res1/1.png';
import { DispatchContext } from "./store/context";
import { RESET_SCORE } from "./store/reducer";
import { useNavigate } from 'react-router-dom'

const Res1 = () => {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    const handleClick = () => {
        dispatch({ type: RESET_SCORE });
        navigate('/');
    }
    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col items-center w-full z-10 res-container">
                <div className="flex w-full justify-center res-top-image">
                    <Lottie animationData={ResImage} loop={true} />
                </div>
                <div className="flex w-full text-left res-heading">
                    <p>You are a <br /><strong>conscious voyager!</strong></p>
                </div>
                <div className="flex w-full res-desc">
                    <p>You want to enjoy the best life has to offer, and want to make your money work for you. You know what you spend now could affect you tomorrow, so only want the best offers.</p>
                </div>
                <div className="flex w-full">
                    <div className="res-image">
                        <img src={ImageLeft} />
                    </div>
                    <div className="flex flex-col w-8/12 res-info justify-around">
                        <strong className="w-9/12 mb-6">Your Mashreq match!</strong>
                        <p className="w-9/12">Channel your lifestyle offers and savings through the <strong>Mashreq Neo account.</strong></p>
                        <small className="mt-20 italic">Scan the QR to learn more.</small>
                    </div>
                </div>
                <div className="flex w-full">
                    <button onClick={handleClick} className="replay-now-btn">Play again</button>
                </div>
            </div>
        </div >
    );
}

export default Res1;