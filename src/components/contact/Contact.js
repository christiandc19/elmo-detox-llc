import React from "react";
import Fade from 'react-reveal/Fade';

import './Contact.css'

import Team from "../../assets/team.png";


const Contact = () => {

    return (
            <>
            <div className='contact main-menu'>

                        <div className="contact-content container">
                        <div className='team'>
                            <img src={Team} alt="Calm man in front of the sea" loading="lazy" />
                        </div>

                        <Fade top>
                        <div className="contact-caption">
                            <h1>HAVE SOME QUESTIONS?</h1>
                        </div>
                        </Fade>
                        </div>
                    </div>



            </>
    )

    }
export default Contact




