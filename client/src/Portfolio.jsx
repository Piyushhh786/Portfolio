import { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import EducationAndExp from '../components/EducationAndExp';
import Contact from '../components/Contact';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  
  const getSectionRef = (section) => {
    switch(section) {
      case 'home': return homeRef;
      case 'about': return aboutRef;
      case 'projects': return projectsRef;
      case 'education': return educationRef;
      case 'contact': return contactRef;
      default: return homeRef;
    }
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    const sectionRef = getSectionRef(section);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    const sections = [homeRef, aboutRef, projectsRef, educationRef, contactRef];
    sections.forEach(section => {
      if (section.current) {
        observer.observe(section.current);
      }
    });
    
    return () => {
      sections.forEach(section => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);
  const imgPaths = ["../burger.png","../colorDetectionRobo.jpg"];
  const titles = ["Burger-Web (Software)","3 DOF Color Detection Robo(AI Model and Hardware)"];
  const description = ["Developed a platform based on the MVC(Model-View-Controller) framework, allow users to customize the burger ingredients with Admin View to accept users request","Developed an AI-assisted color-based object classification system using real-time image processing and hardware integration with Arduino."];
  const techStack = [['Node.js','MongoDB','Express'],['OpenCV','Arduino','python']];
  const projectLink = ["https://burger-web.onrender.com/","https://youtube.com"];
  const githubLink = ["https://github.com/Piyushhh786/BurgerWeb","https://github.com/Piyushhh786/ColorDetection"];

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      {/* Navigation */}
     <Navigation activeSection={activeSection} navigateTo={navigateTo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

      {/* Main Content Area */}
      <main>
        {/* Home Section */}
       <Home navigateTo={navigateTo} homeRef={homeRef}/>
        {/* About Section */}
        <About aboutRef={aboutRef}/>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Project projectLink={projectLink[0]} description={description[0]} githubLink={githubLink[0]} imagePath={imgPaths[0]} techStack={techStack[0]} title={titles[0]}/>
              {/* Project 2 */}
              <Project projectLink={projectLink[1]} description={description[1]} githubLink={githubLink[1]} imagePath={imgPaths[1]} techStack={techStack[1]} title={titles[1]}/>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <EducationAndExp educationRef={educationRef}/>
        {/* Contact Section */}
        <Contact contactRef={contactRef}/>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300  border-gray-800">
          <div className="mt-8 border-t border-gray-800 pt-4 pb-4 md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </div>
          </div>
      </footer>
    </div>
  );
}