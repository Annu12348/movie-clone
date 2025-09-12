import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.webp";
import { FiMenu } from "react-icons/fi";

const TopNavigation = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="md:my-0 my-1 ml-11 z-20   md:ml-[15%] h-[10vh]  relative flex items-center gap-4 justify-cente w-full">
      <span className="absolute -left-9  text-xl md:hidden">
        <FiMenu />
      </span>
      <span className="text-[24px]">
        <CiSearch />
      </span>
      <input
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
        placeholder="Some Anything..."
        className="border w-[65%] md:w-[50%] p-2 md:p-3.5 rounded font-semibold outline-none border-zinc-800 "
      />
      {query.length > 0 && (
        <span
          onClick={() => setquery("")}
          className="text-[24px]  cursor-pointer "
        >
          <IoMdClose />
        </span>
      )}

      <div className="md:w-[55%] w-[85%] top-[91%] overflow-auto  left-[0.5%] rounded bg-zinc-50  absolute max-h-[35vh] md:max-h-[50vh] ">
        {searches.map((search, index) => (
          <Link
          to={`/${search.media_type}/details/${search.id}`}
            key={index}
            className="bg-[#E4E4E6]  hover:bg-[#D6D6DA] hover:text-zinc-800 text-zinc-600 font-semibold capitalize border-white border-b  w-full flex items-center p-2 md:p-8 "
          >
            <img
              className="md:w-[15vh] w-[9vh] shadow-lg md:h-[15vh] h-[9vh] rounded mr-5 object-center  object-cover "
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noimage
              }
            />
            <span className="text-[16px] ">
              {search.title ||
                search.name ||
                search.original_title ||
                search.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
