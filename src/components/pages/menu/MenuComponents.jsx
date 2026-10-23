import React from 'react'
import MenuBanner from './components/MenuBanner'
import AuthenticFlavours from '../home/components/AuthenticFlavours'
import MenuCategories from '../home/components/MenuCategories'
import ReservationSection from '../home/components/ReservationSection'
import MenuSection from './components/MenuSection'

const MenuComponents = () => {
  return (
    <main>
        <MenuBanner/>
        {/* <AuthenticFlavours/> */}
        <MenuSection/>
        {/* <MenuCategories/> */}
    </main>
  )
}

export default MenuComponents