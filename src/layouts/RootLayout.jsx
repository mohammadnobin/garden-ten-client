import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="pt-[104px]">
        {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      {/* its for only page reload from top  */}
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default RootLayout;
