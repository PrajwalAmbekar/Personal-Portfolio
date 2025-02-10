import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#0F1C2E] h-screen w-full flex flex-col lg:flex-row p-4 md:p-8 gap-4 lg:h-screen overflow-y-auto">
        <Sidebar className="w-full lg:w-1/4 overflow-y-auto  md:overflow-y-visible" />
        <div className="w-full lg:w-2/3  lg:mt-0  overflow-y-auto md:overflow-y-visible">{children}</div>
      </div>
    </>
  );
};

export default Layout;
