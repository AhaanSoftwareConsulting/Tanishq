import React from 'react'
import GalleryBanner from './components/GalleryBanner'
import RestaurantGlimpse from '../home/components/RestaurantGlimpse'
import OurGallery from './components/OurGallery'

const GalleryComponents = () => {
  return (
    <main>
        <GalleryBanner/>
        <RestaurantGlimpse/>
        <OurGallery/>
    </main>
  )
}

export default GalleryComponents