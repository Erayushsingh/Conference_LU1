// import React from 'react'
// import Logo2 from '/src/assets/mid-logo.png'
// import Logo1 from '/src/assets/Lu-rank.jpg'
// import Logo3 from '/src/assets/A++.jpeg'


// import LowerHeader from '../LowerHeader'
// import HeroSection from '../HeroSection'
// import Footer from '../Footer'



// const Header = () => {
//   return (
//     <>
//        <div className='  w-full flex justify-between p-1 border-b-4 border-red-400'> 
//         <img src={Logo1} className='h-16 mt-4 ml-2' />
//         <img src={Logo2} className='h-20 mt-4' />
//         <img src={Logo3} className='h-16 mt-4 mr-2'/>
//        </div>

//        <LowerHeader></LowerHeader>
//        <HeroSection></HeroSection>
//        <Footer></Footer>    
//     </>
//   )
// }

// export default Header

import React from 'react'

import LowerHeader from '../LowerHeader'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import HeaderUpper from '../HeaderUpper'

const Header = () => {
  return (
    <>
      <HeaderUpper/>

      {/* Lower Header Section */}
      <LowerHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default Header;
