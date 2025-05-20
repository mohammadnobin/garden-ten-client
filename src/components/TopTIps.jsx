import React, { use } from 'react';

const TopTIps = ({topTipsPromise}) => {
    const topTips = use(topTipsPromise)
    return (
    <div className="px-3 md:px-0 py-10 text-white">
      <div className="text-green lg:w-4/12 md:w-8/12 md:w-8/12 mb-4 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Top Trending Tips section</h2>
      </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topTips.map(tip=> 
          <div key={tip._id}>{tip.name}
          {tip.likeCount}
          {tip.title}
          </div>
        )}
      </div>
        </div>
    );
};

export default TopTIps;