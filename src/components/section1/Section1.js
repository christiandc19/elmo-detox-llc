import React from 'react'
import './Section1.css'
import C6Img1 from '../../assets/section1-img1.png';



const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className='section1-content container'>

            <div className='section1-left'>
                <img src={C6Img1}  alt="Male Psychologist" loading="lazy" />               
            </div>

                
            <div className='section1-right'>
                <h2>Welcome to Elmo Detox</h2>
                <h1>We Are The Leading Advisory Center For You</h1>

                <p>At Elmo Detox Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p> <br />
                <p>Our goal is to make the detox process as safe and comfortable as possible. Medical detoxification, or medical detox, is the first step in recovery from drug or alcohol addiction to safely manage withdrawal symptoms in individuals who have become physically dependent on a substance.</p>

                <div className='section1-btn'>
                    <button>LEARN MORE</button>
                </div>

            </div>

        </div>
    </div>
    
    </>
  )
}

export default Section1