import React from "react";
import Laptop from "../assets/laptop.jpg";
import Find from "../assets/find.jpg";

const Frame = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <h1 className="py-2 text-base font-bold md:text-lg sm:text-xl font-poppins text-[#6B3CC9] ">
            Web & Mobile App Development
          </h1>

          <p className="text-base font-normal leading-5 text-left font-inter">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <button className="bg-[#F28D35] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Learn More
          </button>
        </div>
      </div>
      <div className="max-w-[1240px]  grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="py-2 text-base font-bold md:text-lg sm:text-xl font-poppins text-[#6B3CC9] ">
            Web & Mobile App Development
          </h1>

          <p className="text-base font-normal leading-5 text-left font-inter">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <button className="bg-[#F28D35] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Learn More
          </button>
        </div>

        <img className="w-[500px] mx-auto my-4" src={Find} alt="" />
      </div>

    </div>

    
  );
};

export default Frame;
