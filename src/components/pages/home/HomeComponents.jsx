import React from 'react'
import  HeroBanner  from './components/HeroBanner'
import WelcomeSection from './components/WelcomeSection'
import ReservationSection from './components/ReservationSection'
import VegetarianDining from './components/VegetarianDining'
import MenuCategories from './components/MenuCategories'
import GuestReviews from './components/GuestReviews'
import AuthenticFlavours from './components/AuthenticFlavours'
import RestaurantGlimpse from './components/RestaurantGlimpse'
import OurStorySection from './components/OurStorySection'

const HomeComponents = () => {
  return (
    <main>
        <HeroBanner/>
        <WelcomeSection/>
        <AuthenticFlavours/>
        <OurStorySection/>
        <MenuCategories/>
        <VegetarianDining/>
        <RestaurantGlimpse/>
        <GuestReviews/>
        <ReservationSection/>
    </main>
  )
}

export default HomeComponents