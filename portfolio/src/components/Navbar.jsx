import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaFolder, FaCode, FaEnvelope } from 'react-icons/fa'; // Import icons

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Icon mapping for mobile and tablet
    const iconMap = {
        '/': <FaUser className="text-2xl" />,
        '/portfolio': <FaFolder className="text-2xl" />,
        '/projects': <FaCode className="text-2xl" />,
        '/contact': <FaEnvelope className="text-2xl" />,
    };

    return (
        <div className='fixed top-0 right-0 animate-slide-in'>
            {/* Laptop View (unchanged) */}
            <div className='hidden lg:flex list-none justify-evenly w-[800px] h-[132px] bg-[#374357] items-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl text-white p-10 text-xl font-normal border-4 border-white animate-lighting-effect'>
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

            {/* Mobile and Tablet View */}
            <div className='lg:hidden fixed top-0 left-1/2 transform -translate-x-1/2 flex list-none justify-center items-center w-full h-20 bg-[#374357] text-white border-4 border-white animate-lighting-effect'>
                {['/', '/portfolio', '/projects', '/contact'].map((path, index) => (
                    <li
                        key={index}
                        className={`relative mx-4 transition-all duration-300 ease-in-out transform hover:scale-110 ${currentPath === path && 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg p-2'}`}
                    >
                        <Link to={path} className="flex flex-col items-center">
                            <div className="relative group">
                                {/* Icon */}
                                {iconMap[path]}
                                {/* Tooltip */}
                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {path === '/' && 'About'}
                                    {path === '/portfolio' && 'Portfolio'}
                                    {path === '/projects' && 'Projects'}
                                    {path === '/contact' && 'Contact'}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Navbar;