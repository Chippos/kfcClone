import React from 'react'
import HeroSection from '../components/home/heroSection'
import Market from '../components/home/marketPlace'
import Talent from '../components/home/freelanceTalent'
function Home() {
  return (
    <>
      <HeroSection/>
      {/* <Card/> */}
      <Market/>
      <Talent/>
    </>
  )
}

export default Home
