import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='fixed top-0 right-0 animate-slide-in'>
            <div className='list-none flex justify-evenly w-[800px] h-[132px] bg-[#374357] items-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl text-white p-10 text-xl font-normal border-4 border-white animate-lighting-effect'>
                <li className={`transition-all duration-300 ease-in-out transform hover:text-cyan-400 hover:underline ${currentPath === '/' && 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg px-4 py-2'}`}>
                    <Link to="/">About</Link>
                </li>
                <li className={`transition-all duration-300 ease-in-out transform hover:text-cyan-400 hover:underline ${currentPath === '/portfolio' && 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg px-4 py-2'}`}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={`transition-all duration-300 ease-in-out transform hover:text-cyan-400 hover:underline ${currentPath === '/projects' && 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg px-4 py-2'}`}>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className={`transition-all duration-300 ease-in-out transform hover:text-cyan-400 hover:underline ${currentPath === '/contact' && 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg px-4 py-2'}`}>
                    <Link to="/contact">Contact</Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;
