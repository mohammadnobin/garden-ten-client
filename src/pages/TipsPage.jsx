import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";


const TipsPage = () => {
    const tips = useLoaderData();

    return (
        <div className="container mx-auto pt-10 px-2">
      <div className="text-green w-full md:w-8/12 lg:w-5/12 mb-6 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-xl font-bold md:text-3xl">All Gardening Tips</h2>
      </div>
      <div className="bg-white w-full lg:w-10/12 mx-auto text-green border-4 border-double border-green rounded-xl p-4">
        <div className="hidden md:grid grid-cols-4 gap-4 pb-2 border-b-2 border-green font-bold text-lg">
          <div>Image</div>
          <div>Title</div>
          <div>Category</div>
          <div className="text-center">CRUD</div>
        </div>
        {tips.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 mt-4 border-2 p-4 rounded-xl border-green"
          >
            <div className="flex justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div>
              <h3 className="font-semibold text-center md:text-left">{item.title}</h3>
            </div>
            <div>
              <h3 className="text-center md:text-left">{item.category}</h3>
            </div>
            <div className="flex justify-center">
              <Link to={`/tips-details/${item._id}`} className="bg-green text-white p-2 rounded-lg transition">
                <FaEye className="text-xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TipsPage;
