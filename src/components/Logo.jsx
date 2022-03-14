import React from "react";

const Logo = ({image}) => {

    return (
        <div className="logo w-1/4 h-max">
            <img src={image} />
        </div> 
    );

}


export default Logo;