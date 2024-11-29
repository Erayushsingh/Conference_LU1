// import React from 'react';
// import HeaderUpper from '../../Components/HeaderUpper';
// import LowerHeader from '../../Components/LowerHeader';
// import Footer from '../../Components/Footer';



// const PublicationPage = () => {
//   return (
//     <>
//       <HeaderUpper />
//       <LowerHeader />

//       {/* Abstract Submission Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-extrabold text-center text-black mb-8">
//             Abstract Submission
//           </h2>
//           <div className="text-lg text-gray-700 space-y-6">
//             <p>
//               Participants desirous to present a paper/poster in the conference should send their abstract latest by 30 October, 2024. Acceptance of paper/poster to be presented and published shall be notified within 15 days to the corresponding author.
//             </p>
//             <p>
//               The abstract must not exceed 150 words, should be neatly typed in Times New Roman (12p) within 25x15 cm on A4 size paper with single spacing and five keywords. Full papers must be formatted as per recent APA standard manual and must fall within 4,000-6,000 words.
//             </p>
//             <p>
//               Abstract and paper should be sent only in MS-Word (.docx/Latex) format along with duly filled Registration form and Registration fee receipt.
//             </p>
//             <p>
//               In the paper, name of corresponding author should be marked with asterisk (*), name of presenting author should be underlined, and it must also include the affiliations of all authors along with email address(s) as footnote. Full papers will be invited for oral/poster presentations (once accepted) in hybrid mode.
//             </p>
//             <p>
//               Only one author per paper whose name has been underlined will be allowed to present paper and receive a presentation certificate. Other co-authors, if registered, will receive the participation certificate. Best oral/poster presentations will be awarded.
//             </p>
//             <p>
//               The abstracts should be sent to:
//               <a href="mailto:ash.foet2017@gmail.com" className="text-indigo-600 underline">
//                 ash.foet2017@gmail.com
//               </a>
//             </p>
//             <p>
//               <strong>Please mention the following details in the subject-line of the mail:</strong>
//               <ul className="list-inside space-y-2">
//                 <li><strong>&lt;Track&gt;</strong></li>
//                 <li><strong>&lt;Name of Corresponding Author&gt;</strong></li>
//                 <li><strong>&lt;Affiliation, Running Title&gt;</strong></li>
//               </ul>
//             </p>
//             <p>
//               <strong>Papers to be attached must be named as:</strong>
//               <ul className="list-inside space-y-2">
//                 <li><strong>&lt;Track&gt;: &lt;Running Title of the Paper&gt;</strong></li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 ">
//             Important Dates
//           </h2>

//           {/* Important Dates Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">Event</th>
//                   <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">Date</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">Abstract Submission (Oral & Poster)</td>
//                   <td className="border px-4 py-2">30 October 2024</td>
//                 </tr>
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">Abstract Acceptance Notification</td>
//                   <td className="border px-4 py-2">15 days from submission</td>
//                 </tr>
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">Full Paper Submission</td>
//                   <td className="border px-4 py-2">31 December 2024</td>
//                 </tr>
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">Paper Acceptance Notification</td>
//                   <td className="border px-4 py-2">15 days from submission</td>
//                 </tr>
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">Last date for Registration</td>
//                   <td className="border px-4 py-2">15 January 2025</td>
//                 </tr>
//                 <tr className="odd:bg-gray-100 even:bg-gray-200">
//                   <td className="border px-4 py-2">On-the-spot Registration</td>
//                   <td className="border px-4 py-2">07 February 2025</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </div>

//       {/* Registration Fee Section */}
//       <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-[80%] mx-auto">
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Registration Fee</h2>

//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-indigo-600 text-white">
//               <th className="px-6 py-3 text-left">Category</th>
//               <th className="px-6 py-3 text-left">Paper Presentation (INR/USD)</th>
//               <th className="px-6 py-3 text-left">Attendee (INR/USD)</th>
//               <th className="px-6 py-3 text-left">On-the-Spot Registration (INR/USD)</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {/* Students Row */}
//             <tr className="odd:bg-gray-50 even:bg-gray-100">
//               <td className="px-6 py-4 font-semibold">Students (UG/PG/Research)</td>
//               <td className="px-6 py-4">1000 INR / 100 USD</td>
//               <td className="px-6 py-4">1000 INR / 100 USD</td>
//               <td className="px-6 py-4">1500 INR / 110 USD</td>
//             </tr>

//             {/* Academician/Industry Row */}
//             <tr className="odd:bg-gray-50 even:bg-gray-100">
//               <td className="px-6 py-4 font-semibold">Academician/Industry</td>
//               <td className="px-6 py-4">2000 INR / 150 USD</td>
//               <td className="px-6 py-4">2000 INR / 150 USD</td>
//               <td className="px-6 py-4">2500 INR / 160 USD</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>


//       <Footer />
//     </>
//   );
// };

// export default PublicationPage;

import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const PublicationPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      {/* Abstract Submission Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-black mb-8">
            Abstract Submission
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Participants desirous to present a paper/poster in the conference should send their abstract latest by 30 October, 2024. Acceptance of paper/poster to be presented and published shall be notified within 15 days to the corresponding author.
            </p>
            <p>
              The abstract must not exceed 150 words, should be neatly typed in Times New Roman (12p) within 25x15 cm on A4 size paper with single spacing and five keywords. Full papers must be formatted as per recent APA standard manual and must fall within 4,000-6,000 words.
            </p>
            <p>
              Abstract and paper should be sent only in MS-Word (.docx/Latex) format along with duly filled Registration form and Registration fee receipt.
            </p>
            <p>
              In the paper, name of corresponding author should be marked with asterisk (*), name of presenting author should be underlined, and it must also include the affiliations of all authors along with email address(s) as footnote. Full papers will be invited for oral/poster presentations (once accepted) in hybrid mode.
            </p>
            <p>
              Only one author per paper whose name has been underlined will be allowed to present paper and receive a presentation certificate. Other co-authors, if registered, will receive the participation certificate. Best oral/poster presentations will be awarded.
            </p>
            <p>
              The abstracts should be sent to:
              <a href="mailto:ash.foet2017@gmail.com" className="text-indigo-600 underline">
                ash.foet2017@gmail.com
              </a>
            </p>
            <p>
              <strong>Please mention the following details in the subject-line of the mail:</strong>
              <ul className="list-inside space-y-2">
                <li><strong>&lt;Track&gt;</strong></li>
                <li><strong>&lt;Name of Corresponding Author&gt;</strong></li>
                <li><strong>&lt;Affiliation, Running Title&gt;</strong></li>
              </ul>
            </p>
            <p>
              <strong>Papers to be attached must be named as:</strong>
              <ul className="list-inside space-y-2">
                <li><strong>&lt;Track&gt;: &lt;Running Title of the Paper&gt;</strong></li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
            Important Dates
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">Event</th>
                  <th className="border-b px-4 py-2 text-left text-xl font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Abstract Submission (Oral & Poster)</td>
                  <td className="border px-4 py-2">30 October 2024</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Abstract Acceptance Notification</td>
                  <td className="border px-4 py-2">15 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Full Paper Submission</td>
                  <td className="border px-4 py-2">31 December 2024</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Paper Acceptance Notification</td>
                  <td className="border px-4 py-2">15 days from submission</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-200">
                  <td className="border px-4 py-2">Last date for Registration</td>
                  <td className="border px-4 py-2">15 January 2025</td>
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
  <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Registration Fee</h2>

  <div className="overflow-x-auto"> {/* Makes table horizontally scrollable on smaller screens */}
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-indigo-600 text-white">
          <th className="px-4 py-3 text-left text-sm sm:text-base">Category</th>
          <th className="px-4 py-3 text-left text-sm sm:text-base">Paper Presentation (INR/USD)</th>
          <th className="px-4 py-3 text-left text-sm sm:text-base">Attendee (INR/USD)</th>
          <th className="px-4 py-3 text-left text-sm sm:text-base">On-the-Spot Registration (INR/USD)</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {/* Students Row */}
        <tr className="odd:bg-gray-50 even:bg-gray-100">
          <td className="px-4 py-4 font-semibold text-sm sm:text-base">Students (UG/PG/Research)</td>
          <td className="px-4 py-4 text-sm sm:text-base">1000 INR / 100 USD</td>
          <td className="px-4 py-4 text-sm sm:text-base">1000 INR / 100 USD</td>
          <td className="px-4 py-4 text-sm sm:text-base">1500 INR / 110 USD</td>
        </tr>

        {/* Academician/Industry Row */}
        <tr className="odd:bg-gray-50 even:bg-gray-100">
          <td className="px-4 py-4 font-semibold text-sm sm:text-base">Academician/Industry</td>
          <td className="px-4 py-4 text-sm sm:text-base">2000 INR / 150 USD</td>
          <td className="px-4 py-4 text-sm sm:text-base">2000 INR / 150 USD</td>
          <td className="px-4 py-4 text-sm sm:text-base">2500 INR / 160 USD</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      <Footer />
    </>
  );
};

export default PublicationPage;
