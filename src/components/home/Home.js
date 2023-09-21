import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import ContactForm from '../contact/ContactForm';
import Cards from '../servicesCards/Cards';
// import Conditions from '../conditions/Conditions';
import MissionHome from '../mission/MissionHome';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';

const home = () => {
  return (
    <>
    <Section1 />
    <Cards />
    {/* <Conditions /> */}
    <Section2 />
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
