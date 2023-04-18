import React from 'react'
import './Whoweare.css'
import { Link } from 'react-router-dom';
import { TbNurse } from 'react-icons/tb';
import { BsHeadphones } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';


const Whoweare = () => {
  return (
<>

<div className='wwa'>
    <div className='wwa-header'>
        <h1>We Will Help For Your Better Health</h1>
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
                <Link to="/substance-abuse">
                <h5>LEARN MORE</h5>
                </Link>
            </div>
        </div>

        <div className='card2 card'>
            <div className='card-content'>
                <BsHeadphones className='card-icon2'/>
                <h1>Free Consultation</h1>
                <p>Guidance and support are always in reach. We provide care for you whenever needed.</p>
                <Link to="/contact">
                <h5>CONTACT US</h5>
                </Link>            
            </div>        
        </div>


        <div className='card3 card'>
            <div className='card-content'>
                <MdWorkOutline className='card-icon3'/>
                <h1>Employment Assistance Programs</h1>
                <p>Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.</p>
                <Link to="/jobs">
                <h5>LEARN MORE</h5>
                </Link>            
            </div>      
        </div>
    </div>
</div>
</div>

</>
  )
}

export default Whoweare