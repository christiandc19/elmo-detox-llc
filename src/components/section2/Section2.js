import React from 'react'

import './Section2.css'
import { FaCheck } from 'react-icons/fa';



const Section2 = () => {
  return (
    <>
      <div className='section2'>
        <div className='content'>
            <div className='left'>
            </div>

            <div className='right'>
                <div className='right-content'>
                <h1>WHY CHOOSE US?</h1>
                <h2>If you can quit for a day, you can quit for a lifetime.” <br /> <p>– Benjamin Alire Sáenz</p></h2>

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
        </div>
      </div>
    </>
  )
}

export default Section2
