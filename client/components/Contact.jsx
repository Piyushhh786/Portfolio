import React from 'react'
import ContactForm from './ContactForm'

const Contact = ({contactRef}) => {
  return (
    <section id="contact" ref={contactRef} className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Get In Touch</h2>
      
      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
          
          <div className="flex items-start">
            <span className="text-xl text-blue-400 mr-4">✉️</span>
            <div>
              <h4 className="font-medium text-white">Email</h4>
              <p className="text-gray-300">piyushpalariya78@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-xl text-blue-400 mr-4">📱</span>
            <div>
              <h4 className="font-medium text-white">Phone</h4>
              <p className="text-gray-300">(+91) 78691-56350</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-xl text-blue-400 mr-4">📍</span>
            <div>
              <h4 className="font-medium text-white">Location</h4>
              <p className="text-gray-300">Surat,Gujarat-395007</p>
            </div>
          </div>
          
          <div className="pt-6">
            <h4 className="font-medium text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="mailto:piyushpalariya78@gmail.com" className="text-gray-300 hover:text-blue-400">
                <span className="text-xl">✉️</span>
              </a>
              <a href="https://github.com/Piyushhh786" className="text-gray-300 hover:text-blue-400">
                <span className="text-xl"><img width={28} src="../github-mark/github.png" alt="github" /></span>
              </a>
              <a href="https://www.linkedin.com/in/piyush-palariya-11058b288/" className="text-gray-300 hover:text-blue-400">
                <span className="text-xl"><img width={28} src="../in-logo/LI-In-Bug.png" alt="linkedin" /></span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-3 bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
          <ContactForm/>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact