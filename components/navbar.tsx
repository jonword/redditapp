import React from "react";
import { FaReddit, FaUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 flex items-center p-4 h-16 w-full justify-between bg-white border
    "
    >
      <div className="flex items-center gap-2">
        <FaReddit className="text-amber-700 text-3xl" />
        <p className="text-2xl">Reddit</p>
      </div>
      <form className="flex gap-2">
        <input className="border border-gray-400 rounded-xl w-[300px]" />
        <button className="">
          <HiOutlineSearch />
        </button>
      </form>
      <div>
        <FaUser className="text-gray-600 text-xl" />
      </div>
    </header>
  );
};

export default Navbar;
