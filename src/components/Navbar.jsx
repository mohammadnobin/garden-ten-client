import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.webp";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        toast.success("LogOut SuccessFull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {});
  };

  return (
    <div className="fixed top-0 z-50 left-0 w-full bg-green  py-5 px-3 md:px-0">
      <div className="lg:container bg-white rounded-full mx-auto text-green backdrop-blur-[5px]  px-5">
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
                      className="cursor-pointer text-base font-semibold flex items-center gap-x-2 py-2 px-4 bg-white rounded-xl border border-white "
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
                  className="cursor-pointer text-base font-semibold py-2 px-4 rounded-tl-3xl rounded-br-3xl border-4 border-green bg-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="cursor-pointer text-base font-semibold py-2 px-4 rounded-tl-3xl rounded-br-3xl border-4 border-green bg-white"
                >
                  Sign UP
                </Link>
              </>
            )}
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
            <div className="absolute top-20 left-0 space-y-2   w-full rounded-2xl text-center backdrop-blur-[5px] bg-white">
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="text-base font-semibold">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="explore-gradenars"
                    className="text-base font-semibold"
                  >
                    Explore Gardeners
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tips" className="text-base font-semibold">
                    Browse Tips
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink to="/share-tips" className="text-base font-semibold">
                        Share a Garden Tip
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-tips" className="text-base font-semibold">
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
                      className="cursor-pointer text-base font-semibold flex items-center gap-x-2 py-2 px-4 bg-white rounded-xl border border-white "
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
                  className="cursor-pointer text-base font-semibold   py-2 px-4 bg-black/20 rounded-xl border border-white/50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="cursor-pointer text-base font-semibold   py-2 px-4 bg-black/20 rounded-xl border border-white/50"
                >
                  Sign UP
                </Link>
              </>
            )}
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
