import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar />
      {state == "loading" ? <Loading /> : <Outlet />}
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
