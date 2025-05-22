import React, { useEffect, useState } from "react";
import Card from "./Card";

const TopTIps = () => {
  const [topTips, setTopTips] = useState([]);
  useEffect(() => {
    fetch("https://garden-server-beige.vercel.app/top-tips")
      .then((res) => res.json())
      .then((data) => {
        setTopTips(data);
      });
  }, []);

  return (
    <div className="px-3 md:px-0 py-10 text-white">
      <div className="text-green dark:bg-black dark:text-white dark:border-white lg:w-4/12 md:w-8/12 md:w-8/12 mb-4 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">
          Top Trending Tips section
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topTips.map((tip) => (
          <Card key={tip._id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default TopTIps;
