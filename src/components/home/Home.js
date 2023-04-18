import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import Section2 from '../section2/Section2'
import Section4 from '../section4/Section4'
import ContactForm from '../contact/ContactForm';



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Section2 />
    <Section4 />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
