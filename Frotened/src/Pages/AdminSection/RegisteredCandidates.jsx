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


  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [imageSrc, setImageSrc] = useState('');


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



  const handleStatusChange = (user) => {
    const password = prompt("Please enter the password:");
    
    if (password === 'admin') {
      setUsers((prevUsers) => 
        prevUsers.map(u =>
          u.id === user.id ? { ...u, status: 'Verified' } : u
        )
      );
    } else {
      alert("Incorrect password!");
    }
  };
  


  const handleViewClick = (user) => {
    setSelectedUser(user);
    const emailBody = `
    Dear ${user.name},

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

    const mailtoLink = `mailto:${user.email}?subject=RAASHEE-2025 Registration Confirmation&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
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
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={`border-b ${user.status === 'Verified' ? 'bg-green-100' : ''}`}>
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

                  <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>
                    {user.status === 'Pending' ? (
                      <button
                        onClick={() => handleStatusChange(user)}
                        className="text-red-500 hover:text-red-700 block mt-2 w-full"
                      >
                        Pending
                      </button>
                    ) : (
                      <span className="text-green-500">Verified</span>
                    )}
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

