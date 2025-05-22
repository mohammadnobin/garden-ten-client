import React from "react";
import PlantForm from "../components/PlantForm";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ShareTips = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
                  <Link to='/'>
      <button className="text-green mt-2 md:mt-6 flex items-center md:ml-0 mx-auto md:mb-0 mb-2  gap-x-2 py-4 px-8 rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer"><FaArrowLeft size={20} /> Go Back</button>
      </Link>
      <div className="text-green mt-10 lg:w-4/12 md:w-8/12 mb-4 md:mb-8 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Share a Garden Tip</h2>
      </div>
      <PlantForm />
    </div>
  );
};

export default ShareTips;
