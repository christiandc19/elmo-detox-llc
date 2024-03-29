import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIOID from '../components/Addiction-Opioid/Opioid'
import OpioidSection from '../components/Addiction-Opioid/OpioidSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Opioid = () => {
  return (
    <>
    <Navbar /> 
    <OPIOID />
    <OpioidSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Opioid