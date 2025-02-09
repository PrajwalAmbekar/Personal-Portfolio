import React from 'react'
import { useState } from "react"

const Projects = () => {
  const categories = [ "Web", "Figma", "Logo"]
  const [activeCategory, setActiveCategory] = useState("Web");

  const projects = [
    {
      name: "Web Project 1",
      category: "Web",
      image: "web-project1.jpg",
      techStack: ["HTML", "CSS",],
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
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    },
    {
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    }, {
      name: "Web Project 2",
      category: "Web",
      image: "web-project2.jpg",
      techStack: ["React", "Node.js"],
      link: "https://example.com/web-project1" 
    },
  ]

  const filteredProjects =projects.filter((project) => project.category === activeCategory)
  return (
    <div className='fixed h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl   flex flex-col gap-16' style={{
      clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1  1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z  ')"
    }}>
      <p className='text-white text-3xl hover:underline cursor-pointer m-10'>Projects</p>
      <div className="flex flex-row gap-3">
        <nav className="bg-[#374357] h-[470px] rounded-bl-3xl rounded-tr-3xl flex flex-col justify-evenly p-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2  rounded-lg transition-colors ${activeCategory === categories ? "bg-[#0F1C2E] text-white" : "bg-blue-200 hover:bg-blue-300"
                }`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="w-[750px]  font-serif text-[#0b121c] ">
          <h2 className="text-2xl font-bold"></h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {filteredProjects.map((project) => (
              <div key={project.name} className="bg-[#1f3a5f]  p-2 rounded-lg hover:scale-105 hover:duration-300  transition-colors">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='flex flex-col'>
                <img src={project.image} alt={project.name} className="w-full h-24 object-cover rounded-md" />
                <h3 className=" text-[#ACC2EF] font-normal ">{project.name}</h3>
                <p className="bg-yellow-400 text-black rounded-lg mt-1">Tech Stack: {project.techStack.join(", ")}</p>
              </a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
