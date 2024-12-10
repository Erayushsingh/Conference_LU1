import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const UserTable = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://www.api.raashee.in/api/admin/allUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data)
      setUsers(data);
      console.log("users", users);
    } catch (e) {
      console.error('Error fetching users:', e);
    }
    finally {
      setLoading(false);
    }
  }

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleViewClick = (user) => {
    setSelectedUser(user);
    setShowEmailModal(true);
  };



  const handlePrintClick = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    const contentToPrint = document.getElementById('content-to-print').outerHTML;

    const printCSS = `
        <style>
          
          body {
            font-family: Arial, sans-serif;
          }
    
          td:nth-child(11), th:nth-child(11) {
            display: none;
          }
    
           td:nth-child(10), th:nth-child(10) {
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


  const handleEmailSubmit = (e) => {
    e.preventDefault();


    if (!emailSubject || !selectedUser) {
      alert('Please fill in all fields and select a user.');
      return;
    }


    const eventDetails = `
    Dear ${selectedUser.name},

    We are pleased to inform you that your registration for the International Conference on Recent Advances in Applied Sciences & Humanities in Evolution of Engineering (RAASHEE-2025) has been successfully completed.

    Event Details:
    Conference Name: RAASHEE-2025
    Date: 7th & 8th February, 2025
    Venue: Vishwakarma Auditorium, Faculty of Engineering and Technology, University of Lucknow, New Campus, Jankipuram Extension, Lucknow-226031, Uttar Pradesh

    We are excited to welcome you to this prestigious event, where leading experts and scholars from around the world will gather to share insights and advancements in the field of Applied Sciences, Humanities, and Engineering.

    Important Documents: Please ensure you bring a printed or digital copy of this confirmation email for event check-in.

    If you have any further questions or need assistance, feel free to contact us at raashee.foet@gmail.com.

    Thank you for registering for RAASHEE-2025. We look forward to your participation in this exciting conference.

    Warm regards,
    The RAASHEE-2025 Organizing Committee
    University of Lucknow
    raashee.foet@gmail.com
  `;


    const serviceId = 'service_dsje71r';
    const templateId = 'template_ccfyai4';
    const userId = 'CzqGwtISPjvfhtcUk';

    const templateParams = {
      to_name: selectedUser.name,
      to_email: selectedUser.email,
      subject: 'RAASHEE-2025 Registration Confirmation',
      message: eventDetails,
    };


    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        alert('Email sent successfully!');
        setShowModal(false);
        setEmailSubject('');
        setEmailBody('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  const handleImageClick = (imageUrl) => {
    setImageSrc(imageUrl);
    setShowImageModal(true); 
  };

  return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Candidates Information</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse" style={{ tableLayout: 'fixed' }} id="content-to-print">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Organization</th>
                <th className="px-4 py-2 border">Place</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Accomadation</th>
                <th className="px-4 py-2 border">Presentation Interest</th>
                <th className="px-4 py-2 border">Screenshot</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.id}</td>
                  <td className="px-4 py-2 border  break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.name}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.email}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.phone}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.organization}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.place}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.address}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.accommodation}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.interestedInPresentation}</td>
                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>
                    <img
                      src={user.screenshot}
                      alt="userScreenshot"
                      style={{ maxWidth: '100px', cursor: 'pointer' }}
                      onClick={() => handleImageClick(user.screenshot)} // On image click, open the modal
                    />
                  </td>

                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>
                    <button
                      onClick={() => handleViewClick(user)}
                      className="text-blue-500 hover:text-blue-700 block mt-2 w-full"
                    >
                      Selected
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handlePrintClick}
            className="mt-4 text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
      )}

      {/* Modal for sending email */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-lg font-semibold mb-4">Send Email to {selectedUser.name}</h3>
            <form onSubmit={handleEmailSubmit}>
              <div className="mt-4">
                <label className="block text-sm font-semibold">Body</label>
                <textarea
                  className="w-full px-4 py-2 border rounded mt-2"
                  rows="4"
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Send Email
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="ml-2 py-2 px-4 border rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Full-Screen Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-md shadow-md max-w-screen-md max-h-screen overflow-auto">

            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full"
              onClick={() => setShowImageModal(false)}
            >
              X
            </button>
            <img
              src={imageSrc}
              alt="Full-Screen"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}


    </div>
  );
};

export default UserTable;
