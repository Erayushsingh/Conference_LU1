import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';


const ConferencePage = () => {
  return (
    <>
       <HeaderUpper/>
       <LowerHeader/>

       {/* Conference Tracks Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-black mb-8 animate-flash">
            Conference Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Column: Track 1, Track 2, Track 3 */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-red-500 mb-4 border-b-2 border-dotted border-gray-400 pb-2 ">TRACK 1– Physical Sciences</h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>Synthesis and Characterization of Nanomaterials</li>
                <li>Nanostructured Materials</li>
                <li>Solar cells</li>
                <li>Chemical Sensors</li>
              </ul>

              <h3 className="text-2xl font-bold text-rose-700 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2 ">TRACK 2– Chemical Sciences</h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>Green Chemistry</li>
                <li>Medicinal Chemistry</li>
                <li>Computational Chemistry</li>
                <li>Modern Spectroscopic Techniques</li>
                <li>Nanomaterials</li>
                <li>Biochemistry</li>
                <li>Pharmaceutical Chemistry</li>
              </ul>

              <h3 className="text-2xl font-bold text-red-900 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2">TRACK 3– Mathematical Sciences</h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>Applied Mathematics</li>
                <li>Mathematical Modeling</li>
                <li>Fuzzy Mathematics</li>
                <li>Differential Equations</li>
                <li>Topology</li>
                <li>Algebra</li>
                <li>Probability and Statistics</li>
                <li>Applied Statistics Inference</li>
                <li>Sampling Techniques</li>
                <li>Numerical Techniques</li>
                <li>Operation Research</li>
                <li>Graph Theory</li>
                <li>Optimization Techniques etc.</li>
                <li>Fluid Mechanics</li>
              </ul>
            </div>

            {/* Right Column: Track 4 (Humanities & Management Sciences) */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-red-950 mb-4 border-b-2 border-dotted border-gray-400 pb-2">TRACK 4– Humanities & Management Sciences</h3>
              <h4 className="text-xl font-bold text-indigo-600 mb-4">English, Psychology, Sociology and Communication Studies:</h4>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>European Languages and Literatures</li>
                <li>Comparative Literature</li>
                <li>Literary Theories</li>
                <li>Diaspora/Gender/Culture studies</li>
                <li>Linguistics</li>
                <li>Language Politics and Education</li>
                <li>Forensic Linguistics</li>
                <li>Latin American Literature/Global South Literature</li>
                <li>Communication Studies/Life Skills</li>
                <li>Language and Translation Challenges</li>
                <li>Science Fiction</li>
                <li>ELT</li>
                <li>Value Education</li>
                <li>Sports and Psychology</li>
                <li>Risk and Resilience</li>
                <li>Challenges of 21st Century: Democracy, Environment, Inequalities, Inter-sectionality</li>
                <li>Emotion, reliance and well being</li>
                <li>Mental Health and COVID19: Life after the pandemic</li>
                <li>Psychological problems of children and adolescents</li>
              </ul>

              <h4 className="text-xl font-bold text-indigo-600 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2">Management:</h4>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>HRM</li>
                <li>Marketing</li>
                <li>Brand Management</li>
                <li>Financial Economics</li>
                <li>Consumer Behavior</li>
                <li>E-commerce & management</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default ConferencePage;
