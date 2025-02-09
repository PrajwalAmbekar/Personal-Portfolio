import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar.jsx';

const Layout = ({children}) => {
    return (<>
        <Navbar/>
        <div className='bg-[#0F1C2E] h-screen w-full flex p-12  gap-4'>
             <Sidebar className="w-1/4" /> 
             <div className='w-2/3'>{children}</div>
        </div>
    </>)
}

export default Layout;
