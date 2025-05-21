import React, { Suspense } from "react";
import Bannre from "../components/Bannre";
import FeaturedGardeners from "../components/FeaturedGardeners";
import Loading from "../components/Loading";
import TopTIps from "../components/TopTIps";
import LatestPost from "../components/LatestPost";
import GardenIntroSection from "../components/GardenIntroSection";

const profilesPromise = fetch(
  "https://garden-server-beige.vercel.app/active-profile"
).then((res) => res.json());
const topTipsPromise = fetch(
  "https://garden-server-beige.vercel.app/top-tips"
).then((res) => res.json());

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
        <LatestPost />
        <GardenIntroSection />
      </div>
    </div>
  );
};

export default HomePage;
