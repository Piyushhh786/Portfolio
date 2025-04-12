import React from 'react'

const Project = ({imagePath,title,description,techStack, projectLink ,githubLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-700">
                <div className="h-48 bg-gray-700">
                  <img src={imagePath} alt="Project 1" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech)=>{
                        <span className="px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded">{tech}</span>
                    })}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={projectLink} className="text-blue-400 hover:text-blue-300 font-medium">View Demo</a>
                    <a href={githubLink} className="flex items-center text-gray-300 hover:text-white">
                      <span className="mr-1">🔗</span>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

  );
}

export default Project