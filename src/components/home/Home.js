import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import Section2 from '../section2/Section2'
import Section4 from '../section4/Section4'
import ContactForm from '../contact/ContactForm';
import Section1 from '../section1/Section1';



const home = () => {
  return (
    <>
    <Whoweare />
    <Section1 />
    <Section4 />
    <Section2 />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
