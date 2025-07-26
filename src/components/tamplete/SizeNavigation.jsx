import React from "react";
import { TbDeviceTvFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { IoTvSharp } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";

const SizeNavigation = () => {

  return (
    <div className="w-[20%] md:block hidden h-full border-r-1 p-10 border-zinc-400 ">
      <h1 className="text-white flex items-center gap-2 text-2xl leading-none font-semibold tracking-tight">
        <span className="text-blue-400">
          <TbDeviceTvFilled />
        </span>
        <span>SCSDB</span>
      </h1>
      <nav className="mt-6">
        <h1 className="text-xl  tracking-tight leading-none font-semibold capitalize text-white">
          new feeds
        </h1>
        <Link to='/tranding' className="duration-300 hover:bg-blue-500 hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400 mt-2">
          <i className="ri-landscape-ai-fill"></i>
          <span>tranding</span>
        </Link>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400">
          <i className="ri-bard-fill"></i>
          <span>popular</span>
        </Link>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400">
          <RiMovie2Line />
          <span>movies</span>
        </Link>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400">
          <IoTvSharp />
          <span>tv shows</span>
        </Link>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400">
          <span>
            <HiUserGroup />
          </span>
          <span>people</span>
        </Link>
      </nav>
      <hr className="text-zinc-500 mt-2" />
      <nav className="mt-5">
        <h1 className="text-xl  tracking-tight leading-none font-semibold capitalize text-white">
          website information
        </h1>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2 text-xl text-zinc-400 mt-2">
          <span>
            <IoIosInformationCircle />
          </span>
          <span className="text-[19px] ">about SCSDB </span>
        </Link>
        <Link className="duration-300 hover:bg-blue-500 items-center hover:text-white hover:font-semibold capitalize font-semibold w-full flex p-5 rounded gap-2  text-zinc-400 mt-2">
          <FaPhoneAlt className="text-sm" />
          <span className="text-xl">contact us</span>
        </Link>
      </nav>
    </div>
  );
};

export default SizeNavigation;
