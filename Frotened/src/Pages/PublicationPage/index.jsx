import React from "react";
import HeaderUpper from "../../Components/HeaderUpper";
import LowerHeader from "../../Components/LowerHeader";
import Footer from "../../Components/Footer";

const PublicationPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      {/*Abstract Submission*/}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-black mb-8">
            Abstract Submission
          </h2>
          <div className="text-lg md:text-xl text-gray-700 space-y-6">
            <p>
              1. Participants are required to register by paying the applicable
              registration fees.
            </p>
            <p>
              2. Please log in using your registered credentials to submit your
              abstract.
            </p>
            <p>
              3. Complete the abstract submission form with the necessary
              details.
            </p>

            <p className="text-red-700 font-semibold">
              <strong>Important Note:</strong> Please ensure that all
              information provided during registration is accurate and truthful.
              Any discrepancies or false information may result in the
              cancellation of your registration and restricted access to our
              services. We highly recommend reviewing your details before
              submission to avoid any issues.
            </p>
            <div className="md:flex-row md:flex flex-col justify-around ">
              <div className="md:w-[40%] mb-7">
                <h2 className="text-gray-700 mb-6 text-2xl font-bold">
                  How to Register ?
                </h2>
                <iframe
                  className="w-full "
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/kjLgij5qgzI?si=PQrtt074gFrkEcWu"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="md:w-[40%]">
                <h2 className="text-gray-700 mb-6 lg:text-2xl text-[1.1rem] font-bold">
                  How to Login And Submit Abstract ?
                </h2>
                <iframe
                  className="w-full "
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/alCq8qo1bws?si=BSgDq4H9Z3eyb5Qk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Paper Submission Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-black mb-8">
            Abstract Submission Format
          </h2>
          <div className="text-lg md:text-xl text-gray-700 space-y-6">
            <p>
              Participants desirous to present a paper/poster in the conference
              should send their abstract latest by 31 January, 2025. Acceptance
              of paper/poster to be presented and published shall be notified
              within 5 days to the corresponding author.
            </p>
            <p>
              The abstract must not exceed 150 words, should be neatly typed in
              Times New Roman (12p) within 25x15 cm on A4 size paper with single
              spacing and five keywords. Full papers must be formatted as per
              recent APA standard manual and must fall within 4,000-6,000 words.
            </p>
            <p>
              Abstract and paper should be sent only in MS-Word (.docx) format
              along with duly filled Registration form and Registration fee
              receipt.
            </p>
            <p>
              In the paper, name of corresponding author should be marked with
              asterisk (*), name of presenting author should be underlined, and
              it must also include the affiliations of all authors along with
              email address(s) as footnote. Full papers will be invited for
              oral/poster presentations (once accepted) in hybrid mode.
            </p>
            <p>
              Only one author per paper whose name has been underlined will be
              allowed to present paper and receive a presentation certificate.
              Other co-authors, if registered, will receive the participation
              certificate. Best oral/poster presentations will be awarded.
            </p>
            <p>
              <strong className="text-red-400">
                Please attach the abstract file drive link in the specified
                format to the abstract submission form and submit your abstract.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-extrabold text-center text-black mb-8">
            Full Paper Submission
          </h2>
          <h2 className="text-lg font-bold  text-black mb-8">
            If you wish to submit the full paper, mail us at:{" "}
            <a href="mailto:raashee.foet@gmail.com" class="text-blue-500">
              raashee.foet@gmail.com
            </a>
          </h2>
          <p className="text-lg  ">
            Please mention the following details in the subject line of the
            email:
            <ul className="list-inside ">
              <li>&lt;Track&gt;</li>
              <li>&lt;Name of Corresponding Author&gt;</li>
              <li>&lt;Affiliation, Running Title&gt;</li>
            </ul>
          </p>
          <p className="text-lg">
            Papers to be attached must be named as:
            <ul className="list-inside space-y-2">
              <li>&lt;Track&gt;: &lt;Running Title of the Paper&gt;</li>
            </ul>
          </p>
          <p className="text-lg">
            Please submit a scanned copy of the certificate along with your full
            paper.
          </p>
          <div>
            <a
              href="/assets/Copyright.pdf"
              download
              className="text-blue-500 underline font-bold "
            >
              For Copyright
            </a>
            <a
              href="/assets/publication.pdf"
              download
              className="text-blue-500 underline ml-5 font-bold"
            >
              Publication Ethics
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 my-8 w-full sm:w-4/5 mx-auto">
        <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Accommodation
        </h2>

        <p className="text-lg text-black mb-4 md:mb-0 md:text-lg md:leading-8">
          Accommodation will be provided to the candidates on an actual payment
          basis with prior information. Participants are requested to intimate
          their preference for accommodation at the earliest possible so that
          organizers can reserve the accommodation based on availability.
        </p>

        <p className="text-lg text-gray-700 mb-4 md:mb-0  md:text-lg md:leading-8">
          There are limited rooms available in the University Guest House. Once
          the Guest House is full, participants will be accommodated in hotels
          nearby the campus.
        </p>

        <p className="text-lg text-gray-700 mb-6 md:mb-0 md:text-lg md:leading-8">
          Please bring a valid ID for verification at the reception.
        </p>
      </div>

      {/* Important Dates Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-black mb-8">
            Important Dates
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">
                    Event
                  </th>
                  <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Abstract Submission (Oral & Poster)
                  </td>
                  <td className="border px-4 py-2">31 January 2025</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Abstract Acceptance Notification
                  </td>
                  <td className="border px-4 py-2">5 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Full Paper Submission</td>
                  <td className="border px-4 py-2">31 January, 2025</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Paper Acceptance Notification
                  </td>
                  <td className="border px-4 py-2">5 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Last date for Registration
                  </td>
                  <td className="border px-4 py-2">31 January 2025</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">On-the-spot Registration</td>
                  <td className="border px-4 py-2">07 February 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Registration Fee Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full sm:w-[80%] mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-black mb-6">
          Registration Fee
        </h2>

        <div className="overflow-x-auto">
          {" "}
          {/* Makes table horizontally scrollable on smaller screens */}
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white md:text-2xl">
                <th className="px-4 py-3 text-left text-sm sm:text-base">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">
                  Paper Presentation (INR/USD)
                </th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">
                  Attendee (INR/USD)
                </th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">
                  On-the-Spot Registration (INR/USD)
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {/* Students Row */}
              <tr className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-4 font-semibold text-sm sm:text-base">
                  Students (UG/PG/Research)
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  1000 INR / 100 USD
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  1000 INR / 100 USD
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  1500 INR / 110 USD
                </td>
              </tr>

              {/* Academician/Industry Row */}
              <tr className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-4 font-semibold text-sm sm:text-base">
                  Academician/Industry
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  2000 INR / 150 USD
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  2000 INR / 150 USD
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  2500 INR / 160 USD
                </td>
              </tr>

              {/* Academician/Industry Row */}
              <tr className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-4 font-semibold text-sm sm:text-base">
                  Volunteer/Attendee
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  ----
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  500 INR
                </td>
                <td className="px-4 py-4 text-sm sm:text-base">
                  ----
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full sm:w-[80%] mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-black mb-6">
          Abstracts Submitted So Far
        </h2>
        <div className="overflow-auto flex justify-center mb-8">
          <div className="table-wrapper">
            <table className="table-auto border-collapse border border-gray-300 bg-white text-sm">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Abstract Title</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Country of Origin</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">1</td>
                  <td className="border border-gray-300 px-2 py-2">Prof. Vijay Prakash Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Travel literature: Expanding the Frontiers across Disciplines</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">2</td>
                  <td className="border border-gray-300 px-2 py-2">Prof. Ajit M. Srivastava</td>
                  <td className="border border-gray-300 px-2 py-2">Physics</td>
                  <td className="border border-gray-300 px-2 py-2">Detecting gravitational waves with rotating neutron stars as resonant Weber detectors</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">3</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Shefali Vaidya</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Flexible and luminescent fibers of Au(I)-thiolate coordination polymers</td>
                  <td className="border border-gray-300 px-2 py-2">Czech Republic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">4</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Santu Mondal</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Top-Quark Pair Production in Heavy-ion Collisions in the ATLAS</td>
                  <td className="border border-gray-300 px-2 py-2">Czech Republic</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">5</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Akhilesh Kr. Sharma</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">English Language Teaching in Uttar Pradesh: A Critical Study</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">6</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Vimal Kumar Vishwakarma</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">A Study of Forensic Linguistics: Bridging the Gap Between Language and Law in India’s Legal System</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">7</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Saroj Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Assessing the Feasibility of Recognising English as One of the Indian Languages: Scope and Challenges</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">8</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Vinod Pal & Dr. Milan Swarup Sharma</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">A critical study on syllabus and curriculum of English at the primary and the secondary levels of Rohilkhand region (Uttar Pradesh).</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">9</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Sangeet Ranjan Natwar</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">The Role of English Literature in Digital Humanities and Engineering</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">10</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Bindunath Jha</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Seeing through Ecological Consciousness in Tribal Literature: Poems of Haldhar Nag and Anuj Lugun</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">11</td>
                  <td className="border border-gray-300 px-2 py-2">Ms. Supriya Yadav</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Redefining Work in the Age of Smart Technologies- Industry 4.0: Thriving in Disruption?</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">12</td>
                  <td className="border border-gray-300 px-2 py-2">Raghvendra Pratap Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Impact of Awareness Programs for vaccination on the spread of infectious disease</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">13</td>
                  <td className="border border-gray-300 px-2 py-2">Mustaq Ahmad</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Dynamic Modeling and Control of Hepatitis B Spread: Integrating Harmonic mean Incidence and Vertical Transmission Factors</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">14</td>
                  <td className="border border-gray-300 px-2 py-2">Mohd Saif Ashraf</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Exploring Generative Adversarial Networks for Enhancing Low Resource NLP Tasks</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">15</td>
                  <td className="border border-gray-300 px-2 py-2">Dwipayan Dutta Roy</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">The Drowned Worlds: Exploring the Intersection of Climate Change, Migration and Capitalism in Abdulrazak Gurnah’s Paradise and By the Sea</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">16</td>
                  <td className="border border-gray-300 px-2 py-2">Sarojit Kapasi</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Risk and Resilience in the Adoption of New Agrarian Technology by Rural Families: An Ethnographic Study of East Barddhman District</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">17</td>
                  <td className="border border-gray-300 px-2 py-2">Sakina Rizvi</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Deep Learning in measure theory</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">18</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Saroj Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Assessing the Feasibility of Recognising English as One of the Indian Languages: Scope
                    and Challenges</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">19</td>
                  <td className="border border-gray-300 px-2 py-2">Prabha Devi</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Issues and Challenges in the Teaching of Writing Skill</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">20</td>
                  <td className="border border-gray-300 px-2 py-2">Akash Sachan, Rajat Kumar Mishra, Chandkiram Gautam</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Doping Effects of Na2O on Physical, Structural, Optical, and Bioactive properties of SrO-SiO2-ZrO2 Glasses for Biomedical Applicationsl</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">21</td>
                  <td className="border border-gray-300 px-2 py-2">Swati Domaji Kharabe, Beena Bundela, Manish Kumar Bansal</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Summation Formulae Associated with the Extension of Voigt Function and Bessel-Maitland Function and Its Applications</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">22</td>
                  <td className="border border-gray-300 px-2 py-2">Smita Jain , Beena Bundela</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Assessment the quality of Water for the River Ganga by using Multivariate and WQI techniques</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">23</td>
                  <td className="border border-gray-300 px-2 py-2">Seema Sharma, Beena Bundela*</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Revolutionizing Cyber security: The Role of Quantum Machine Learning in Enhancing Defense Mechanisms</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">24</td>
                  <td className="border border-gray-300 px-2 py-2">Shubhanshu Srivastava, Vijay Pratap Singh, Amrendra Kumar Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Organo-Catalysed Green Synthesis of Some Bioactive Isoxazoles Motif and Study on Their Antibacterial/AntifungalActivity</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">25</td>
                  <td className="border border-gray-300 px-2 py-2">Vijay Pratap Singh, Amrendra Kumar Singh, Vipin Kumar Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Organo-Catalyzed Stereoselective Synthesis, Characterization and Evaluation of Biological Activity of Spirocyclic Pyrazolones</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">26</td>
                  <td className="border border-gray-300 px-2 py-2">SHASHANK SHEKHAR SINGH</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">DEVELOPMENT OF ACTIVATED CARBON ADSORBENT FOR EFFECTIVE REMOVAL OF DYE FROM CONTAMINATED WATER</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">27</td>
                  <td className="border border-gray-300 px-2 py-2">Pawan Kumar Patel, Satya Deo, Satish Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Magnetohydrodynamic Flow of Immiscible Couple Stress and Jeffery Fluids in a Porous Pipe with Navier Slip Effect</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">28</td>
                  <td className="border border-gray-300 px-2 py-2">Ram Bharat Singh, Sandeep Kumar and Anil Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Stability and Perturbations of -Frame in Banach spaces</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">29</td>
                  <td className="border border-gray-300 px-2 py-2">Rajesh Kumar Singh and Dr. Upendra Gami</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Kalidasa's Abhijnansakuntalam: An Ecocritical Study</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">30</td>
                  <td className="border border-gray-300 px-2 py-2">Kritika Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Three-Layer Cylindrical Model for Mucus Flow Dynamics in Constricted Airways</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">31</td>
                  <td className="border border-gray-300 px-2 py-2">Ravi Kumar Gautam</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">The God of Small Things: The Impact of Trauma on Child Psychology</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">32</td>
                  <td className="border border-gray-300 px-2 py-2">Ekhlakh Veg</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences	</td>
                  <td className="border border-gray-300 px-2 py-2">Green Synthesis of α-Fe2O3 NPs by using Livistona chinensis leaf Extract and their antibacterial activity evaluation</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">33</td>
                  <td className="border border-gray-300 px-2 py-2">Kavita Dhariyal</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences	</td>
                  <td className="border border-gray-300 px-2 py-2">Perspectives of Medicinally Privileged Thiosemicarbazones based Metal Coordination Compounds as Antimicrobial agents</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">34</td>
                  <td className="border border-gray-300 px-2 py-2">Pragya Shukla</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Mental health topic, including effects of Covid-19 on Children and Adolescents</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">35</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Anand Ballabh Joshi and Sonam Yadav</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Steadfast Maritime Portfolio Management Security System with Lattices</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">36</td>
                  <td className="border border-gray-300 px-2 py-2">Anand B. Joshi and Sonali Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Transform Domain Based Digital Color Image Encryption Using Multi Chaotic Maps</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">37</td>
                  <td className="border border-gray-300 px-2 py-2">Anand Ballabh Joshi and Richa Sagar</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Digital images encryption using the Discrete Wavelet Transform and Baker’s chaotic map	</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">38</td>
                  <td className="border border-gray-300 px-2 py-2">Richa</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences	</td>
                  <td className="border border-gray-300 px-2 py-2">Between Cultures: Cultural Resonance in Pratibha Vinod Kumar and A.K. Kulshreshth’s English Translation of Chitralekha</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">39</td>
                  <td className="border border-gray-300 px-2 py-2">Shabanam Kumari , Arvind Kumar Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Chebyshev collocation method to solve the Thomas - Fermi equation</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">40</td>
                  <td className="border border-gray-300 px-2 py-2">Dr Kalpana Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">The Synergy between Corporate Culture and Communication in Organizational Excellence</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">41</td>
                  <td className="border border-gray-300 px-2 py-2">Anand B. Joshi and Bablu Das</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">SIEVE METHODS ON DIGITALLY DELICATE PRIME NUMBERS</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">42</td>
                  <td className="border border-gray-300 px-2 py-2">Avni Nayyar, Manaal Zahera, Archna Talwar</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Green Synthesis of Metal-Oxide Nanoparticles Utilizing a Biocompatible Stabilizer</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">43</td>
                  <td className="border border-gray-300 px-2 py-2">Shruti Anand</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Plant-Driven Green Synthesis of Silver Nanoparticles: A Step Towards Sustainable Nanotechnology</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">44</td>
                  <td className="border border-gray-300 px-2 py-2">Gaurav Kanti Sinha & Amisha Lal</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Cyber Crimes In Lucknow : A Critical Study</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">45</td>
                  <td className="border border-gray-300 px-2 py-2">PRAVESH KUMAR VISHWAKARMA</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Dielectric and phase behaviors of blue phase in cholesteryl benzoate</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">46</td>
                  <td className="border border-gray-300 px-2 py-2">Amar Bahadur Verma, Anil Kumar,Prashant Kumar Singh, Sindhu Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Synthesis and Characterization of Composites of ZnO and CaTiO3 for Bone Applications</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">47</td>
                  <td className="border border-gray-300 px-2 py-2">Rocky Kashyap, Ekta Sonker</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Synthesis of conjugated polymers by click polymerization techniques</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">48</td>
                  <td className="border border-gray-300 px-2 py-2">Anil Kumar, Ram Bharat Singh and Jyoti Sinha</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Modeling and Analysis of Hybrid Blood and Nano-fluid Flow in a Stenosis Artery</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">49</td>
                  <td className="border border-gray-300 px-2 py-2">Aparna Sharma, Desh Deepak and Shashi Bala*</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Structural analysis of a novel goat milk oligosaccharides beetose by 2D NMR and mass spectrometery</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">50</td>
                  <td className="border border-gray-300 px-2 py-2">Chandra shekhar Gangipelli1, Ganesh V 2 and 3</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Limits of Stability and Dynamic Transitions in Swirling Fluids</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">51</td>
                  <td className="border border-gray-300 px-2 py-2">Afra khan, Manisha Shukla, Desh Deepak</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Milk oligosaccharide as future drugs</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">52</td>
                  <td className="border border-gray-300 px-2 py-2">Shradha Jaiswal , Manisha Shukla and Desh Deepak	</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Structural Novelities in Milk Oligosaccharides Isolated from Cow Milk of Arid Zones of India.</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">53</td>
                  <td className="border border-gray-300 px-2 py-2">Ahmad Aldeib</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Double Integrals: Exploring Multivariable Calculus</td>
                  <td className="border border-gray-300 px-2 py-2">Syria</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">54</td>
                  <td className="border border-gray-300 px-2 py-2">Mazen Abass Abaker Goda</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Applications of Vector Calculus in Artificial Intelligence: Advancing Computational Efficiency and Predictive Modeling</td>
                  <td className="border border-gray-300 px-2 py-2">Sudan</td>
                </tr>


                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">55</td>
                  <td className="border border-gray-300 px-2 py-2">Anirudha Kumar Mondal</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematics</td>
                  <td className="border border-gray-300 px-2 py-2">Bangladesh</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">56</td>
                  <td className="border border-gray-300 px-2 py-2">Niloy Das</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Metrics in Artificial Intelligence: Foundations and Applications</td>
                  <td className="border border-gray-300 px-2 py-2">Bangladesh</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">57</td>
                  <td className="border border-gray-300 px-2 py-2">MD ARIFUR RAHMAN</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Exploring the Role of Leibnitz's and Euler's Theorems in Advancing Artificial Intelligence through Differential Calculus</td>
                  <td className="border border-gray-300 px-2 py-2">Bangladesh</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">58</td>
                  <td className="border border-gray-300 px-2 py-2">Chandra shekhar Gangipelli1, Ganesh V 2 and 3</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Limits of Stability and Dynamic Transitions in Swirling Fluids</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">59</td>
                  <td className="border border-gray-300 px-2 py-2">Afra khan, Manisha Shukla, Desh Deepak</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Milk oligosaccharide as future drugs</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">60</td>
                  <td className="border border-gray-300 px-2 py-2">Shradha Jaiswal , Manisha Shukla and Desh Deepak</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Structural Novelities in Milk Oligosaccharides Isolated from Cow Milk of Arid Zones of India</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">61</td>
                  <td className="border border-gray-300 px-2 py-2">Devanshi Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Relevance of forensic linguistics in global literature</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">62</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Sapna Devi, Ajeet Kumar Ram</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Modeling with the controlling effects of inorganic fertilizers, earthworm population and soil fertility on agricultural crop production</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">63</td>
                  <td className="border border-gray-300 px-2 py-2">Akanksha Yadav, Aparna Sharma, Namrata Singh and Shashi Bala</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Carbohydrates and Metal Nanoparticles: A New Perspective in Carbohydrate Research</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">64</td>
                  <td className="border border-gray-300 px-2 py-2">Unnati Singh manisha Shukla and Desh Deepak</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Identification of Monosaccharide Units in Oligosaccharides by Traditional and Physicochemical techniques</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">65</td>
                  <td className="border border-gray-300 px-2 py-2">Nidhi Pandya and Priyanka Kannoujia</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Two-Phase Flow of Jeffrey and Non-Jeffrey Fluids with Heat Transfer and no slip Condition in an Inclined Porous Channel</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">66</td>
                  <td className="border border-gray-300 px-2 py-2">Alok Kumar Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Comparative study of pollutants in River Garrha and River Khannaut in district Shahjahanpur, Uttar Pradesh</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">67</td>
                  <td className="border border-gray-300 px-2 py-2">Ms. Rohini Kumari, Prof. Renu Verma, Dr. Shikha Dutt Sharma</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">A Case Study on Empowering Women for Micro-Finance and Financial Literacy in Ghangola Village, Gurugram, Haryana</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">68</td>
                  <td className="border border-gray-300 px-2 py-2">Subohi Tabinda</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Healing Through Stories: The Role of Digital Storytelling in Healthcare</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">69</td>
                  <td className="border border-gray-300 px-2 py-2">Digvijay Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Effect on an image while changing the order of bivariate kernel functions using Sampling Kantorovich Operators</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">70</td>
                  <td className="border border-gray-300 px-2 py-2">Padum Kant Mishra, Ekta Gupta, Aniket Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Comparative Research on Nikhilam Sutra and Conventional Multiplication Algorithms.</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">71</td>
                  <td className="border border-gray-300 px-2 py-2">Sugandha Agarwal, Aniket Kumar</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Implementation and Performance Analysis of Vedic Multipliers on Nanoscale Power-Efficient FPGA Architectures</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">72</td>
                  <td className="border border-gray-300 px-2 py-2">SHYAM KISHOR and ANOOP KUMAR VERMA</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">On Special Weakly Conharmonic Symmetric Manifolds</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">73</td>
                  <td className="border border-gray-300 px-2 py-2">Abdul Gaffar and Anand Ballabh Joshi</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">A Technique for Securing Medical Images Based on Plastic Constant and Finite Field</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">74</td>
                  <td className="border border-gray-300 px-2 py-2">VIMLESH</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Stability Criteria for a System Involving Delays In Growth Response And Harvesting</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">75</td>
                  <td className="border border-gray-300 px-2 py-2">Atul Kumar Tiwari*, Prem C. Pandey</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Role of different polymer stabilized metal nanoparticle in fluorescein reporter based turn-off-on glutathione detection</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">76</td>
                  <td className="border border-gray-300 px-2 py-2">Prof. Audhesh Kumar, Vaishali Shukla</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Impact of Digital financial literacy on women entrepreneurs with special reference to Viksit Bharat</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">77</td>
                  <td className="border border-gray-300 px-2 py-2">Anmol Verma and Saurabh Kumar Singh</td>
                  <td className="border border-gray-300 px-2 py-2">Chemical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Synthesis of aceclofenac containing steroidal conjugates, their Spectroscopic, DFT, molecular docking and in vitro evaluation as anti-cancer agents against SiHa cells</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">78</td>
                  <td className="border border-gray-300 px-2 py-2">Shantanu Dubey</td>
                  <td className="border border-gray-300 px-2 py-2">Physical Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">AI-Based Weather Prediction Using Climate Physics Models</td>
                  <td className="border border-gray-300 px-2 py-2">India</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">79</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. S. A. Siddiqui</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Sustainability and Accounting: what is the state of research in sustainability reporting as it intersects with traditional accounting</td>
                  <td className="border border-gray-300 px-2 py-2">University of Regina, Canada</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">80</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Naila Erum</td>
                  <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
                  <td className="border border-gray-300 px-2 py-2">Digital Transformation, Artificial Intelligence and Economic Development</td>
                  <td className="border border-gray-300 px-2 py-2">University teknologi MARA (uitm),Malaysia</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">81</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Mohammad Nazrul Islam Khan</td>
                  <td className="border border-gray-300 px-2 py-2">Mathematics</td>
                  <td className="border border-gray-300 px-2 py-2">An Exploration of Tensors</td>
                  <td className="border border-gray-300 px-2 py-2">Qassim University, Saudi Arabia</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 text-center px-2 py-2">82</td>
                  <td className="border border-gray-300 px-2 py-2">Dr. Gopal Krishna Dixit</td>
                  <td className="border border-gray-300 px-2 py-2">Chemistry</td>
                  <td className="border border-gray-300 px-2 py-2">Machine learning assisted detection of RBC aggregates in blood flow.</td>
                  <td className="border border-gray-300 px-2 py-2">Grenoble, France</td>
                </tr>



              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`

  .table-wrapper {
    width: 100%;
    overflow-y: auto; 
    max-height: 400px; 
  }

  /* For mobile screens (width 640px or less) */
  @media (max-width: 640px) {
    .table-wrapper {
      max-height: 600px; 
    }

  .table-wrapper td:first-child,
    .table-wrapper th:first-child {
      display: none;
    }  
  }/* Adjust the max height to show the scrollbar */
`}</style>



      <Footer />
    </>
  );
};

export default PublicationPage;
