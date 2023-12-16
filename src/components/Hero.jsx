import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="bg1 mt-10 sm:mt-[18px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="bg-gradient-to-r from-[#1CBDDD] via-[#4DCA79] to-[#FFFFFF] p-4 rounded-md sm:mx-60 sm:w-[80%] lg:w-[630px] md:h-[300px] lg:h-[306px] flex flex-col items-start mt-80">
          <p className="mb-4 ml-20 text-5xl font-bold text-left text-white">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </p>
          <button className="bg-[#F28D35] w-[200px] rounded-md font-medium text-white py-3 ml-20 ">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// 