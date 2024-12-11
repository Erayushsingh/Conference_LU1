import React, { useState, useEffect } from 'react';

const ConferenceSubmissions = () => {
  const [submissionsData, setSubmissionsData] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAbstract();
  }, []);


  const getAbstract = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://www.api.raashee.in/api/admin/allAbstract', {
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json();
      setSubmissionsData(data);
      console.log(data)
    } catch (e) {
      console.error('Error fetching abstracts:', e);
    }
    finally {
      setLoading(false);
    }
  }

  const handleViewClick = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  const handlePrintClick = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    const contentToPrint = document.getElementById('content-to-print').outerHTML;

    const printCSS = `
    <style>
      body {
        font-family: Arial, sans-serif;
      }

      /* Hide actions column in print */
      td:nth-child(11), th:nth-child(11) {
        display: none;
      }

      button {
        display: none;
      }

      .fixed {
        display: none;
      }

      .bg-blue-500 {
        display: none;
      }

      .container {
        max-width: 100%;
        width: auto;
        padding: 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th, td {
        padding: 8px;
        text-align: left;
        border: 1px solid #ddd;
      }

      .modal {
        display: none;
      }

      .bg-red-500 {
        display: none;
      }

      .content {
        margin: 20px 0;
      }
    </style>
  `;

    const printContent = `
    <html>
      <head>
        <title>Conference Report - 2024</title> 
        ${printCSS} 
      </head>
      <body>
        <div class="content">${contentToPrint}</div> 
      </body>
    </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.print();
    };
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const filteredSubmissions = submissionsData.filter((submission) => {
    const submissionDate = new Date(submission.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || submissionDate >= from) &&
      (!to || submissionDate <= to)
    );
  });





  return (

    <div className="container mx-auto my-6 w-full">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) :
        submissionsData.length === 0 ? (
          <h2 className="text-2xl font-semibold mb-4 text-red-500">No abstracts submitted yet</h2>
        ) :
          (<>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Abstract Submitted</h2>

            <div className="mb-4">
              <label htmlFor="fromDate" className="mr-2">From Date:</label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={handleFromDateChange}
                className="px-4 py-2 border rounded"
              />
              <label htmlFor="toDate" className="mr-2 ml-4">To Date:</label>
              <input
                type="date"
                id="toDate"
                value={toDate}
                onChange={handleToDateChange}
                className="px-4 py-2 border rounded"
              />
            </div>

            <div className="overflow-x-auto max-w-full">
              <table className="min-w-max table-auto border-collapse" id="content-to-print">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">User ID</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Authors</th>
                    <th className="px-4 py-2 border">Abstract</th>
                    <th className="px-4 py-2 border">Keywords</th>
                    <th className="px-4 py-2 border">Preferred Presentation Type</th>
                    <th className="px-4 py-2 border">Conference Theme</th>
                    <th className="px-4 py-2 border">Conflict of Interest</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Actions</th> {/* Actions column */}
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="border-b">
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.id}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.userId}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.title}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.authors}</td>
                      <td className="px-4 py-2 border break-words max-w-xs"> <a className="text-blue-700 underline cursor-pointer" target='_blank' href={submission.drivelink}>
                        Drive Link
                      </a></td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.keywords}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.preferredPresentation}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.conferenceTheme}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.conflictOfInterest}</td>
                      <td className="px-4 py-2 border break-words max-w-xs">{submission.createdAt
                      }</td> {/* Display Date */}
                      <td className="px-4 py-2 border break-words max-w-xs"><button
                        onClick={() => handleViewClick(submission)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View
                      </button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
          )}
      {/* Modal to display submission details */}
      {isModalOpen && selectedSubmission && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl">
            <h3 className="text-2xl font-semibold mb-4 break-words">{selectedSubmission.title}</h3>
            <p className="break-words"><strong>Authors:</strong> {selectedSubmission.authors}</p>
            <p className="break-words"><strong>Abstract:</strong> <a className="text-blue-700 underline cursor-pointer" target='_blank' href={selectedSubmission.drivelink}>
              Drive Link
            </a></p>
            <p className="break-words"><strong>Keywords:</strong> {selectedSubmission.keywords}</p>
            <p className="break-words"><strong>Preferred Presentation Type:</strong> {selectedSubmission.preferredPresentationType}</p>
            <p className="break-words"><strong>Conference Theme:</strong> {selectedSubmission.conferenceTheme}</p>
            <p className="break-words"><strong>Conflict of Interest:</strong> {selectedSubmission.conflictOfInterest}</p>
            <p className="break-words"><strong>Date:</strong> {selectedSubmission.createdAt}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleModalClose}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )
      }

      <div className="flex justify-end mt-4">
        <button onClick={handlePrintClick} className="bg-blue-500 text-white px-6 py-3 rounded">
          Print Submissions
        </button>
      </div>

    </div >
  );
};

export default ConferenceSubmissions;
