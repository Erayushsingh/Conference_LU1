import React from 'react'

const HeroSection2 = () => {
  return (
    <>
      <div className='flex justify-center mt-2 mb-36'>
        <div className='h-48 w-[80%] bg-gray-800 text-white'>
            <div className='flex items-center '>
              <div className='p-16 mr-8'>
                <h1 className='text-5xl font-extrabold inline-block'>RAASHEE</h1>
              </div>
              <div className=' pl-10 pr-10  border-l-4 border-white leading-7 font-bold text-xl'>
                <p>FOET, University of Lucknow and RAASHEE</p>
                <p>A conference on research and teaching</p>
              </div>
            </div>
            <div className='bg-red-600 text-center p-1'>Part of the Routledge Focus on Pedagogy Series</div>
        </div>
      </div>
    </>
  )
}

export default HeroSection2