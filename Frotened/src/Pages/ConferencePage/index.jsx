import React from 'react';

const ConferencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Global Tech Conference 2024</h1>
          <p className="text-lg mb-8">Join the world’s leading minds in technology for a 3-day event of innovation and collaboration.</p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Register Now
          </button>
        </div>
      </section>

      {/* Conference Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Conference Schedule</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Day 1: Keynotes</h3>
              <p className="text-gray-700">Inspiring keynote speeches from industry leaders, followed by a networking session.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Day 2: Workshops</h3>
              <p className="text-gray-700">Hands-on workshops on cutting-edge technologies, tools, and frameworks.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Day 3: Panel Discussions</h3>
              <p className="text-gray-700">Panel discussions with thought leaders exploring the future of tech innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Featured Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Speaker 1" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-600">CEO at TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Speaker 2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600">CTO at InnovateX</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Speaker 3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Lee</h3>
              <p className="text-gray-600">Founder of CodeLab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-8">Don’t miss out on this opportunity to learn from and network with industry leaders. Secure your spot now!</p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Register Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Global Tech Conference. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ConferencePage;
