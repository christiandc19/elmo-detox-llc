import React from 'react'
import './AboutSection.css'
import About from '../../assets/about-section-1.webp'

const AboutSection = () => {
    return (
        <>
        <div className='about-section container'>

            <div className='about-section-content'>
                <div className='about-section-left'>
                    <h1>About Elmo Detox</h1>
                    <p>At Elmo Detox, we understand that the path to recovery begins with compassionate care and a supportive environment. Our dedicated team is committed to helping individuals break free from the grips of substance abuse and start on their journey towards a healthier, more fulfilling life.</p>

                    <h1>Our Mission</h1>
                    <p>Our mission at Elmo Detox is to provide a safe and nurturing space for individuals seeking to overcome substance dependency. We believe in the power of comprehensive detoxification programs that are tailored to the unique needs of each person we serve.</p>

                    <h1>Contact Us Today</h1>
                    <p>If you or a loved one are ready to take the first step towards a brighter, substance-free future, we invite you to reach out to us. Our compassionate team is here to answer any questions and guide you through the admissions process.<br/><br/>Reclaim your life from substance abuse with the help of Elmo Detox. Together, we can build a foundation for lasting recovery and a brighter tomorrow.</p>



                </div>

                <div className='about-section-right'>
                    <img src={ About } alt="Happy Person" loading="lazy"/>
                </div>

            </div>
        </div>



        </>
    )
}

export default AboutSection
