import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img className="" src={Logo} alt="" />

      <ul className="hidden text-white font-bold-500 md:flex fle">
        <li className="p-4">SERVICES</li>
        <li className="p-4">ABOUT&nbsp;US</li>
        <li className="p-4">CONTACT&nbsp;US</li>
        <li className="p-4">CAREERS</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          AT DIGITAL
        </h1>
        <ul className="flex flex-col p-4 uppercase">
          <li className="p-4 border-b border-gray-600">SERVICES</li>
          <li className="p-4 border-b border-gray-600">ABOUT US</li>
          <li className="p-4 border-b border-gray-600">CONTACT US</li>
          <li className="p-4 border-b border-gray-600">CAREERS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
