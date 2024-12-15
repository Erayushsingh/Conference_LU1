import React from 'react'
import HeaderUpper from '../../Components/HeaderUpper'
import LowerHeader from '../../Components/LowerHeader'
import Footer from '../../Components/Footer'

const AboutConference = () => {
  return (
    <>
    <HeaderUpper/>
    <LowerHeader/>
    <div className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:text-2xl">
        {/* Title Section */}
        <h1 className="text-2xl font-semibold text-center mb-6 sm:text-3xl md:text-[2.02rem]">
          Recent Advances in Applied Science and Humanities in the Evolution of Engineering
        </h1>

        {/* Main Content Section */}
        <div className="prose text-xl lg:prose-xl mx-auto">
          <p>
            Basic sciences like Mathematics, Physics, and Chemistry are at the foundation of all branches of engineering and technology. The fundamental concepts of basic sciences are applied by engineers to solve problems posed by NATURE in our day-to-day lives. The basic sciences, thus, help us to develop various technologies and these technologies, in turn, help us to engineer the materials and resources for the well-being of humanity. Thus, basic sciences are often termed as Applied Sciences.
          </p>

          <p>
            While the basic sciences provide the knowledge required for ensuring the physical well-being of mankind, knowledge provided by various branches of Humanities helps us in dealing with our social well-being. Our linguistic capabilities, imagination, and psychological and sociological traits ultimately further our learning abilities, propagate knowledge, as well as explore technology to create a newer vision for the world. Thus, Humanities is a canvas painted in the gradients of morals and technology amalgamated with a humanistic approach over abiotic components.
          </p>

          <p>
            Furthermore, humans have shown impeccable strength in accepting their shortcomings, modifying their approach, and diving deeper into nature’s pool in order to explore that tiny support that engineering requires in its evolution process.
          </p>

          <p>
            The core discussion here would be if the recent trends in applied sciences and humanities have it in them to prepare and support modern engineering as they have perpetually been doing. If yes, what and how do those trends help in doing so? If not, then what and how are the course corrections required? Therefore, the title “Recent Advances in Applied Science and Humanities in the Evolution of Engineering”.
          </p>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  )
}

export default AboutConference