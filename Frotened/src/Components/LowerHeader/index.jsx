import React from 'react'

const LowerHeader = () => {
  return (
    <>
        <div className=' bg-blue-300 flex justify-around p-2 text-lg border-b-4 border-red-400'>
          <a href="/">Home</a>
          <a href="/conference">Conference</a>
          <a href="/publications">Publication</a>
          <a href="/research">Research</a>
          <a href="/awards">Awards</a>
          <a href="/about-us">Who we are</a>
       </div>
    </>
  )
}

export default LowerHeader