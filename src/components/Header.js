import React, { useState } from "react";

import { MdOutlineClose } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import * as Icons from "@heroicons/react/24/outline";

import NavBar2 from "./NavBar2";
// import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const [visible, setVisible] = useState("hidden");
  const [visible1, setVisible1] = useState("");
  const [visible2, setVisible2] = useState("hidden");

  const toggleMenu = () => {
    // visible === "hidden" ? setVisible("") : setVisible("hidden");
    if (visible === "hidden") {
      setVisible("");
      setVisible1("hidden");
      setVisible2("");
    } else {
      setVisible("hidden");
      setVisible1("");
      setVisible2("hidden");
    }
  };
  console.log(visible1, 1);
  console.log(visible2, 2);
  return (
    <>
      <div className="border-b-[1px] border-gray-800 bg-[#10181f] text-zinc-200 flex-col p-4 justify-between text-[12px] md:py-2 md:px-20 md:flex md:flex-row  ">
        <div>
          <p>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className="md:flex md:space-x-2">
          <p>
            Hotline: <a href="tel:+2349091793058">+2349091793058</a>
          </p>
          <div>English</div>
          <div>USD $</div>
        </div>
      </div>
      <div className="py-4 px-4 md:px-20 md:py-4 bg-[rgb(16,24,31)] lg:flex lg:items-center lg:justify-between">
     
        <p className='text-xl font-bold text-indigo-300 mr-4'>ChimaUX</p>
        <div className="flex items-center justify-between space-x-6 my-3">
          <div className=" w-[70vw] flex rounded bg-white overflow-hidden justify-between  md:w-[30vw] md:min-w-[400px] ">
            <input placeholder="Search me" className="py-[5px] rounded outline-none px-6 text-zinc-500 w-[60vw] md:w-[33vw]" />
            <div className="bg-orange-400 flex items-center justify-center w-[30px] ">
              <Icons.MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </div>
          </div>

          <CgMenuLeft
            size={23}
            className={`${visible1} lg:hidden text-white`}
            onClick={toggleMenu}
          />
          <MdOutlineClose
            size={23}
            className={`${visible2} lg:hidden text-white`}
            onClick={toggleMenu}
          />
        </div>

        <nav
          class={`${visible} lg:block text-white text-sm mt-6 lg:mt-0 lg:ml-16`}
        >
          <ul>
            <li class="hover:text-indigo-400 md:inline mr-4 mt-2 lg:mt-0">
              <a href="/">
                <div className="flex items-center space-x-2">
                  <Icons.ArrowPathIcon className="h-5 w-5 text-white" />
                  <div>
                    <p>Compare</p>
                    <p>Products</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="md:inline mr-4 mt-2 lg:mt-0 hover:text-indigo-400">
              <a href="/">
                <div className="flex items-center space-x-2">
                  <Icons.HeartIcon className="h-5 w-5 text-white" />
                  <div>
                    <p>Favourite</p>
                    <p>Wishlist</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="hover:text-indigo-400 md:inline mr-4 mt-2 lg:mt-0">
              <a href="/">
                <div className="flex items-center space-x-2">
                  <Icons.UserIcon className="h-5 w-5 text-white" />
                  <div>
                    <p>Log In</p>
                    <p>My Account</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="hover:text-indigo-400 md:inline mr-4 mt-2 lg:mt-0">
              <a href="/">
                <div className="flex items-center space-x-2">
                  <Icons.ShoppingCartIcon className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-zinc-800 bg-white rounded-full text-center">0</p>
                    <p>$0.00</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <NavBar2 />
      </div>

      {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/">Action</a></li>
    <li><a class="dropdown-item" href="/">Another action</a></li>
    <li><a class="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div> */}
    </>
  );
};

export default Header;
