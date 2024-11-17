import React from 'react'
import gatePhoto from '/src/assets/Lu-main.jpg'
import AbstractSubmission from '../../Pages/AbstractSubmission'
import RegisterButton from '../../Pages/RegisterButton'

const HeroSection = () => {
  return (
    <>
      <div className=''>
        <img src={gatePhoto} className='w-full' />
      </div>
      <div className='h-48 bg-black text-white flex justify-between items-center '>
        <div className='w-[50%] flex flex-col items-end border-b-red-700 border-b-8 h-full justify-center '>
          <div>
            <h1 className='text-5xl bold font-bold'>RAASHEE - 25</h1>
            <p>International Conference on Recent Advances in</p>
            <p> Applied Science & Humanities in Evolution of Engineering</p>
          </div>
        </div>
        <div className='flex justify-between w-[40%] items-center mr-6'>
          <div className='flex flex-col inline-block'>
            <div className='inline-block'>
              <p className='font-bold'>Event Dates:</p>
              <p>June 10-12, 2024</p>
            </div>
            <div className='inline-block'>
              <p className='font-bold'>Abstract Dates:</p>
              <p>June 18, 2024</p>
            </div>
          </div>

          <div className="text-black mb-28 flex mt-40">
            <AbstractSubmission className="border-2 border-red-500" />
            <RegisterButton className="border-2 border-red-500" />
          </div>

        </div>

      </div>
    </>
  )
}

export default HeroSection