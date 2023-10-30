import React from 'react'
import NavbarComponent from './component/NavbarComponent'

import HomeHeader from './component/HomeHeader/HomeHeader'
import HomeContent from './component/HomeContent/HomeContent'
const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
       <HomeContent />
    </>
  )
}

export default Home
