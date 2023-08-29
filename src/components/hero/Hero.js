import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

// import Wave from '../../assets/waves.svg'


const Hero = () => {
    return (
<>        
        <div className='hero'>



            <div className="hero-container">
                <div className="content">
                    <Fade right>
                        <h1>ELMO DETOX</h1>
                    </Fade>
                    <Fade left>
                        <h2 className='subtitle'>SUBSTANCE ABUSE ADDICTION TREATMENT FACILITY</h2>
                    </Fade>
                        <br />
                        
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>CALL US</button>
                    </Link>
                    <Fade bottom>
                        <p>Walk the road of recovery with us</p>
                        </Fade>
                    </div>
                    <br />

                </div>
            </div>
        </div>
</>

    )
}

export default Hero