import React from 'react';

const publications = [
  {
    title: "The Future of AI in Healthcare",
    date: "January 2024",
    description: "An in-depth analysis of the role AI will play in transforming healthcare systems and improving patient outcomes.",
    link: "https://example.com/publications/future-ai-healthcare.pdf",
  },
  {
    title: "Blockchain: Beyond Cryptocurrency",
    date: "February 2024",
    description: "This paper explores blockchain technology’s potential in sectors like supply chain, voting systems, and more.",
    link: "https://example.com/publications/blockchain.pdf",
  },
  {
    title: "The Evolution of Quantum Computing",
    date: "March 2024",
    description: "A comprehensive look at the advancements in quantum computing and its potential to revolutionize industries.",
    link: "https://example.com/publications/quantum-computing.pdf",
  },
  {
    title: "5G and the Future of Connectivity",
    date: "April 2024",
    description: "Exploring the impact of 5G technology on global connectivity, smart cities, and the IoT ecosystem.",
    link: "https://example.com/publications/5g-connectivity.pdf",
  },
];

const PublicationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Latest Publications</h1>
          <p className="text-lg mb-8">Stay updated with the latest research and insights from our team.</p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Explore Our Research</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{publication.date}</p>
                <p className="text-gray-700 mb-6">{publication.description}</p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read Full Paper
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Research Team. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicationPage;
