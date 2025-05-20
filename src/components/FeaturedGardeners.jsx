import React, { use } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedGardeners = ({profilesPromise}) => {
  const profiles = use(profilesPromise)


  return (
    <div className="px-3 md:px-0 py-10">
      <div className="text-green lg:w-4/12 md:w-8/12 mb-4 md:mb-8 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Featured Gardeners</h2>
      </div>
      <div className="grid grid-cols-1 md:gap-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map(profile=> 
          <FeaturedCard key={profile._id} profile={profile}/>
        )}
      </div>
    </div>
  );
};

export default FeaturedGardeners;