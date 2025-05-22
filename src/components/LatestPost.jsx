import React from 'react';
import latest1 from '../assets/latest1.webp'
import latest2 from '../assets/latest2.webp'
import latest3 from '../assets/latest3.webp'
import latest4 from '../assets/latest4.webp'

const LatestPost = () => {
    return (
        <div className='py-10 container mx-auto px-4 md:px-0'>
            <div className="text-green dark:bg-black  dark:border-white dark:text-white lg:w-4/12 md:w-8/12 mb-4 md:mb-8 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Latest Posts</h2>
      </div> 
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white dark:bg-black dark:text-white rounded-xl p-5 md:p-7 text-green">
            <figure>
                <img className='w-full rounded-2xl' src={latest1} alt="" />
            </figure>
            <div className="mt-5 md:space-y-5 space-y-3">
                <p className='text-lg font-semibold'>Ornamental Gardens</p>
                <h3 className='text-xl md:text-4xl font-bold'>Don’t Grow These 11 Plants With Your Roses</h3>
                <p className='text-base md:text-lg'>Roses make good partners to a host of plants, but those with an aggressive spread, extensive roots <span className='font-bold cursor-pointer'>..see more</span> </p>
            </div>
        </div>
        <div className="bg-white dark:bg-black dark:text-white rounded-xl p-5 md:p-7 text-green">
            <figure>
                <img className='w-full rounded-2xl' src={latest2} alt="" />
            </figure>
            <div className="mt-5 md:space-y-5 space-y-3">
                <p className='text-lg font-semibold'>Gardening Tips</p>
                <h3 className='text-xl md:text-4xl font-bold'>World Bee Day: 5 Ways You Might Be Harming Garden Bees</h3>
                <p className='text-base md:text-lg'>Roses make good partners to a host of plants, but those with an aggressive spread, extensive roots <span className='font-bold cursor-pointer'>..see more</span></p>
            </div>
        </div>
        <div className="bg-white dark:bg-black dark:text-white rounded-xl p-5 md:p-7 text-green">
            <figure>
                <img className='w-full rounded-2xl' src={latest3} alt="" />
            </figure>
            <div className="mt-5 md:space-y-5 space-y-3">
                <p className='text-lg font-semibold'>Ornamental Gardens</p>
                <h3 className='text-xl md:text-4xl font-bold'>17 Native Plants for Pollinators in Midwest Gardens</h3>
                <p className='text-base md:text-lg'>If you live in the Midwest and are building your pollinator selections, your options are numerous. <span className='font-bold cursor-pointer'>..see more</span></p>
            </div>
        </div>
        <div className="bg-white dark:bg-black dark:text-white rounded-xl p-5 md:p-7 text-green">
            <figure>
                <img className='w-full rounded-2xl' src={latest4} alt="" />
            </figure>
            <div className="mt-5 md:space-y-5 space-y-3">
                <p className='text-lg font-semibold'>Plant Problems</p>
                <h3 className='text-xl md:text-4xl font-bold'>How to Stop Powdery Mildew From Spreading: 11 Pro Tips</h3>
                <p className='text-base md:text-lg'>Powdery mildew is an unruly fungal pathogen that can wreak havo on your garden It convert healthy green <span className='font-bold cursor-pointer'>..see more</span></p>
            </div>
        </div>
      </div>
        </div>
    );
};

export default LatestPost;