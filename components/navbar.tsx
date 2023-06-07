import React from "react";
import { FaReddit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 flex items-center p-4 h-16 w-full justify-between bg-white border
    "
    >
      <Link href="/">
        <div className="flex items-center gap-2">
          <FaReddit className="text-stone-500 text-3xl" />
          <p className="text-2xl font-extralight">reddit</p>
        </div>
      </Link>
      <form className="flex gap-2">
        <input className="border border-gray-400 rounded-3xl w-[200px] md:w-[500px] p-2 bg-gray-200" />
        <button className="text-xl">
          <HiOutlineSearch />
        </button>
      </form>
      <div className="">
        <button className="flex items-center text-gray-600 rounded-md hover:border border-gray-300 p-1">
          <CiUser className="text-2xl" />
          <IoIosArrowDown className="" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
