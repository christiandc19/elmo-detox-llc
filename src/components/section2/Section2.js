import React from 'react'

import './Section2.css'
import { FaCheck } from 'react-icons/fa';
import Section2Image1 from '../../assets/section2-image1.jpg'


const Section2 = () => {
  return (
    <>
      <div className='section2'>

            <div className='left'>
              <img src={Section2Image1} alt="Depressed man" loading="lazy"/>
            </div>

            <div className='right'>
                  <h1>WHY CHOOSE US?</h1>
                  <h2>"If you can quit for a day, you can quit for a lifetime.” – Benjamin Alire Sáenz</h2>

                  <ul>
                    <li>
                        <FaCheck className='check'/> <span> DEDICATED STAFF. </span> <br />
                        The medical professionals on our team are completely dedicated to your recovery.
                    </li><br />
                    <li>
                        <FaCheck className='check'/> <span> PROVEN METHODS. </span> <br /> Our treatment methods are solely based on proven research and science-based evidence.
                    </li><br />
                    <li>
                        <FaCheck className='check'/> <span> 24/7 SUPPORT. </span> <br /> Guidance and support are always in reach. We provide care for you whenever needed.
                    </li><br />
                  </ul>
                </div>
        </div>
    </>
  )
}

export default Section2
