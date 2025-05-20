import React from "react";
import Bannre from "../components/Bannre";
import Header from "../components/Header";
import FeaturedGardeners from "../components/FeaturedGardeners";

const HomePage = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <Bannre />
      <div className="container mx-auto">
      <FeaturedGardeners />
      </div>
    </div>
  );
};

export default HomePage;
