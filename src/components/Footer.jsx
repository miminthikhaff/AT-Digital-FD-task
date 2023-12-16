import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
      <div className="flex flex-col items-center lg:items-start">
        <img className="mb-4" src={Logo} alt="" />
        <p className="text-center lg:text-left">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve a single objective - your
          business results.
        </p>
      </div>

      <div className="mt-8 space-y-4 lg:ml-20 lg:mt-0">
        <h2 className="font-medium text-white">Our Technologies</h2>
        <ul>
          <li className="py-2 text-sm">ReactJS</li>
          <li className="py-2 text-sm">Gatsby</li>
          <li className="py-2 text-sm">NextJS</li>
          <li className="py-2 text-sm">NodeJS</li>
          <li className="py-2 text-sm">GraphQL</li>
          <li className="py-2 text-sm">Laravel</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4 lg:mt-0">
        <h2 className="font-medium text-white">Our Services</h2>
        <ul>
          <li className="py-2 text-sm">Social Media Marketing</li>
          <li className="py-2 text-sm">Web & Mobile App Development</li>
          <li className="py-2 text-sm">Data & Analytics</li>
          <li className="py-2 text-sm">Google Marketing Solutions</li>
          <li className="py-2 text-sm">Search Engine Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
