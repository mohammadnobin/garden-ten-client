import React from 'react';
import { useLoaderData } from 'react-router';
import TipsCard from '../components/TipsCard';

const TipsDetails = () => {
    const oneTips = useLoaderData()
    return (
        <div className='container mx-auto px-4 md:px-0'>
      <div className="text-green mt-10 lg:w-4/12 md:w-8/12 md:w-8/12 mb-4 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">
          Tips Details Page
        </h2>
      </div>
            <TipsCard tip={oneTips} />
        </div>
    );
};

export default TipsDetails;