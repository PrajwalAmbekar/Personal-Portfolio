import React from 'react';
import './portfolio.css';
import { useState } from 'react';
import { FaHtml5, FaJava } from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io5";

const Portfolio = () => {
  const sections = [
    { name: "Skills", icon: <TbBrandJavascript className="text-2xl" /> },
    { name: "Resume", icon: <FiFigma className="text-2xl" /> },
    { name: "Tech Stack", icon: <GrReactjs className="text-2xl" /> },
  ];
  const [activeSection, setActiveSection] = useState("Skills");

  const skillsContent = (
    <>
      <div className="absolute left-[260px] top-[400px] transform -translate-y-1/2 -rotate-90 text-white text-xl lg:block hidden">Depth</div>
      <div className="flex flex-col pt-14 relative border-l-2 border-b-2 font-serif">
        <div className="flex space-y-4 flex-col">
          <div className="flex flex-row items-center gap-3">
            <div className="skills-bar bg-[#F7EB00] w-48 rounded-tr-md rounded-br-md h-8" data-skill="Node Js"></div>
            <div className="text-white mt-2 text-sm md:text-base">Node Js</div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-[#0F87FF] w-52 h-8 rounded-tr-md rounded-br-md"></div>
            <div className="text-white mt-2 text-sm md:text-base">Express Js</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#FF3636] w-[20rem] rounded-tr-md rounded-br-md h-8"></div>
            <div className="text-white mt-2 text-sm md:text-base">HTML,CSS,(Tailwind CSS),JS,React JS</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#2FEBD2] w-[18rem] rounded-tr-md rounded-br-md h-8"></div>
            <div className="text-white mt-2 text-sm md:text-base">MongoDB, MYSQL</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#30FF3A] w-[24rem] rounded-tr-md rounded-br-md h-8"></div>
            <div className="text-white mt-2 text-sm md:text-base">Web design/Development</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-purple-500 w-[16rem] rounded-tr-md rounded-br-md h-8"></div>
            <div className="text-white mt-2 text-sm md:text-base">Figma, Site-Mapping</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#FFB224] w-[20rem] rounded-tr-md rounded-br-md h-8"></div>
            <div className="text-white mt-2 text-sm md:text-base">Python, Java</div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-4 text-white">
          <span className='absolute left-[300px] top-0 transform -translate-y-1/2 mt-[26.5rem] text-xl lg:block hidden'>Skills</span>
        </div>
      </div>
    </>
  );

  const resumeContent = (
    <div className="flex flex-col gap-8 p-4">
      <h2 className="text-xl text-[#ACC2EF] hover:text-yellow-100">
        <span className='underline-animation'>Resume</span>
      </h2>
      <div className="bg-[#0f1c2e] p-4 rounded-lg shadow-md w-full md:w-[560px] mx-auto">
        <div className="bg-blue-200 hover:bg-blue-100 p-4 rounded-lg cursor-pointer transition-colors h-[150px]"></div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-600 transition-colors mx-auto block">
          Download Resume
        </button>
      </div>
    </div>
  );

  const techStackContent = (
    <div className='flex flex-col gap-8 p-4'>
      <h2 className='text-[#ACC2EF] text-xl hover:text-yellow-100'>
        <span className='underline-animation'>Tech Stack</span>
      </h2>
      <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-   font-serif '>
        {[
          { icon: <FaHtml5 className='text-orange-600 text-4xl' />, label: "HTML" },
          { icon: <SiCss3 className='text-blue-500 text-4xl' />, label: "CSS" },
          { icon: <TbBrandJavascript className='text-yellow-400 text-5xl' />, label: "JS" },
          { icon: <GrReactjs className='text-cyan-500 text-4xl' />, label: "React Js" },
          { icon: <SiTailwindcss className='text-teal-600 text-4xl' />, label: "Tailwind CSS" },
          { icon: <FiFigma className='text-rose-600 text-4xl' />, label: "Figma" },
          { icon: <IoLogoNodejs className='text-green-500 text-4xl' />, label: "Node Js" },
          { icon: <SiExpress className='text-green-200 text-4xl' />, label: "Express Js" },
          { icon: <SiMongodb className='text-green-800 text-4xl' />, label: "Mongo DB" },
          { icon: <SiMysql className='text-yellow-300 text-5xl' />, label: "MY SQL" },
          { icon: <FaJava className='text-orange-600 text-4xl font-bold' />, label: "Java" },
        ].map((item, index) => (
          <div key={index} className='flex flex-col text-[#ACC2EF] items-center'>
            <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300'>
              {item.icon}
            </div>
            <p className='text-[16px] mt-2'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const content = {
    Skills: skillsContent,
    Resume: resumeContent,
    "Tech Stack": techStackContent,
  };

  return (
    <div className='portfolio-container h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl lg:fixed lg:top-11' style={{ clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1  1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z ')" }}>
      <p className='text-white text-3xl cursor-pointer m-9 hover:text-yellow-100 lg:mb-[6.3rem] '>
        <span className='underline-animation'>Portfolio</span>
      </p>
      <div className="flex flex-col lg:flex-row gap-6 ">
        <nav className="bg-[#374357] rounded-bl-3xl rounded-tr-3xl flex flex-row lg:flex-col justify-evenly p-4 lg:p-20 lg:h-[470px]">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`px-4 py-2 rounded-lg transition-colors ${activeSection === section.name ? "bg-[#0F1C2E] text-white hover-neon" : "bg-blue-200 hover:scale-110 transition-transform duration-300"
                }`}
            >
              <span className="lg:hidden">{section.icon}</span>
              <span className="hidden lg:inline">{section.name}</span>
            </button>
          ))}
        </nav>
        <div className="w-full lg:w-3/4 p-4 overflow-y-auto">
          {content[activeSection]}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;