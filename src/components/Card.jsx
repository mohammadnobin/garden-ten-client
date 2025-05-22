import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router";

const Card = ({ tip }) => {
  return (
    <div className="bg-white dark:bg-black  dark:border-white border-4 md:border-8 border-double border-green rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className=" p-4">
        <img
          src={tip.imageUrl}
          alt="Tip"
          className="w-full rounded-2xl h-60 object-cover "
        />
      </div>

      <div className="p-4 md:p-6 text-green dark:text-white space-y-3">
        <h3 className="flex items-center text-base md:text-lg font-semibold gap-2">
          <span className="font-bold">Total Like:</span> {tip.likeCount}
          <AiFillLike className="text-green dark:text-white text-xl" />
        </h3>

        <h2 className="text-lg md:text-xl font-medium">
          <span className="font-bold text-xl md:text-2xl">PlantType:</span>{" "}
          {tip.plantType}
        </h2>
        <h2 className="text-lg md:text-xl font-medium">
          <span className="font-bold text-xl md:text-2xl">Title:</span>{" "}
          {tip.title}
        </h2>

        <p className="text-sm md:text-base dark:text-white text-gray-700">
          <span className="font-bold">Description:</span> {tip.description}
        </p>

        <Link to={`/tips-details/${tip._id}`}>
          <button className="mt-3 dark:bg-black  dark:border-white  py-2 md:py-3 px-6 md:px-8 bg-green text-white rounded-tl-full rounded-br-full border-2 md:border-4 border-white border-double font-bold hover:bg-green transition-colors cursor-pointer duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
