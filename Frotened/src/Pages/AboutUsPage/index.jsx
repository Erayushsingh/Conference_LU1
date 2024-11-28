import React from 'react';

const teamMembers = [
  {
    name: "Ayush",
    role: "Backened+React",
     },

  {
    name: "Aman",
    role: "Frotened+Responsive",
    
  },

  {
    name: "Aditya",
    role: "Lead Content",
  },
  
];

const AboutUsPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg mb-8">Learn more about our team, mission, and the values that drive our company.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to leverage cutting-edge technology to improve lives, promote sustainability, and inspire innovation across industries.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We envision a world where technology and innovation work hand-in-hand to solve the greatest challenges facing humanity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className="mx-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-700">We continuously push boundaries and embrace new ideas to drive progress.</p>
            </div>
            <div className="mx-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900">Sustainability</h3>
              <p className="text-gray-700">We are committed to creating solutions that promote environmental and social sustainability.</p>
            </div>
            <div className="mx-8">
              <h3 className="text-2xl font-semibold text-gray-900">Integrity</h3>
              <p className="text-gray-700">We uphold the highest standards of ethics and transparency in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">Have questions or want to get in touch? We'd love to hear from you!</p>
          <a
            href="mailto:info@company.com"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Organization. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
   
    </>  );
};

export default AboutUsPage;
