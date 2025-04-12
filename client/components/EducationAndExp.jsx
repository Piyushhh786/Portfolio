import React from 'react'

const EducationAndExp = ({educationRef}) => {
  return (
    <section id="education" ref={educationRef} className="py-16 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Education & Achievements</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
  <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>

  <div className="space-y-8">
    {/* B.Tech */}
    <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
      <div>
        <h4 className="text-xl font-medium text-white">Bachelor of Technology in Computer Engineering</h4>
        <p className="text-blue-400 mb-2">Sardar Vallabhbhai National Institute of Technology (SVNIT) • 2023–2027</p>
        <p className="text-gray-300">Pursuing core Computer Science subjects including Data Structures, Web Development, and AI-based projects.</p>
      </div>
    </div>

    {/* 12th Grade */}
    <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
      <div>
        <h4 className="text-xl font-medium text-white">Senior Secondary Education (Class XII)</h4>
        <p className="text-blue-400 mb-2">Christ Church Convent, Madhya Pradesh • 2022–2023</p>
        <p className="text-gray-300">Completed with a focus on Physics, Chemistry, and Mathematics. Prepared for competitive exams including JEE Advanced.</p>
      </div>
    </div>
    {/* 10th */}
    <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
    <div>
      <h4 className="text-xl font-medium text-white">Secondary Education (Class X)</h4>
      <p className="text-blue-400 mb-2">New Era Public School, Madhya Pradesh • 2020–2021</p>
      <p className="text-gray-300">Successfully completed Class 10th with a strong academic record and foundational interest in science and mathematics.</p>
    </div>
  </div>
    
  </div>
</div>
        
<div>
  <h3 className="text-2xl font-semibold mb-6 text-white">Achievements</h3>

  <div className="space-y-8">
     {/* LeetCode */}
     <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
      <div>
        <h4 className="text-xl font-medium text-white">Problem Solving on LeetCode</h4>
        <p className="text-blue-400 mb-2">Solved 180+ Problems • Max Rating: 1471</p>
        <p className="text-gray-300">
          Consistently practicing DSA and improving logical thinking through LeetCode.
          <a
            href="https://leetcode.com/u/Piyushhh___786/"
            className="text-blue-400 hover:text-white ml-1"
            target="_blank" rel="noopener noreferrer"
          >
            View Profile →
          </a>
        </p>
      </div>
    </div>
    {/* JEE MAIN AND ADVANCED  */}
    <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
    <div>
      <h4 className="text-xl font-medium text-white">Joint Entrance Exam (JEE)</h4>
      <p className="text-blue-400 mb-2">Cracked JEE Mains & Advanced</p>
      <p className="text-gray-300">Scored 98.99 percentile in JEE Mains and secured an All India Rank of 18532 in JEE Advanced, qualified for premier institutes in India.</p>
    </div>
  </div>
    {/* UCMAS Champion */}
    <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
      <div>
        <h4 className="text-xl font-medium text-white">National Champion – UCMAS India (2017)</h4>
        <p className="text-blue-400 mb-2">National-Level Mental Math Competition</p>
        <p className="text-gray-300">Won 1st place for demonstrating exceptional speed and accuracy in abacus-based calculations.</p>
      </div>
    </div>

    {/* Guinness Record Participation */}
    <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
      <div>
        <h4 className="text-xl font-medium text-white">Guinness World Record Participant</h4>
        <p className="text-blue-400 mb-2">UCMAS Human Abacus Formation – Ahmedabad, Gujarat</p>
        <p className="text-gray-300">Part of the record-breaking event with 968 participants forming the world’s largest human abacus.</p>
      </div>
    </div>

   
  </div>
</div>

      </div>
    </div>
  </section>
  )
}

export default EducationAndExp