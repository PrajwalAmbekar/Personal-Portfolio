import React from 'react'
import './sidebar.css';  // Import the custom CSS file
import Profile_pic from '../assets/Images/Profile_pic.jpg'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className='bg-[#1F2B3E] w-1/4 h-[650px] rounded-3xl'>
      <div className='text-white flex flex-col items-center gap-10 pt-16'>
        <div className='flex flex-col text-center items-center gap-4'>
          <div className='bg-[#1F3A5F] w-28 h-28 rounded-xl neon-border'>
            <img src={Profile_pic} alt="profile_pic" className='rounded-xl' />
          </div>
          <h1 className='font-Agbalumo'>Prajwal Ambekar</h1>
          <p className='font-sans bg-[#374357] rounded-lg p-2'>
            Web Developer | Creative Designer
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='font-sans flex gap-4'>
            <div className='w-12 h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center '>
              <MdOutlineAlternateEmail className='text-[#cd0131] text-xl' />
            </div>
            <div className='flex flex-col'>
              <h2 className='font-semibold'>EMAIL</h2>
              <p>ambekarp823@gmail.com</p>
            </div>
          </div>
          <div className='font-sans flex gap-4'>
            <div className='w-12 h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center '>
              <PiPhoneCallFill className='text-[#cd0131] text-xl' />
            </div>
            <div className='flex flex-col'>
              <h2 className='font-semibold'>PHONE</h2>
              <p>91+ 8431708850</p>
            </div>
          </div>
          <div className='font-sans flex gap-4'>
            <div className='w-12 h-12 bg-[#1F3A5F] rounded-lg flex justify-center items-center '>
              <IoLocationSharp className='text-[#cd0131] text-xl' />
            </div>
            <div className='flex flex-col'>
              <h2 className='font-semibold'>LOCATION</h2>
              <p>BELGAUM, KARNATAKA, INDIA</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-4 mt-10'>
          <div className='w-8 h-8 bg-[#1F3A5F] rounded-lg flex justify-center items-center hover-neon'>
            <FaTelegram className='text-[#cd0131]/70 text-xl' />
          </div>
          <div className='w-8 h-8 bg-[#1F3A5F] rounded-lg flex justify-center items-center hover-neon'>
            <VscGithub className='text-[#cd0131]/70 text-xl' />
          </div>
          <div className='w-8 h-8 bg-[#1F3A5F] rounded-lg flex justify-center items-center hover-neon'>
            <FaTwitterSquare className='text-[#cd0131]/70 text-xl' />
          </div>
          <div className='w-8 h-8 bg-[#1F3A5F] rounded-lg flex justify-center items-center hover-neon'>
            <FaLinkedin className='text-[#cd0131]/70 text-xl' />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
