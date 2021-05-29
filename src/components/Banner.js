import React from 'react';
import ethereum from '../assets/ethereum.png'
import "./Banner.css"

function Banner(props) {
    return (
        <div className="banner">
            <h1 style={{fontSize:'50px'}}>
            To Do APP
            </h1>
            <img src={ethereum} className="eth-symbol" alt="symbol"/>
        </div>
    );
}

export default Banner;