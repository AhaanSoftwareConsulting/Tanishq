import React from 'react'
import ContactBanner from './components/ContactBanner'
import ReservationSection from '../home/components/ReservationSection'
import GetInTouch from './components/GetInTouch'
import NearestLocations from './components/NearestLocations'
import FindYourWay from './components/FindYourWay'
import ContactForm from './components/ContactForm'

const ContactComponents = () => {
  return (
    <main>
        <ContactBanner/>
        <GetInTouch/>
        <NearestLocations/>
        <FindYourWay/>
        <ContactForm/>
    </main>
  )
}

export default ContactComponents