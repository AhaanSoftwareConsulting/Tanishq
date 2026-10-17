import React from 'react'
import MenuBanner from './components/MenuBanner'
import AuthenticFlavours from '../home/components/AuthenticFlavours'
import MenuCategories from '../home/components/MenuCategories'
import ReservationSection from '../home/components/ReservationSection'

const MenuComponents = () => {
  return (
    <main>
        <MenuBanner/>
        <AuthenticFlavours/>
        <MenuCategories/>
    </main>
  )
}

export default MenuComponents