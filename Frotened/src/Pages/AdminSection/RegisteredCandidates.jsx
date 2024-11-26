import React, { useState, useEffect } from 'react';

const UserTable = () => {

  const Users = [
    {
      "id": "1",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "+1234567890",
      "organization": "TechCorp",
      "place": "New York",
      "address": "1234 Elm Street, New York, NY 10001",
      "password": "password123"
    },
    {
      "id": "2",
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
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
      "name": "David Lee",
      "email": "david.lee@example.com",
      "phone": "+1234567893",
      "organization": "WebSolutions",
      "place": "San Francisco",
      "address": "1122 Pine Street, San Francisco, CA 94101",
      "password": "password123"
    },
    {
      "id": "5",
      "name": "Eva Green",
      "email": "eva.green@example.com",
      "phone": "+1234567894",
      "organization": "CloudTech",
      "place": "Seattle",
      "address": "3344 Birch Drive, Seattle, WA 98101",
      "password": "password123"
    },
    {
      "id": "6",
      "name": "Frank Miller",
      "email": "frank.miller@example.com",
      "phone": "+1234567895",
      "organization": "DataCorp",
      "place": "Austin",
      "address": "5567 Cedar Lane, Austin, TX 73301",
      "password": "password123"
    },
    {
      "id": "7",
      "name": "Grace Wilson",
      "email": "grace.wilson@example.com",
      "phone": "+1234567896",
      "organization": "FinancePros",
      "place": "Miami",
      "address": "7789 Palm Street, Miami, FL 33101",
      "password": "password123"
    },
    {
      "id": "8",
      "name": "Harry Clark",
      "email": "harry.clark@example.com",
      "phone": "+1234567897",
      "organization": "MedTech",
      "place": "Boston",
      "address": "9911 Birchwood Drive, Boston, MA 02101",
      "password": "password123"
    },
    {
      "id": "9",
      "name": "Ivy Adams",
      "email": "ivy.adams@example.com",
      "phone": "+1234567898",
      "organization": "HealthCo",
      "place": "Dallas",
      "address": "1022 Willow Road, Dallas, TX 75201",
      "password": "password123"
    },
    {
      "id": "10",
      "name": "Jack Evans",
      "email": "jack.evans@example.com",
      "phone": "+1234567899",
      "organization": "RetailInc",
      "place": "Denver",
      "address": "2233 Redwood Avenue, Denver, CO 80201",
      "password": "password123"
    }
  ];

  useEffect(() => {
    setUsers(Users);
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Candidates Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Organization</th>
              <th className="px-4 py-2 border">Place</th>
              <th className="px-4 py-2 border">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '100px' }}>{user.id}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '150px' }}>{user.name}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '200px' }}>{user.email}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '150px' }}>{user.phone}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '200px' }}>{user.organization}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '150px' }}>{user.place}</td>
                <td className="px-4 py-2 border break-words" style={{ wordWrap: 'break-word', maxWidth: '250px' }}>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
