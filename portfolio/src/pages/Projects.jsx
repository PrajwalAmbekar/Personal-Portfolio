import React from 'react';
import { useState } from 'react';
import './Projects.css';
import { FaGlobe, FaFigma, FaPaintBrush } from 'react-icons/fa'; // Import icons

const Projects = () => {
  const categories = ['Web', 'Figma', 'Logo'];
  const [activeCategory, setActiveCategory] = useState('Web');

  const projects = [
    {
      name: "Web Project 1",
      category: "Web",
      image: "web-project1.jpg",
      techStack: ["HTML", "CSS"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Logo Project 1",
      category: "Logo",
      image: "logo-project1.jpg",
      techStack: ["Illustrator", "Photoshop"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Logo Project 1",
      category: "Logo",
      image: "logo-project1.jpg",
      techStack: ["Illustrator", "Photoshop"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Figma Project 1",
      category: "Figma",
      image: "figma-project1.jpg",
      techStack: ["Figma", "Sketch"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Figma Project 1",
      category: "Figma",
      image: "figma-project1.jpg",
      techStack: ["Figma", "Sketch"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    },
    // ... (your projects data remains the same)
  ];

  const filteredProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <div
      className='lg:fixed lg:top-11 h-full lg:h-full w-full bg-[#1F2B3E] rounded-3xl flex flex-col lg:gap-3 laptop-clip-path sm:w-[380px] lg:w-[100vw] mobile-padding-top '
      style={{
        clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1  1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z  ')",
        minHeight: "100vh", // Ensure the container covers the full height on mobile
      }}
    >
      <div className='flex flex-row items-center justify-between'>
        <p className='text-white text-3xl hover:underline cursor-pointer m-9 hover:text-yellow-100 lg:mb-[5.6rem]'>
          <span className='underline-animation'>Projects</span>
        </p>
      </div>
      
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-4'>
        {/* Navigation for laptop screens */}
        <nav className='bg-[#374357] h-[470px] rounded-bl-3xl rounded-tr-3xl  flex-col justify-evenly p-20 laptop-nav hidden lg:flex'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-[#0F1C2E] text-white hover-neon neon-border'
                  : 'bg-blue-200 hover:scale-110 transition-transform duration-300 hover-neon'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className='w-full font-serif text-[#0b121c] overflow-y-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 laptop-grid lg:w-[800px]'>
            {filteredProjects.map((project) => (
              <div
                key={project.name}
                className='bg-[#1f3a5f] p-2 rounded-lg hover:scale-105 hover:duration-300 transition-colors'
              >
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex flex-col'>
                  <img src={project.image} alt={project.name} className='w-full h-24 object-cover rounded-md' />
                  <h3 className='text-[#ACC2EF] font-normal'>{project.name}</h3>
                  <p className='bg-yellow-400 text-black rounded-lg mt-1'>Tech Stack: {project.techStack.join(', ')}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation for mobile and tablet screens */}
      <nav className='bg-[#374357] rounded-bl-3xl rounded-tr-3xl flex flex-row justify-evenly p-4 mobile-nav lg:hidden mobile-padding'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`lg:px-4 lg:py-2 rounded-lg transition-colors flex items-center lg:text-xl sm:text-sm sm:px-2 sm:py-1 mobile-padding-box  ${
              activeCategory === category
                ? 'bg-[#0F1C2E] text-white hover-neon'
                : 'bg-blue-200 hover:scale-110 transition-transform duration-300'
            }`}
          >
            {category === 'Web' && <FaGlobe size={20} className="mr-2" />}
            {category === 'Figma' && <FaFigma size={20} className="mr-2" />}
            {category === 'Logo' && <FaPaintBrush size={20} className="mr-2" />}
            <span>{category}</span>
          </button>
        ))}
      </nav>
      <div className='w-full font-serif text-[#0b121c] overflow-y-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:laptop-grid lg:w-[800px]'>
            {filteredProjects.map((project) => (
              <div
                key={project.name}
                className='bg-[#1f3a5f] p-2 rounded-lg hover:scale-105 hover:duration-300 transition-colors'
              >
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex flex-col'>
                  <img src={project.image} alt={project.name} className='w-full h-24 object-cover rounded-md' />
                  <h3 className='text-[#ACC2EF] font-normal'>{project.name}</h3>
                  <p className='bg-yellow-400 text-black rounded-lg mt-1'>Tech Stack: {project.techStack.join(', ')}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default Projects;
