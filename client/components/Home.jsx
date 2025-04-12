import React from 'react'

const Home = ({navigateTo, homeRef,}) => {
  return (
    <section id="home" ref={homeRef} className="pt-16 min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-400">Piyush Palariya</span></h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-300">Problem Solver and Full Stack Developer</h2>
          <p className="text-lg mb-8 text-gray-300">I thrive on solving real-world problems, constantly exploring new technologies to deliver solutions across diverse domains.</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigateTo('projects')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              View My Work
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-6 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-md font-medium hover:bg-gray-800"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-blue-600 bg-opacity-20 shadow-lg p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-400">
              <img src="../avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Home