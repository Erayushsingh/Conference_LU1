// import React from 'react'
// import Logo2 from '/src/assets/mid-logo.png'
// import Logo1 from '/src/assets/Lu-rank.jpg'
// import Logo3 from '/src/assets/A++.jpeg'

// const HeaderUpper = () => {
//   return (
//     <>
//       <div className=" h-24 w-full flex justify-between p-1 border-b-4 border-red-400">
//         <img src={Logo1} className="h-16 mt-4 ml-2" />
//         <img src={Logo2} className="h-16 mt-4" />
//         <img src={Logo3} className="h-16 mt-4 mr-2" />
//       </div>
//     </>
//   );
// }

// export default HeaderUpper


import React from 'react'
import Logo2 from '/src/assets/mid-logo.png'
import Logo1 from '/src/assets/Lu-rank.jpg'
import Logo3 from '/src/assets/A++.jpeg'

const HeaderUpper = () => {
  return (
    <>
      <div className=" w-full flex justify-between items-center p-2 border-b-4 border-red-400 box-border">
        <img src={Logo1} className="h-12 sm:h-16 md:h-20 lg:h-24 mt-4 ml-2" alt="Logo 1" />
        <img src={Logo2} className="h-12 sm:h-16 md:h-12 lg:h-24 mt-4" alt="Logo 2" />
        <img src={Logo3} className="h-12 sm:h-16 md:h-20 lg:h-24 mt-4 mr-2" alt="Logo 3" />
      </div>
    </>
  );
}

export default HeaderUpper;
