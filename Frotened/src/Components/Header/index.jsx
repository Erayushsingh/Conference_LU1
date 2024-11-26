import React from 'react'
import Logo2 from '/src/assets/mid-logo.png'
import Logo1 from '/src/assets/Lu-rank.jpg'
import Logo3 from '/src/assets/A++.jpeg'


import LowerHeader from '../LowerHeader'
import HeroSection from '../HeroSection'
import HeroSection2 from '../HeroSection2'
import HeroSection3 from '../HeroSection3'
import HeroSection4 from '../HeroSection4'
import HeroSection5 from '../HeroSection5'
import Footer from '../Footer'


const Header = () => {
  return (
    <>
       <div className=' h-24 w-full flex justify-between p-1 border-b-4 border-red-400'> 
        <img src={Logo1} className='h-16 mt-4 ml-2' />
        <img src={Logo2} className='h-16 mt-4' />
        <img src={Logo3} className='h-16 mt-4 mr-2'/>
       </div>

       <LowerHeader></LowerHeader>
       <HeroSection></HeroSection>
       <HeroSection2></HeroSection2>
       <HeroSection3></HeroSection3>
       <HeroSection4></HeroSection4>
       <HeroSection5></HeroSection5>
       <Footer></Footer>    
    </>
  )
}

export default Header