import React from 'react'
import './Section1.css'
import img1 from "../../assets/section1-img1.webp";


const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className='section1-header container'>
                <h1>What We Do</h1>
                <h2>Substance Abuse Detox and Addiction Treatment Above and Beyond the Norms</h2>              
                <p>
                When it comes to substance abuse detox and addiction treatment, there are several innovative and effective approaches that go above and beyond conventional methods. These approaches often incorporate a combination of evidence-based practices, holistic treatments, and personalized care to address the unique needs of individuals struggling with addiction. </p>
        </div>  

        <div className="section1-content container">
          <div className='section1-left'>
                <h1>Our Method</h1>
                <p>Methods used by Elmo Detox are non-invasive, distinct, and successful in relieving acute symptoms that act as roadblocks to receiving the full therapy. Additionally, to get past more difficult progress barriers, these services are provided on a consistent and ongoing basis which is closely observed in coordination with our clinical team.<br /> <br />The physical, mental, and spiritual imbalances have been found to be restored by its healing methods. Our design of substance abuse treatment is custom-fit to every individual. Compared to the programs which are commonly used, we are a firm believer that we can reach the full potential of our well-being by healing the body, mind and spirit.
                </p>
          </div>

          <div className='section1-right'>
            <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
          </div>

        </div>
    </div>
    </>
  )
}

export default Section1
