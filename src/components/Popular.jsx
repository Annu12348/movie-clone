import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/axios";
import { GoArrowLeft } from "react-icons/go";
import TopNavigation from "./tamplete/TopNavigation";
import Selector from "./tamplete/Selector";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const Popular = () => {
  const navigate = useNavigate();
  document.title = "SSCDB | Popular"
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [asMore, setAsMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setAsMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const referenceHandler = async () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    referenceHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="p-4 min-h-screen w-full ">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <span
            onClick={() => navigate(-1)}
            className="text-white font-semibold mt-1 text-2xl hover:text-blue-500 cursor-pointer"
          >
            <GoArrowLeft />
          </span>
          <h1 className="text-white capitalize text-xl tracking-tight font-semibold ">
            popular<span className="text-[12px] text-zinc-500 ml-1 t ">({category})</span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[70%] text-zinc-300">
            <TopNavigation />
          </div>
          
            <Selector
              title="category"
              option={["tv", "movie"]}
              funct={(e) => setCategory(e.target.value)}
            />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        loader={<h4>Loading...</h4>}
        hasMore={asMore}
        next={getPopular}
      >
        <Card title={category} data={popular} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
