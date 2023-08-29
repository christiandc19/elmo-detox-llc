import React from 'react'
import './Whoweare.css'
import { Link } from 'react-router-dom';
import { TbNurse } from 'react-icons/tb';
import { BsHeadphones } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

import { Link as LinkRoll } from 'react-scroll'

const Whoweare = () => {
  return (
<>

<div className='wwa'>
    <div className='wwa-header'>
        <h1>Keep your sobriety first to make it last.</h1>
        <p>
            At Elmo Detox Center, we provide safe and comforable medical detox <br /> services for those struggling with addiction. 
        </p>
    </div>


<div className='wwa-cards'>
    <div className='wwa-cards-contents'>
        <div className='card1 card'>
            <div className='card-content'>
                <TbNurse className='card-icon1'/>
                <h1>Substance Abuse Programs</h1>
                <p>Treatment options for a multitude of substance use disorders. Whether you suffer from alcohol, prescription drugs, or other substance abuse disorders, find better healing with us.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                    <button>Learn More</button>
                </Link>
                </LinkRoll>
            </div>
        </div>

        <div className='card2 card'>
            <div className='card-content'>
                <BsHeadphones className='card-icon2'/>
                <h1>Free Consultation</h1>
                <p>Guidance and support are always in reach. We provide care for you whenever needed.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
                </LinkRoll>
            </div>        
        </div>


        <div className='card3 card'>
            <div className='card-content'>
                <MdWorkOutline className='card-icon3'/>
                <h1>Employment Assistance</h1>
                <p>Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/jobs">
                    <button>Learn More</button>
                </Link>
                </LinkRoll>
            </div>      
        </div>
    </div>
</div>
</div>

</>
  )
}

export default Whoweare