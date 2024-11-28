import React from 'react'
import Logo2 from '/src/assets/mid-logo.png'
import Logo1 from '/src/assets/Lu-rank.jpg'
import Logo3 from '/src/assets/A++.jpeg'

const HeaderUpper = () => {
  return (
    <>
      <div className=" h-24 w-full flex justify-between p-1 border-b-4 border-red-400">
        <img src={Logo1} className="h-16 mt-4 ml-2" />
        <img src={Logo2} className="h-16 mt-4" />
        <img src={Logo3} className="h-16 mt-4 mr-2" />
      </div>
    </>
  );
}

export default HeaderUpper