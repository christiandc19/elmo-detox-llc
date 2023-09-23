import React from "react";
import Fade from 'react-reveal/Fade';

import './Insurance.css'

import family from "../../assets/family.webp";


const Insurance = () => {

    return (
            <>
            <div className='insurance main-menu'>

                        <div className="insurance-content container">
                        <div className='family'>
                            <img src={family} alt="Calm man in front of the sea" loading="lazy" />
                        </div>

                        <Fade top>
                        <div className="insurance-caption">
                            <h1>INSURANCE</h1>
                            <p>At Elmo Detox, we understand the importance of accessible and affordable care for individuals seeking treatment for substance abuse. That's why we work with a variety of insurance providers to ensure that our services are available to as many people as possible.</p>
                        </div>
                        </Fade>
                        </div>
                    </div>



            </>
    )

    }
export default Insurance




