import React, {useContext} from "react";
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
            <div className="flex flex-col items-center w-full z-10 px-8">
                <div className="flex w-14/12 h-2/5 pb-20 loader-image question item-center justify-center pt-16">
                    <Lottie animationData={ResImage} />
                </div>
                <div className="flex w-full h-max pb-4 text-left res-heading">
                    <p>You are an <br /><strong>aspirational dreamer!</strong></p>
                </div>
                <div className="flex w-full res-desc pb-4">
                    <p>You love to strike out on your own and not follow the crowd. When it comes to your finances you want your offers and benefits to work hard for you.</p>
                </div>
                <div className="flex w-11/12 h-4/6 text-left">
                    <div className="flex w-6/12">
                        <img src={ImageLeft} />
                    </div>
                    <div className="flex flex-col w-6/12 res-info justify-around pb-6">
                        <strong className="w-9/12 mb-6">Your Mashreq match!</strong>
                        <p className="w-10/12">You would rock the <strong>Platinum Elite card</strong> with great lifestyle benefits.</p>
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

export default Res3;