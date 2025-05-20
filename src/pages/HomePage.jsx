import React, { Suspense } from "react";
import Bannre from "../components/Bannre";
import FeaturedGardeners from "../components/FeaturedGardeners";
import Loading from "../components/Loading";
import TopTIps from "../components/TopTIps";


const profilesPromise = fetch('http://localhost:3000/profile/active').then(res => res.json())
const topTipsPromise = fetch('http://localhost:3000/tips/top').then(res => res.json())

const HomePage = () => {
  return (
    <div className="">
      <Bannre />
      <div className="container mx-auto">
        <Suspense fallback={<Loading></Loading>}>
      <FeaturedGardeners profilesPromise={profilesPromise} />
        </Suspense>
        <Suspense fallback={<Loading></Loading>}>
        <TopTIps topTipsPromise={topTipsPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
