import React, {useContext} from "react";
import Lottie from "lottie-react";
import ResImage from './assets/res1.json';
import ImageLeft from './assets/res1/1.png';
import {  } from "react/cjs/react.production.min";
import { DispatchContext } from "./store/context";
import { RESET_SCORE } from "./store/reducer";
const Res1 = () => {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    const handleClick = () => {
        dispatch({type: RESET_SCORE});
        navigate('/');
    }
    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col items-center w-full z-10 px-8">
                <div className="flex w-full h-2/5 pb-20 loader-image question item-center justify-center pt-16">
                    <Lottie animationData={ResImage} />
                </div>
                <div className="flex w-full h-max pb-4 text-left res-heading">
                    <p>You are a <br /><strong>conscious voyager!</strong></p>
                </div>
                <div className="flex w-full res-desc pb-4">
                    <p>You want to enjoy the best life has to offer, and want to make your money work for you. You know what you spend now could affect you tomorrow, so only want the best offers.</p>
                </div>
                <div className="flex w-11/12 h-84 text-left">
                    <div className="flex w-6/12">
                        <img src={ImageLeft} />
                    </div>
                    <div className="flex flex-col w-6/12 res-info justify-around pb-6">
                        <strong className="w-9/12 mb-6">Your Mashreq match!</strong>
                        <p className="w-10/12">Channel your lifestyle offers and savings through the <strong>Mashreq Neo account.</strong></p>
                        <small className="mt-20 italic">Scan the QR to learn more.</small>
                    </div>
                </div>
                <div className="flex w-full handleClick">
                    <button onClick={handleClick} className="replay-now-btn">Play again</button>
                </div>
            </div>
        </div >
    );
}

export default Res1;