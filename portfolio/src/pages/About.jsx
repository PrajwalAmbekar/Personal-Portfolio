import React from 'react';
import { TbCode } from "react-icons/tb";
import { IoLogoWebComponent } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import "./.About.css";

const About = () => {
  return (
    <div
      className='fixed  mt-3 h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl p-10 flex flex-col gap-4 max-md:static max-md:w-full max-md:h-auto max-md:mt max-md:rounded-none max-md:bg-transparent max-md:p-4 clip-path-laptop overflow-y-auto md:overflow-y-visible'
    >
      {/* About Me Section */}
      <div className='flex flex-col gap-10 max-md:gap-6'>
        <p className='text-white text-3xl cursor-pointer relative hover:text-yellow-100 max-md:text-2xl'>
          <span className='underline-animation'>About me</span>
        </p>
        <p className='font-serif text-[#ACC2EF] w-[900px] max-md:w-full max-md:text-sm max-md:text-wrap max-md:text-justify' style={{"text-indent": "100px"}}>
          Hi, I’m Prajwal– A Creative Full-Stack Developer, Turning Ideas into Reality. With a passion for design and innovation, I transform complex challenges into visually engaging solutions. I can help you to create your websites and make a lasting impression in the marketplace. Let's connect and work together to make your ideas come true!
        </p>
      </div>

      {/* What I'm Doing Section */}
      <div className='flex flex-col gap-2 max-md:gap-4'>
        <p className='text-white text-3xl cursor-pointer relative hover:text-yellow-100 max-md:text-2xl'>
          <span className='underline-animation'>What I'm Doing</span>
        </p>
        <div className='flex flex-col gap-6 max-md:gap-4'>
          {/* Web Development Card */}
          <div className='bg-[#1F3A5F] flex gap-6 p-8 rounded-3xl w-[925px] cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 max-md:w-full max-md:p-6 max-md:flex-col'>
            <div className='flex gap-6 max-md:justify-center'>
              <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg flex justify-center items-center max-md:w-12 max-md:h-12'>
                <TbCode className='text-[#cd0131]/70 text-3xl animate-pulse max-md:text-2xl' />
              </div>
            </div>
            <div className='flex flex-col gap-2 max-md:text-center'>
              <p className='font-serif text-[#8DA6D8]'>Web Development</p>
              <p className='font-serif text-[#ACC2EF] text-balance max-md:text-sm max-md:text-wrap max-md:text-justify'>
                Crafting high-quality web solutions that enhance user experience and meet business goals. Whether it's front-end design or back-end functionality, I ensure every aspect of the development process is meticulously handled to deliver responsive, fast, and reliable websites.
              </p>
            </div>
          </div>

          {/* Creative Design and Logo Design Cards */}
          <div className='flex flex-row gap-6 max-md:flex-col max-md:gap-4'>
            {/* Creative Design Card */}
            <div className='bg-[#1F3A5F] flex gap-6 p-8 rounded-3xl w-[450px] cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 max-md:w-full max-md:p-6 max-md:flex-col'>
              <div className='flex gap-6 max-md:justify-center'>
                <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg flex justify-center items-center max-md:w-12 max-md:h-12'>
                  <MdDesignServices className='text-[#cd0131]/70 text-3xl animate-bounce max-md:text-2xl'/>
                </div>
              </div>
              <div className='flex flex-col gap-2 max-md:text-center'>
                <p className='font-serif text-[#8DA6D8]'>Creative Design</p>
                <p className='font-serif text-[#ACC2EF] max-md:text-sm max-md:text-wrap max-md:text-justify'>
                  My work brings ideas to life with innovative and visually appealing designs, including social media graphics.
                </p>
              </div>
            </div>

            {/* Logo Design Card */}
            <div className='bg-[#1F3A5F] flex gap-6 p-8 rounded-3xl w-[450px] cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 max-md:w-full max-md:p-6 max-md:flex-col'>
              <div className='flex gap-6 max-md:justify-center'>
                <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg flex justify-center items-center max-md:w-12 max-md:h-12'>
                  <IoLogoWebComponent className='text-[#cd0131]/70 text-3xl animate-spin max-md:text-2xl' />
                </div>
              </div>
              <div className='flex flex-col gap-2 max-md:text-center'>
                <p className='font-serif text-[#8DA6D8]'>Logo Design</p>
                <p className='font-serif text-[#ACC2EF] max-md:text-sm max-md:text-wrap max-md:text-justify'>
                  My work creates distinctive and memorable logos that define and elevate your brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;