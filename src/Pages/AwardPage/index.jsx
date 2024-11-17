import React from 'react';

const awards = [
  {
    title: "Best Innovation in Technology 2024",
    year: "2024",
    description: "Awarded for groundbreaking innovations in AI and machine learning applications in healthcare.",
    details: "This award recognizes our team's work in advancing AI-powered healthcare diagnostics, helping hospitals reduce diagnostic errors and improve patient care.",
  },
  {
    title: "Outstanding Contribution to Research 2023",
    year: "2023",
    description: "Honored for exceptional research in quantum computing and its potential applications in cryptography.",
    details: "Our research on quantum cryptography has opened new possibilities for secure communication systems and has been recognized globally in top academic journals.",
  },
  {
    title: "Excellence in Environmental Sustainability 2022",
    year: "2022",
    description: "Recognized for pioneering projects in sustainable energy solutions and carbon footprint reduction.",
    details: "We developed solar power systems that increased efficiency by 40%, contributing significantly to reducing the environmental impact of energy consumption.",
  },
  {
    title: "Best Educational Initiative 2021",
    year: "2021",
    description: "Awarded for our educational programs that train underrepresented communities in coding and technology.",
    details: "Our coding bootcamps and online courses have helped hundreds of students gain valuable skills in software development, empowering them to enter the tech industry.",
  },
  {
    title: "Top Innovator in Healthcare 2020",
    year: "2020",
    description: "Recognized for pioneering the use of AI to enhance patient care and improve diagnostic accuracy in hospitals.",
    details: "Our team developed a machine learning model that analyzes medical images to identify potential health risks, providing doctors with critical insights for better patient outcomes.",
  },
];

const AwardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Awards and Recognitions</h1>
          <p className="text-lg mb-8">Celebrating our commitment to excellence and innovation in various fields.</p>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Awards & Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{award.year}</p>
                <p className="text-gray-700 mb-6">{award.description}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={() => alert(award.details)} // Show details on click (can be customized to open a modal)
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Organization. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AwardPage;
