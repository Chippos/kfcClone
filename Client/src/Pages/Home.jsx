import React from 'react'
import HeroSection from '../components/home/heroSection'
import Card from '../components/home/hoverCard'
import Market from '../components/home/marketPlace'
import Popular from '../components/home/PopularServices'
import Talent from '../components/home/freelanceTalent'
import World from '../components/home/wholeWorld'
import Freelancers from '../components/home/bestFreelancers'
import Solution from '../components/home/bussinessSolution'
import Guides from '../components/home/pushiGuide'
function Home() {
  return (
    <>
      <HeroSection/>
      <Card/>
      <Market/>
      <Popular/>
      <Talent/>
      <World/>
      <Freelancers/>
      <Solution/>
      <Guides/>
    </>
  )
}

export default Home
