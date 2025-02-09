import React from 'react'
import { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
const Portfolio = () => {
  const sections = ["Skills", "Resume", "Tech Stack"];
  const [activeSection, setActiveSection] = useState("Skills")

  const skillsContent = (<>
    <div class="absolute left-[260px] top-[400px] transform -translate-y-1/2 -rotate-90 text-white text-xl ">Depth</div>
    <div class="flex flex-col pt-14 relative  border-l-2 border-b-2 font-serif">


      <div class="flex space-y-4 flex-col ">
        <div class="flex flex-row items-center gap-3">

          <div class="bg-[#F7EB00] w-48 rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">Node Js</div>
        </div>
        <div class="flex flex-row items-center gap-4">

          <div class="bg-[#0F87FF] w-52 h-8 rounded-tr-md rounded-br-md"></div>
          <div class="text-white mt-2">Express Js</div>

        </div>
        <div class="flex flex-row gap-4 items-center">

          <div class="bg-[#FF3636] w-[20rem] rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">HTML,CSS,(Tailind css),JS,React JS</div>

        </div>
        <div class="flex flex-row gap-4 items-center">

          <div class=" bg-[#2FEBD2] w-[18rem] rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">MongoDB,MYSQL</div>

        </div>
        <div class="flex flex-row gap-4 items-center">

          <div class=" bg-[#30FF3A] w-[24rem] rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">Web design/Development</div>

        </div>
        <div class="flex flex-row gap-4 items-center">

          <div class="bg-purple-500 w-[16rem] rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">Figma,Site-Mapping</div>

        </div>
        <div class="flex flex-row gap-4 items-center">

          <div class="bg-[#FFB224] w-[20rem] rounded-tr-md rounded-br-md h-8"></div>
          <div class="text-white mt-2">Pyhton,Java</div>

        </div>
      </div>

      <div class="flex justify-between w-full mt-4 text-white">
        <span className='absolute left-[300px] top-0 transform -translate-y-1/2 mt-[26.5rem] text-xl'>Skills</span>
      </div>

    </div>
  </>);
  const resumeContent =(
    <div className="flex flex-col gap-8">
      <h2 className="text-xl text-[#ACC2EF]  underline ">Resume</h2>
      <div className="bg-[#0f1c2e] p-4 rounded-lg shadow-md w-[560px] ml-14">
       
        <div className="bg-blue-200 hover:bg-blue-100 p-4 rounded-lg cursor-pointer transition-colors h-[150px] ">
          
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-600 transition-colors ml-44 ">
          Download Resume
        </button>
      </div>
    </div>
  );
  const techStackContent = (<div className='flex flex-col gap-8'>
    <h2 className='text-[#ACC2EF] text-xl underline'>Tech Stack</h2>
    <div className='grid  grid-cols-4 gap-3 w-[400px] font-serif ml-36 '>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300'> <FaHtml5 className='text-orange-600 text-4xl' /></div>
        <p className='text-[16px]'>HTML</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center text-sm hover:scale-125 cursor-pointer hover:duration-300' ><SiCss3  className='text-blue-500 text-4xl'/> </div>
        <p className='text-[16px]'>CSS</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' > <TbBrandJavascript className='text-yellow-400 text-5xl' /></div>
        <p className='text-[16px]'>JS</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' ><GrReactjs className='text-cyan-500 text-4xl'/> </div>
        <p className='text-[16px]'>React Js</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' ><SiTailwindcss className='text-teal-600 text-4xl' /> </div>
        <p className='text-[16px]'>Tailwind CSS</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' > <FiFigma className='text-rose-600 text-4xl'/></div>
        <p className='text-[16px]'>Figma</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' ><IoLogoNodejs className='text-green-500 text-4xl' /></div>
        <p className='text-[16px]'>Node Js</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' ><SiExpress  className='text-green-200 text-4xl'/> </div>
        <p className='text-[16px]'>Express Js</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' > <SiMongodb className='text-green-800 text-4xl'/></div>
        <p className='text-[16px]'>Mondo DB</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' > <SiMysql className='text-yellow-300 text-5xl' /></div>
        <p className='text-[16px]'>MY SQL</p>
      </div>
      <div className='flex flex-col text-[#ACC2EF]'>
        <div className='w-14 h-14 rounded-lg bg-[#1F3A5F] flex justify-center items-center hover:scale-125 cursor-pointer hover:duration-300' ><FaJava className='text-orange-600 text-4xl font-bold'/> </div>
        <p className='text-[16px]'>Java</p>
      </div>

    </div>
  </div>);

  const content = {
    Skills: skillsContent,
    Resume: resumeContent,
    "Tech Stack": techStackContent,
  }




  return (
    <div className='fixed h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl   flex flex-col gap-16' style={{
      clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1  1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z ')"
    }}>
      <p className='text-white text-3xl hover:underline cursor-pointer m-10'>Portfolio</p>
      <div className="flex flex-row gap-6">
        <nav className="bg-[#374357] h-[470px] rounded-bl-3xl rounded-tr-3xl flex flex-col justify-evenly p-20 ">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={` px-4 py-2  rounded-lg transition-colors ${activeSection === section ? "bg-[#0F1C2E] text-white" : "bg-blue-200 hover:bg-blue-300"
                }`}
            >
              {section}
            </button>
          ))}
        </nav>
        <div className="w-3/4 p-4">
          {content[activeSection]}
        </div>
      </div>
    </div>
  )
}


export default Portfolio;
