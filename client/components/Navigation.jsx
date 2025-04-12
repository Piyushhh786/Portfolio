// components/Navigation.jsx
import React from 'react';

export default function Navigation({
  activeSection,
  navigateTo,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <nav className="bg-gray-800 shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-400">Portfolio</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => navigateTo(section)}
                className={`px-3 py-2 rounded-4xl  font-medium ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
             <a href="../Piyush-Resume.pdf" download="Piyush'sResume.pdf">
            <button  className="ml-8  px-4 py-2 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <span className="mr-2">⬇️Download CV</span>
            </button>
             </a> 
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => navigateTo(section)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 w-full">
              <span className="mr-2">⬇️</span>
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
