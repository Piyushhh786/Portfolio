import React from 'react'

const About = ({aboutRef}) => {
  return (
    <section id="about" ref={aboutRef} className="py-16 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <img src="../HeroImg.jpg" alt="About me" className="w-full" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-100">Who I Am</h3>
          <p className="text-gray-300 mb-6">
          I'm a passionate developer who enjoys solving real-world problems through code.
I have hands-on experience in building full-stack applications using JavaScript, React, Node.js, and tools like OpenCV for image processing.
I’ve solved 180+ problems on LeetCode, which has strengthened my problem-solving and algorithmic thinking.
I also love working on projects that bridge software and hardware — like using Arduino with computer vision to detect and respond to colors.
Always eager to learn and explore new tech to build clean, efficient, and meaningful applications.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-gray-100">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Frontend</h4>
              <ul className="text-gray-300 space-y-1">
                <li>React </li>
                <li>JavaScript</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Backend</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Node.js & Express</li>
                <li>MongoDB </li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Leetcode</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Solved 180+ questions</li>
                <li>Rating 1473 </li>
                <li> <a href='https://leetcode.com/u/Piyushhh___786/' className="flex items-center text-gray-300 hover:text-white">
                      <span className="mr-1">🔗</span>
                      <span>Leetcode Profile</span>
                    </a> </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  )
}

export default About