import React from 'react'
import Logo2 from '/src/assets/mid-logo.png'
import Logo1 from '/src/assets/CrownLogo.jpeg'
import Logo3 from '/src/assets/Raashee.jpg'
import Logo4 from '/src/assets/Raashee_Logo.svg'

const HeaderUpper = () => {
  return (
    <>
      <div className="md:h-28 w-full flex justify-between items-center p-2  box-border">
        <img src={Logo1} className="h-12 sm:h-16 md:h-15 lg:h-[5.27rem] ml-2" alt="Logo 1" />
        <img src={Logo2} className="h-12 sm:h-16 md:h-20 lg:h-20 " alt="Logo 2" />
        <div className='rounded-[50%] overflow-hidden mr-2'>
          <img src={Logo4} className="h-12 sm:h-16 md:h-15 lg:h-20 bg-black " alt="Logo 3" />
        </div>
        
      </div>
      <div className='p-2 text-center font-bold text-[10px] lg:text-[1.3rem] text-red-950 bg-gray-300'>
      An International Conference on Recent Advances in Applied Science & Humanities in Evolution of Engineering
      </div>
    </>
  );
}

export default HeaderUpper;
