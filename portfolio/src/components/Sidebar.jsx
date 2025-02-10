import React, { useState } from 'react';
import './sidebar.css'; // Import the custom CSS file
import Profile_pic from '../assets/Images/Profile_pic.jpg';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Import a menu icon

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="bg-[#1F2B3E] w-full lg:w-1/4 h-auto lg:h-[650px] rounded-3xl p-4 lg:p mt-20 lg:mt-3 ">
      <div className="text-white flex flex-col items-center gap-10 pt-8 lg:pt-16">
        {/* Menu Icon for Mobile and Tablet - Positioned at top-right of the sidebar div */}
        <div className="lg:hidden absolute top-28 right-6">
          <button onClick={toggleMenu} className="text-white">
            <HiMenu className="text-2xl hover:text-[#cd0131] transition-colors duration-300" />
          </button>
        </div>

        {/* Profile Picture and Name */}
        <div className="flex flex-col text-center items-center gap-4">
          <div className="bg-[#1F3A5F] w-20 h-20 lg:w-28 lg:h-28 rounded-xl neon-border">
            <img src={Profile_pic} alt="profile_pic" className="rounded-xl w-full h-full" />
          </div>
          <h1 className="font-Agbalumo text-lg lg:text-xl">Prajwal Ambekar</h1>
          <p className="font-sans bg-[#374357] rounded-lg p-2 text-sm lg:text-base">
            Web Developer | Creative Designer
          </p>
        </div>

        {/* Email, Phone, Location - Hidden on Mobile/Tablet by default */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-col gap-5">
            <div className="font-sans flex gap-4 items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center  hover-neon">
                <MdOutlineAlternateEmail className="text-[#cd0131] text-lg lg:text-xl" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm lg:text-base">EMAIL</h2>
                <p className="text-xs lg:text-sm">ambekarp823@gmail.com</p>
              </div>
            </div>
            <div className="font-sans flex gap-4 items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center  hover-neon">
                <PiPhoneCallFill className="text-[#cd0131] text-lg lg:text-xl" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm lg:text-base">PHONE</h2>
                <p className="text-xs lg:text-sm">91+ 8431708850</p>
              </div>
            </div>
            <div className="font-sans flex gap-4 items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center  hover-neon">
                <IoLocationSharp className="text-[#cd0131] text-lg lg:text-xl" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm lg:text-base">LOCATION</h2>
                <p className="text-xs lg:text-sm">BELGAUM, KARNATAKA, INDIA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links - Hidden on Mobile/Tablet by default */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-row gap-4 mt-10`}>
          {[
            { Icon: FaTelegram },
            { Icon: VscGithub },
            { Icon: FaTwitterSquare },
            { Icon: FaLinkedin },
          ].map(({ Icon }, index) => (
            <div
              key={index}
              className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1F3A5F] rounded-lg flex justify-center items-center  hover-neon"
            >
              <Icon className="text-[#cd0131]/70 text-lg lg:text-xl hover:text-[#cd0131] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;