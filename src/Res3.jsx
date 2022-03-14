import React, { useContext } from "react";
import Lottie from "lottie-react";
import ResImage from './assets/res3.json';
import ImageLeft from './assets/res3/1.png';
import { useNavigate } from "react-router-dom";
import { DispatchContext } from "./store/context";
import { RESET_SCORE } from './store/reducer';

const Res3 = () => {
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
                    <Lottie animationData={ResImage} loop={true}/>
                </div>
                <div className="flex w-full text-left res-heading">
                    <p>You are an <br /><strong>aspirational dreamer!</strong></p>
                </div>
                <div className="flex w-full res-desc">
                    <p>You love to strike out on your own and not follow the crowd. When it comes to your finances you want your offers and benefits to work hard for you.</p>
                </div>
                <div className="flex w-full">
                    <div className="res-image">
                    <img src={ImageLeft}/>
                        </div>

                    <div className="flex flex-col w-8/12 res-info justify-around">
                        <strong className="w-9/12 mb-6">Your Mashreq match!</strong>
                        <p className="w-9/12">You would rock the <br /><strong>Platinum Elite card</strong> <br />with great lifestyle benefits.</p>
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

export default Res3;