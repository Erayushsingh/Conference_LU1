import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const UserTable = () => {
  const Users = [
    {
      "id": "1",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "2",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "3",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },

    {
      "id": "4",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "5",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "6",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },

    {
      "id": "7",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "8",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "9",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },
    {
      "id": "10",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "11",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "12",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },
    {
      "id": "13",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "14",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "15",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },
    {
      "id": "16",
      "name": "Alice Johnson",
      "email": "as88080207@gmail.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "17",
      "name": "Bob Smith",
      "email": "gullubaba37@gmail.com",
      "phone": "+1234567891",
      "organization": "BizInc",
      "place": "Los Angeles",
      "address": "5678 Oak Avenue, Los Angeles, CA 90001",
      "password": "password123"
    },
    {
      "id": "18",
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1234567892",
      "organization": "DesignWorks",
      "place": "Chicago",
      "address": "9101 Maple Road, Chicago, IL 60001",
      "password": "password123"
    },
  ];

  useEffect(() => {
    setUsers(Users);
  }, []);

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleViewClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };


  const handlePrintClick = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    const contentToPrint = document.getElementById('content-to-print').outerHTML;

        const printCSS = `
        <style>
          
          body {
            font-family: Arial, sans-serif;
          }
    
          td:nth-child(8), th:nth-child(8) {
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

    
    if (!emailSubject || !emailBody || !selectedUser) {
      alert('Please fill in all fields and select a user.');
      return;
    }

   
    console.log('Selected User:', selectedUser);

    const serviceId = 'service_dsje71r';  
    const templateId = 'template_ccfyai4'; 
    const userId = 'CzqGwtISPjvfhtcUk'; 

    const templateParams = {
      to_name: selectedUser.name,
      to_email: selectedUser.email,  
      from_name: 'Ayush Singh', 
      from_email: 'ayushsingh74340@gmail.com', 
      subject: emailSubject,
      message: emailBody,
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

  return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Candidates Information</h2>
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

      {/* Modal for sending email */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-lg font-semibold mb-4">Send Email to {selectedUser.name}</h3>
            <form onSubmit={handleEmailSubmit}>
              <div>
                <label className="block text-sm font-semibold">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded mt-2"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  required
                />
              </div>
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
                  onClick={() => setShowModal(false)}
                  className="ml-2 py-2 px-4 border rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;