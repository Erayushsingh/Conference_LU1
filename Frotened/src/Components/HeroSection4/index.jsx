import React from 'react'

const HeroSection4 = () => {
  return (
    <>
      <div className='w-full flex justify-center mt-10 mb-10'>
        <div className='w-[80%]  flex justify-between'>
          <div className='w-[45%]'>
            <h1 className='text-4xl font-semibold'>Key dates</h1>
            <div className='border-2 border-black mt-10'>
              <div className='p-3 border-b-2 border-dashed border-black ml-3'>
                <p className='text-lg font-bold  text-red-400 animate-flash '>Abstracts (Round 1)</p>
                <p>30 November 2024</p>
              </div>
              <div className='p-3 border-b-2 border-dashed border-black ml-3'>
                <p className='text-gray-500 font-bold text-lg'>Feedback</p>
                <p>30 November 2024</p>
              </div>
              <div className='p-3  ml-3'>
                <p className='text-gray-500 font-bold text-lg'>Conference</p>
                <p>30 November 2024</p>
              </div>
            </div>
            <div className='border-2 border-black mt-10'>
              <div className='p-3 border-b-2 border-dashed border-black ml-3'>
                <p  className='text-gray-500 font-bold text-lg'>Full Paper Submissions</p>
                <p>30 November 2024</p>
              </div>
              <div className='p-3 border-b-2 border-dashed border-black ml-3'>
                <p className='text-gray-500 font-bold text-lg'>Full Paper Resubmissions</p>
                <p>30 November 2024</p>
              </div>
              <div className='p-3  ml-3'>
                <p className='text-gray-500 font-bold text-lg'>Publications</p>
                <p>30 November 2024</p>
              </div>
            </div>
          </div>
          <div className='w-[45%]'>
            <h1  className='text-4xl font-semibold'>Themes</h1>
            <div className='border-2 border-black mt-10'>
              <div className='border-b-2 border-black p-3'>
                <p className='font-bold text-lg'>Teaching & Learning</p>
                <p>Methods & Modalities in classrooms, studios & the real-world</p>
              </div>
              <div className='border-b-2 border-black p-3'>
                <p className='font-bold text-lg'>Art & Design</p>
                <p>Creative Practice – Creative Pedagogy</p>
              </div>
              <div className='border-b-2 border-black p-3'>
                <p className='font-bold text-lg'>Humanities & Social Sciences</p>
                <p>Critical Thinking & Explorative Learning</p>
              </div>
              <div className='border-b-2 border-black p-3'>
                <p className='font-bold text-lg'>Environmental Studies</p>
                <p>Socially Engaged Teaching & Learning</p>
              </div>
              <div className='border-b-2 border-black p-3'>
                <p className='font-bold text-lg'>Science & Technology</p>
                <p>Digital Turn & AI in the modern academy</p>
              </div>
              <div className=' p-3'>
                <p className='font-bold text-lg'>Health & Wellbeing</p>
                <p>Student Support & Inclusive Teaching</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=' flex justify-center mb-24'>
        <div className='h-2 w-[80%] bg-black mb-10'></div>
      </div>

    </>
  );
}

export default HeroSection4