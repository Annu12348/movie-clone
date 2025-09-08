import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/axios";
import { GoArrowLeft } from "react-icons/go";
import TopNavigation from "./tamplete/TopNavigation";
import Selector from "./tamplete/Selector";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const TvShow = () => {
  const navigate = useNavigate();
  document.title = "SSCDB | TV-Shows"
  const [category, setCategory] = useState("airing_today");
  const [TVShow, setTVShow] = useState([]);
  const [page, setPage] = useState(1);
  const [asMore, setAsMore] = useState(true);

  const getTVShow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      

      if (data.results.length > 0) {
        setTVShow((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setAsMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const referenceHandler = async () => {
    if (TVShow.length === 0) {
      getTVShow();
    } else {
      setPage(1);
      setTVShow([]);
      getTVShow();
    }
  };

  useEffect(() => {
    referenceHandler();
  }, [category]);

  return TVShow.length > 0 ? (
    <div className="p-4 min-h-screen w-full ">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <span
            onClick={() => navigate(-1)}
            className="text-white font-semibold mt-1 text-2xl hover:text-blue-500 cursor-pointer"
          >
            <GoArrowLeft />
          </span>
          <h1 className="text-white capitalize text-md tracking-tight font-semibold ">
            TVShows<span className="text-[12px] text-zinc-500 ml-1 t ">({category})</span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[70%] text-zinc-300">
            <TopNavigation />
          </div>
          
            <Selector
            
              title="category"
              option={["popular", "top_rated", "on_the_air", "airing_today"]}
              funct={(e) => setCategory(e.target.value)}
            />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={TVShow.length}
        loader={<h4>Loading...</h4>}
        hasMore={asMore}
        next={getTVShow}
      >
        <Card title="tv" data={TVShow} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShow;