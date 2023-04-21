import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import Section2 from '../section2/Section2'
import Section4 from '../section4/Section4'
import ContactForm from '../contact/ContactForm';



const home = () => {
  return (
    <>
    <Whoweare />
    <Section4 />
    <Section2 />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
