import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/Bg-Video.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">
                        <p> Your journey to recovery begins here.</p>
                        <h1>ELMO DETOX</h1>
                    <Fade left>
                        <h2>DETOX AND RESIDENTIAL TREATMENT CENTER</h2>

                        {/* <h2>Substance Abuse Addiction and Mental Health Treatment Facility</h2> */}
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                            <div>
                            {/* <p> Your Journey to Recovery Begins Here.</p> */}
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>


</>

    )
}

export default Hero