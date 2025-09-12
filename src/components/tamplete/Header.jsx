import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { HiSpeakerWave } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  
  return (
    <div
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path
      })`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
    }}
      className="w-full h-[30%] md:rounded-none rounded-lg md:h-[50%] bg-zinc-200 p-2 md:p-10 flex flex-col justify-end  "
    >
      <h1 className="font-bold text-xl md:text-4xl w-full  md:w-[70%] ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-1 md:block hidden
       ">
        {data.overview.slice(0, 200)}..
        <span className="text-blue-500">more</span>
      </p>
      <div className="flex gap-6 md:mt-2">
        <h2 className="flex  items-center gap-2">
          <span className="text-yellow-500 ">
            <HiSpeakerWave />
          </span>
          {data.release_date || data.first_air_date }
        </h2>
        <h2 className="flex  items-center gap-2">
          <span className="text-yellow-500 ">
            <RiMovie2Line />
          </span>
          {data.media_type.toUpperCase()}
        </h2>
      </div>
      <Link className="py-3 px-4 bg-blue-500 w-fit rounded mt-3 font-semibold ">Watch Trailer</Link>
    </div>
  );
};

export default Header;