import React from 'react'
import HeroSection from '../components/home/heroSection'
import Card from '../components/home/hoverCard'
import Market from '../components/home/marketPlace'
import Talent from '../components/home/freelanceTalent'
import Guides from '../components/home/pushiGuide'
function Home() {
  return (
    <>
      <HeroSection/>
      <Card/>
      <Market/>
      <Talent/>
      <Guides/>
    </>
  )
}

export default Home
