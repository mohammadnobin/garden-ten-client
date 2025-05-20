import React from "react";

const FeaturedCard = ({ profile }) => {
  const { name, specialty, status, experience, image, location } = profile;
  return (
    <div className="bg-white p-5 rounded-lg border-green border-6 border-double text-green">
      <div className="bgcolor border-2 rounded-xl border-green py-5">
        <img
          className="md:size-[200px] size-[150px] mx-auto rounded-full"
          src={image}
          alt=""
        />
      </div>
      <h2 className="md:pt-3 pt-2 font-bold lg:text-3xl text-2xl text-center">
        {name}
      </h2><div className="flex items-center justify-between">
        <h4 className="font-medium md:text-xl text-base">{specialty}</h4>
        <h4 className="font-medium md:text-xl text-base">{experience}</h4>
      </div>
      <div className="flex items-center md:py-3 py-2 justify-between">
        <h4 className="font-bold md:text-xl text-base">
          <span className="font-medium">Status:</span> {status}👍
        </h4>
        <h4 className="font-bold md:text-xl text-base">
          <span className="font-medium">Location:</span> {location}
        </h4>
      </div>
      
    </div>
  );
};

export default FeaturedCard;
