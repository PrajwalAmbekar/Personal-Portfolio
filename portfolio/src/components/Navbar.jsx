import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed top-0 right-0 '>
            <div className='list-none flex  justify-evenly w-[800px] h-[132px] bg-[#374357] items-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl text-white p-10 text-xl font-normal'>
                <li ><Link to="">About</Link></li>
                <li ><Link to="/portfolio">Portfolio</Link></li>
                <li ><Link to="/projects">Projects</Link></li>
                <li ><Link to="/contact">Contact</Link></li>
            </div>
        </div>
    )
}

export default Navbar;
