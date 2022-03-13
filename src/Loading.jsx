import React, { useEffect, useContext } from "react";
import Lottie from "lottie-react";
import Loader from './assets/loading.json';
import MashreqLogoWhite from './assets/mashreq-logo-orange.png';
import { useNavigate } from "react-router-dom";
import { StateContext } from "./store/context";


const Loading = () => {
    const navigate = useNavigate();
    const { q1, q2, q3, q4, q5 } = useContext(StateContext);
    const calc = () => {
        console.log(q1, q2, q3, q4, q5);
        const total = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5);
        console.log('t', total);
        if (total >= 5 && total <= 7) {
            navigate('/res1');
        } else if (total >= 8 && total <= 12) {
            navigate('/res2');
        } else if (total >= 13 && total <= 16) {
            navigate('/res3');
        } else if (total >= 17 && total <= 20) {
            navigate('/res4');
        } else {
            navigate('/');
        }

    }
    useEffect(() => {
        setTimeout(() => {
            calc()
        }, 1000)
    }, []);
    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col items-center w-full z-10 px-8">
                <div className="logo w-1/4 h-max pb-28">
                    <img src={MashreqLogoWhite} />
                </div>
                <div className="flex w-11/12 h-max pb-24 loader-image question">
                    <Lottie animationData={Loader} />
                </div>
                <div className="flex w-full question-1-text pb-4 justify-center">
                    Calculating......
                </div>
            </div>
        </div >
    );
}

export default Loading;