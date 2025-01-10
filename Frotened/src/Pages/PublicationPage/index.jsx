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
              should send their abstract latest by 20 December, 2024. Acceptance
              of paper/poster to be presented and published shall be notified
              within 15 days to the corresponding author.
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
        <h2 className="text-3xl md:text-3xl mt-10 font-extrabold text-center text-gray-800 mb-6">
          Peer Review Process
        </h2>
        <p className="text-lg text-black mb-4 md:mb-0 md:text-lg md:leading-8 flex justify-center">
          <div className="w-[80%]">
            <p>
              <span className="font-bold">Step I:</span> Paper received by
              Editor-in-Chief for checking the title and abstract for relevance
              against the conference theme (rejected if no relevance found)
            </p>
            <p>
              <span className="font-bold">Step II:</span> Sent to field specific
              Editor for further process. Editor conducts first plag-check.
              (Criteria I: if plag is less than 10%, the manuscript is sent to
              three specific peers to review and once accepted by first two then
              communicated to author as ‘under review’; If plag is between 10%
              and 20%, the manuscript is sent back to author for improvement;
              and if plag is more than 20%, manuscript is rejected and
              communicated to author)
            </p>
            <p>
              <span className="font-bold">Step III:</span> Once first two
              reviews are received, the editor compiles reviews and notes
              comments and sends back to author for revision in the manuscript.
            </p>
            <p>
              <span className="font-bold">Step IV:</span> If revised manuscript
              is found satisfactory, the editor accepts it for publication.
              Else, the revised manuscript is sent to the same peer reviewers
              for their review.
            </p>
            <p>
              <span className="font-bold">Step V:</span> Once satisfied by the
              peers the manuscript publication is decided by the Editor. Else,
              the manuscript is sent back to the author with additional comments
              by the Editor for further revision. However, if the peers are not
              satisfied with the revised manuscript, the Editor rejects it and
              communicates the same to the author.
            </p>
            <p>
              <span className="font-bold">Step VI:</span> Upon receipt of
              re-revised manuscript, the editor takes final decision
            </p>
          </div>
        </p>
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
                  <td className="border px-4 py-2">15 January 2025</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Abstract Acceptance Notification
                  </td>
                  <td className="border px-4 py-2">15 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Full Paper Submission</td>
                  <td className="border px-4 py-2">25 January, 2025</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Paper Acceptance Notification
                  </td>
                  <td className="border px-4 py-2">10 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">
                    Last date for Registration
                  </td>
                  <td className="border px-4 py-2">25 January 2025</td>
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
            <td className="border border-gray-300 px-2 py-2">Prof. Ajit M. Srivastava</td>
            <td className="border border-gray-300 px-2 py-2">Physics</td>
            <td className="border border-gray-300 px-2 py-2">Detecting gravitational waves with rotating neutron stars as resonant Weber detectors</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">2</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Shefali Vaidya</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Flexible and luminescent fibers of Au(I)-thiolate coordination polymers</td>
            <td className="border border-gray-300 px-2 py-2">Czech Republic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">3</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Santu Mondal</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Top-Quark Pair Production in Heavy-ion Collisions in the ATLAS</td>
            <td className="border border-gray-300 px-2 py-2">Czech Republic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">4</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Vimal Kumar Vishwakarma</td>
            <td className="border border-gray-300 px-2 py-2">English</td>
            <td className="border border-gray-300 px-2 py-2">A Study of Forensic Linguistics: Bridging the Gap Between Language and Law in India’s Legal System</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">5</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Saroj Kumar</td>
            <td className="border border-gray-300 px-2 py-2">English</td>
            <td className="border border-gray-300 px-2 py-2">Assessing the Feasibility of Recognising English as One of the Indian Languages: Scope and Challenges</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">6</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Vinod Pal & Dr. Milan Swarup Sharma</td>
            <td className="border border-gray-300 px-2 py-2">English</td>
            <td className="border border-gray-300 px-2 py-2">Teaching and Learning through Actions - an essential change in primary Education</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">7</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Sangeet Ranjan Natwar</td>
            <td className="border border-gray-300 px-2 py-2">English</td>
            <td className="border border-gray-300 px-2 py-2">The Role of English Literature in Digital Humanities and Engineering</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">8</td>
            <td className="border border-gray-300 px-2 py-2">Dr. Bindunath Jha</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Seeing through Ecological Consciousness in Tribal Literature: Poems of Haldhar Nag and Anuj Lugun</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">9</td>
            <td className="border border-gray-300 px-2 py-2">Ms. Supriya Yadav</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Redefining Work in the Age of Smart Technologies- Industry 4.0: Thriving in Disruption?</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">10</td>
            <td className="border border-gray-300 px-2 py-2">Raghvendra Pratap Singh</td>
            <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Impact of Awareness Programs for vaccination on the spread of infectious disease</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">11</td>
            <td className="border border-gray-300 px-2 py-2">Mustaq Ahmad</td>
            <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Dynamic Modeling and Control of Hepatitis B Spread: Integrating Harmonic mean Incidence and Vertical Transmission Factors</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">12</td>
            <td className="border border-gray-300 px-2 py-2">Mohd Saif Ashraf</td>
            <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Exploring Generative Adversarial Networks for Enhancing Low Resource NLP Tasks</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">13</td>
            <td className="border border-gray-300 px-2 py-2">Dwipayan Dutta Roy</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">The Drowned Worlds: Exploring the Intersection of Climate Change, Migration and Capitalism in Abdulrazak Gurnah’s Paradise and By the Sea</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">14</td>
            <td className="border border-gray-300 px-2 py-2">Sarojit Kapasi</td>
            <td className="border border-gray-300 px-2 py-2">Humanities & Management Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Risk and Resilience in the Adoption of New Agrarian Technology by Rural Families: An Ethnographic Study of East Barddhman District</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-center px-2 py-2">15</td>
            <td className="border border-gray-300 px-2 py-2">Sakina Rizvi</td>
            <td className="border border-gray-300 px-2 py-2">Mathematical Sciences</td>
            <td className="border border-gray-300 px-2 py-2">Deep Learning in measure theory</td>
            <td className="border border-gray-300 px-2 py-2">India</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style jsx>{`

  .table-wrapper {
    width: 100%;
    overflow-y: auto; /* Only vertical scrolling */
    max-height: 400px; /* Adjust as necessary */
  }

  /* For mobile screens (width 640px or less) */
  @media (max-width: 640px) {
    .table-wrapper {
      max-height: 600px; /* Adjust the max height to show the scrollbar */
    }

  .table-wrapper td:first-child,
    .table-wrapper th:first-child {
      display: none;
    }  
  }
`}</style>

    

      <Footer />
    </>
  );
};

export default PublicationPage;
