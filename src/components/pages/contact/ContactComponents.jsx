import React, {useEffect} from 'react'
import ContactBanner from './components/ContactBanner'
import ReservationSection from '../home/components/ReservationSection'
import GetInTouch from './components/GetInTouch'
import NearestLocations from './components/NearestLocations'
import FindYourWay from './components/FindYourWay'
import ContactForm from './components/ContactForm'

const ContactComponents = () => {
  useEffect(() => {
    if (window.location.hash === '#find-your-way') {
      requestAnimationFrame(() => {
        document.getElementById('find-your-way')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }, []);
  return (
    <main>
        <ContactBanner/>
        <GetInTouch/>
        <NearestLocations/>
        <FindYourWay id="find-your-way"/>
        <ContactForm/>
    </main>
  )
}

export default ContactComponents