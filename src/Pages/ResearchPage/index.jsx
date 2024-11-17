import React from 'react';

const researchProjects = [
  {
    title: "AI-Powered Healthcare Diagnostics",
    description: "Developing AI models for early diagnosis of diseases using medical imaging and data analysis.",
    link: "/research/ai-healthcare",
  },
  {
    title: "Blockchain for Secure Voting Systems",
    description: "Exploring how blockchain can enhance the security and transparency of online voting systems.",
    link: "/research/blockchain-voting",
  },
  {
    title: "Sustainable Energy Solutions",
    description: "Researching new, efficient methods of renewable energy generation and storage.",
    link: "/research/sustainable-energy",
  },
  {
    title: "Quantum Computing in Cryptography",
    description: "Investigating the impact of quantum computing on current cryptography methods and their future security implications.",
    link: "/research/quantum-cryptography",
  },
  {
    title: "5G and Smart Cities",
    description: "Exploring the integration of 5G networks with smart city infrastructure to improve urban living.",
    link: "/research/5g-smart-cities",
  },
  {
    title: "Robotics in Space Exploration",
    description: "Developing autonomous robots for use in deep space exploration and missions.",
    link: "/research/robotics-space-exploration",
  },
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Research Initiatives</h1>
          <p className="text-lg mb-8">Discover the innovative projects we’re working on to shape the future.</p>
        </div>
      </section>

      {/* Research Projects List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Explore Our Research Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Research Team. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchPage;
