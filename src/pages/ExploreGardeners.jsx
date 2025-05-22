import React from "react";
import { Link, useLoaderData } from "react-router";
import FeaturedCard from "../components/FeaturedCard";
import { FaArrowLeft } from "react-icons/fa";

const ExploreGardeners = () => {
  const allProfile = useLoaderData();
  return (
    <div className="container mx-auto mt-10">
                  <Link to='/'>
      <button className="text-green dark:bg-black dark:text-white dark:border-white  mt-2 md:mt-6 flex items-center md:ml-0 mx-auto md:mb-0 mb-2  gap-x-2 py-4 px-8 rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer"><FaArrowLeft size={20} /> Go Back</button>
      </Link>
      <div className="text-green dark:bg-black dark:text-white dark:border-white lg:w-4/12 md:w-8/12 mb-4 md:mb-8 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Explore Gardeners</h2>
      </div>
      <div className="grid grid-cols-1 md:gap-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allProfile.map((profile) => (
          <FeaturedCard key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
