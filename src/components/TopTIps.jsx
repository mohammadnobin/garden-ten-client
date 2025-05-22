import React, { use } from 'react';
import Card from './Card';

const TopTIps = ({topTipsPromise}) => {
    const topTips = use(topTipsPromise)
    return (
    <div className="px-3 md:px-0 py-10 text-white">
      <div className="text-green lg:w-4/12 md:w-8/12 md:w-8/12 mb-4 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Top Trending Tips section</h2>
      </div>
                  <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topTips.map(tip=> 
          // <div className='bg-white text-green p-4' key={tip._id}>
          //   Name:{tip.name}
          //   <br />
          // total like:{tip.likeCount}
          // <br />
          // {tip.title}
          // </div>
          <Card key={tip._id} tip={tip} />
        )}
      </div>
        </div>
    );
};

export default TopTIps;