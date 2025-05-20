import React from 'react';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
    return (
 <section
      id="header"
      className="bg-[#F5F5F3] py-3 border-y-4 border-green text-green lg:px-7 md:px-7 sm:px-0 px-7"
    >
      <div className='container mx-auto'>
        <div className="flex items-center lg:gap-4">
          <div className="w-1/4 relative">
            <div  className="flex items-center">
              <HiOutlineBars3BottomLeft
                className="text-[28px] cursor-pointer"
              />
              <h4 className="  font-medium text-lg leading-[18px] hidden lg:block">
                Shop by Category
              </h4>
            </div>
          </div>
          <div className="w-2/4">
            <div className="relative">
              <input
                className="w-full h-[50px] border-green border-2 placeholder:text-green  lg:pl-3 pl-1"
                type="text"
                placeholder="Search "
              />
              <div className="absolute top-[50%] translate-y-[-50%] right-2 lg:right-5">
                <FaSearch className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-2 lg:gap-5">
              <div className="relative flex">
                <FaUser
                  className="text-xl cursor-pointer"
                />
                <MdOutlineArrowDropDown className="text-xl cursor-pointer" />
              </div>
              <div  className="relative">
                <div
                 
                  className="cursor-pointer"
                >
                  <FaShoppingCart className="text-xl " />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    );
};

export default Header;