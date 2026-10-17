import React from 'react'
import AboutBanner from './components/AboutBanner'
import WelcomeSection from '../home/components/WelcomeSection'
import OurStorySection from '../home/components/OurStorySection'
import VegetarianDining from '../home/components/VegetarianDining'
import GuestReviews from '../home/components/GuestReviews'

const AboutComponents = () => {
  return (
    <main>
        <AboutBanner/>
        <WelcomeSection/>
        <OurStorySection/>
        <VegetarianDining/>
        <GuestReviews/>
    </main>
  )
}

export default AboutComponents