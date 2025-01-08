import React from 'react'
import Hero from '/src/components/Hero'
import LatestCollection from '/src/components/LatestCollection'
import BestSeller from '/src/components/BestSeller'
import OurPolicy from '/src/components/OurPolicy'
import NewsletterBox from '/src/components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox/>
    </div>
  )
}

export default Home