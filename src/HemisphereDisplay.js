import React from "react";
import northernPic from './images/NorthernHemisphere.jpg';
import southernPic from './images/SouthernHemisphere.jpg';
import './Hemisphere.css';

const hemisphereConfig = {
    Northern : {
        text: 'Your are in northern hemisphere',
        picture : northernPic
    },
    Southern : {
        text: 'You are in southern hemisphere',
        picture : southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={picture} alt="hemisphere picture"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text} !</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;