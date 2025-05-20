import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar />
      {state == "loading" ? <Loading /> : <Outlet />}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
