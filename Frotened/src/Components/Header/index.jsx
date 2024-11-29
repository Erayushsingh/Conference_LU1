import React from 'react'

import LowerHeader from '../LowerHeader'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import HeaderUpper from '../HeaderUpper'

const Header = () => {
  return (
    <>
      <HeaderUpper/>
      <LowerHeader />
      <HeroSection />
      <Footer />
    </>
  )
}

export default Header;
