import React from 'react';
import logo from "../assets/img logo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" /> 
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://www.linkedin.com/in/shaktipriya13/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FaLinkedin />
          {/* <FaLinkedin className="w-16 h-16" /> */}
        </a>
        <a href="https://github.com/shaktipriya13" target="_blank" rel="noopener noreferrer" className="text-white ">
          <FaGithub />
          {/* <FaGithub className="w-16 h-16" /> */}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
