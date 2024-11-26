import React, { useState, useEffect } from 'react';

const ConferenceSubmissions = () => {
  
  const submissions = [
    {
      id: "1",
      userId: "1",
      title: "AI for Healthcare: A New Revolution",
      authors: "Alice Johnson, Bob Smith",
      abstract: "This paper explores the potential of AI technologies in the healthcare industry, especially focusing on medical diagnosis, personalized medicine, and AI-assisted surgery.",
      keywords: "AI, Healthcare, Machine Learning, Medical Diagnosis",
      preferredPresentationType: "oral",
      conferenceTheme: "Healthcare Innovation",
      conflictOfInterest: "None",
    },
    {
      id: "2",
      userId: "2",
      title: "Sustainable Energy Solutions for the Future",
      authors: "Charlie Brown, David Lee",
      abstract: "This paper reviews current trends in sustainable energy solutions and how they can be integrated into both urban and rural areas for a more eco-friendly future.",
      keywords: "Sustainability, Renewable Energy, Solar, Wind",
      preferredPresentationType: "poster",
      conferenceTheme: "Renewable Energy",
      conflictOfInterest: "None",
    },
    {
      id: "3",
      userId: "3",
      title: "Blockchain in Supply Chain Management",
      authors: "Eva Green, Frank Miller",
      abstract: "This paper investigates the application of blockchain technology in supply chain management and how it can enhance transparency, traceability, and efficiency.",
      keywords: "Blockchain, Supply Chain, Transparency, Efficiency",
      preferredPresentationType: "oral",
      conferenceTheme: "Supply Chain Optimization",
      conflictOfInterest: "Yes, one of the co-authors is affiliated with a supply chain software company",
    },
    {
      id: "4",
      userId: "4",
      title: "5G Networks and Their Impact on IoT",
      authors: "Grace Wilson, Harry Clark",
      abstract: "This research discusses the evolution of 5G technology and its role in enhancing IoT applications, with a focus on smart cities and autonomous vehicles.",
      keywords: "5G, IoT, Smart Cities, Autonomous Vehicles",
      preferredPresentationType: "oral",
      conferenceTheme: "Telecommunications Innovation",
      conflictOfInterest: "None",
    },
    {
      id: "5",
      userId: "5",
      title: "Cybersecurity in the Age of Big Data",
      authors: "Ivy Adams, Jack Evans",
      abstract: "This paper addresses the increasing concerns of cybersecurity in the era of big data and offers strategies for organizations to mitigate potential risks.",
      keywords: "Cybersecurity, Big Data, Risk Management",
      preferredPresentationType: "poster",
      conferenceTheme: "Cybersecurity Advances",
      conflictOfInterest: "None",
    }
  ];

  const [submissionsData, setSubmissionsData] = useState([]);

  useEffect(() => {
    setSubmissionsData(submissions);
  }, []);

  return (
    <div className="container mx-auto my-6 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Abstract Submitted</h2>
      
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-max table-auto border-collapse">
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
            </tr>
          </thead>
          <tbody>
            {submissionsData.map((submission) => (
              <tr key={submission.id} className="border-b">
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.id}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.userId}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.title}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.authors}</td>
                <td className="px-4 py-2 border break-words max-w-xs">{submission.abstract}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.keywords}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.preferredPresentationType}</td>
                <td className="px-4 py-2 border break-words max-w-xs" >{submission.conferenceTheme}</td>
                <td className="px-4 py-2 border break-words max-w-xs">{submission.conflictOfInterest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConferenceSubmissions;
