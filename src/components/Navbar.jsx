import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { MdClose, MdOutlineWbSunny } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.webp";
import { MdDarkMode } from "react-icons/md";



const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme) {
        return localStorage.theme === "dark";
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }
    return false;
  });
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [show, setShow] = useState(false);
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        Swal.fire({
          title: "LogOut SuccessFull",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {});
  };

  return (
    <div className="fixed top-0 z-50 left-0 w-full dark:bg-black dark:border-b-2 bg-green  py-5 px-3 md:px-0">
      <div className="lg:container dark:border-2 dark:border-white dark:bg-black dark:text-white bg-white rounded-full mx-auto text-green backdrop-blur-[5px]  px-5">
        <div className="md:flex justify-between items-center gap-x-6 py-2 hidden ">
          <div onClick={() => navigate("/")} className="cursor-pointer ">
            <img className="w-[150px]  rounded-2xl" src={logo} alt="logo" />
          </div>
          <div className="flex items-center gap-x-5">
            <NavLink to="/" className="text-base font-semibold">
              Home
            </NavLink>
            <NavLink to="explore-gradenars" className="text-base font-semibold">
              Explore Gardeners
            </NavLink>
            <NavLink to="/tips" className="text-base font-semibold">
              Browse Tips
            </NavLink>
            {user && (
              <>
                <NavLink to="/share-tips" className="text-base font-semibold">
                  Share a Garden Tip
                </NavLink>
                <NavLink to="/my-tips" className="text-base font-semibold">
                  My Tips
                </NavLink>
              </>
            )}
          </div>
          <div className="flex items-center gap-x-3.5">
            {user ? (
              <>
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button">
                    <div className="group relative">
                      <img
                        className="size-12 border-2 border-green rounded-full cursor-pointer"
                        src={`${user.photoURL}`}
                        alt="photoURL"
                      />
                      <p className="hidden absolute -top-2  backdrop-blur-[5px] bg-[#2e96d3]/50  rounded-2xl border border-white/30  w-[200px] text-center right-12 text-xl font-medium group-hover:block">
                        {user.displayName}
                      </p>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-green rounded-box z-1 w-35 p-2 shadow-sm"
                  >
                    <button
                      className="cursor-pointer text-base font-semibold flex items-center gap-x-2 py-2 px-4 bg-white rounded-xl border border-white dark:border-black dark:bg-black  "
                      onClick={handleLogOut}
                    >
                      LogOut <TbLogout />
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="cursor-pointer text-base font-semibold py-2 px-4 rounded-tl-3xl rounded-br-3xl border-4 border-green bg-white dark:bg-black dark:border-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="cursor-pointer text-base font-semibold py-2 px-4 rounded-tl-3xl rounded-br-3xl border-4 border-green bg-white dark:bg-black dark:border-white"
                >
                  Sign UP
                </Link>
              </>
            )}
            <button
              className="text-black dark:text-white cursor-pointer "
              onClick={toggleDarkMode}
            >
              {darkMode ? <MdOutlineWbSunny size={30} /> : <MdDarkMode size={30} />}
            </button>
          </div>
        </div>
        {/* Small Design */}
        <div className="py-2 md:hidden flex items-center justify-between">
          <div onClick={() => navigate("/")} className="">
            <img
              className="w-[50px] cursor-pointer rounded-2xl"
              src={logo}
              alt="logo"
            />
          </div>
          {show && (
            <div className="absolute top-20 left-0 space-y-2   w-full rounded-2xl text-center backdrop-blur-[5px] dark:bg-black dark:border-2 dark:border-white bg-white">
              <ul className="space-y-2">
                <li onClick={() => setShow(false)}>
                  <NavLink to="/" className="text-base font-semibold">
                    Home
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)}>
                  <NavLink
                    to="explore-gradenars"
                    className="text-base font-semibold"
                  >
                    Explore Gardeners
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)}>
                  <NavLink to="/tips" className="text-base font-semibold">
                    Browse Tips
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li onClick={() => setShow(false)}>
                      <NavLink
                        to="/share-tips"
                        className="text-base font-semibold"
                      >
                        Share a Garden Tip
                      </NavLink>
                    </li>
                    <li onClick={() => setShow(false)}>
                      <NavLink
                        to="/my-tips"
                        className="text-base font-semibold"
                      >
                        My Tips
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-x-3.5">
            {user ? (
              <>
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button">
                    <div className="group relative">
                      <img
                        className="size-12 border-2 border-green rounded-full cursor-pointer"
                        src={`${user.photoURL}`}
                        alt="photoURL"
                      />
                      <p className="hidden absolute -top-1 h-[30px] backdrop-blur-[5px] bg-[#2e96d3]/50  rounded-2xl border border-white/30  w-[120px] text-center -left-28 text-xl font-medium group-hover:block">
                        {user.displayName}
                      </p>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-green rounded-box z-1 w-35 p-2 shadow-sm"
                  >
                    <button
                      className="cursor-pointer text-base font-semibold flex items-center gap-x-2 py-2 px-4 bg-white rounded-xl border border-white dark:border-black dark:bg-black  "
                      onClick={handleLogOut}
                    >
                      LogOut <TbLogout />
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="cursor-pointer text-base font-semibold   py-2 px-4 bg-black/20  dark:bg-black dark:border-white rounded-xl border border-white/50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="cursor-pointer text-base font-semibold   py-2 px-4 bg-black/20  dark:bg-black dark:border-white rounded-xl border border-white/50"
                >
                  Sign UP
                </Link>
              </>
            )}
            <button
              className=" text-black dark:text-white cursor-pointer  "
              onClick={toggleDarkMode}
            >
           {darkMode ? <MdOutlineWbSunny size={30} /> : <MdDarkMode size={30} />}
            </button>
          </div>
          <div onClick={() => setShow(!show)}>
            {show ? <MdClose size={25} /> : <FaBars size={25} />}
          </div>
        </div>
        {/* Small Design */}
      </div>
    </div>
  );
};

export default Navbar;
