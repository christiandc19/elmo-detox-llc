import React from 'react'
import './Section1.css'
import img1 from "../../assets/section1-img1.webp";


const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className='section1-header container'>
                <h1>Welcome to Elmo Detox RESIDENTIAL TREATMENT CENTER</h1>
                <h2>Your Pathway to Recovery Starts Here</h2>              
                <p>
                At Elmo Detox, we understand the immense courage it takes to embark on the journey towards sobriety. Our dedicated team of professionals is here to support you every step of the way. With compassion, expertise, and a holistic approach to detoxification, we aim to provide a safe and nurturing environment for individuals seeking to overcome substance abuse.</p>
        </div>  

        <div className="section1-content container">
          <div className='section1-left'>
                <h1>Why Choose Elmo Detox?</h1>
                <ul>
                  <li><b>Compassionate Care</b>: Our team of licensed and experienced professionals is committed to treating each individual with respect, dignity, and empathy.</li>
                  <li><b>Evidence-Based Treatment</b>: We utilize the latest research-backed methods to ensure a safe and effective detoxification process.</li>
                  <li><b>Customized Plans</b>: Recognizing that every person's journey to recovery is unique, we create personalized treatment plans tailored to your specific needs and circumstances.</li>
                  <li><b>24/7 Support</b>: Our facility is staffed around the clock, ensuring you have access to care and support whenever you need it.</li>
                  <li><b>Comfortable Environment: </b>: We provide a serene and comfortable setting designed to promote relaxation and healing during this critical phase of your recovery.</li>
                </ul>
          </div>

          <div className='section1-right'>
            <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
          </div>

        </div>

        {/* <div className='section1-header container'>
                <h1>Take the First Step</h1>
                <p>
                We commend you for taking the first step towards a healthier, more fulfilling life. Whether you're seeking help for yourself or a loved one, Elmo Detox is here to guide you on the path to recovery. Contact us today to learn more about our programs or to schedule a confidential consultation.</p>
        </div>  */}


    </div>
    </>
  )
}

export default Section1
