import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import TopNavigation from "./tamplete/TopNavigation";
import Selector from "./tamplete/Selector";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Tranding = () => {
  const navigate = useNavigate();
  document.title = "SSCDB | Tranding"
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [tranding, setTranding] = useState([]);
  const [page, setPage] = useState(1);
  const [asMore, setAsMore] = useState(true)

  const gettranding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      

      if (data.results.length > 0) {
        setTranding((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      }else{
        setAsMore(false)
      }

      
    } catch (error) {
      console.error(error);
    }
  };

  

  const referenceHandler = async () => {
    if (tranding.length === 0) {
      gettranding();
    } else {
      setPage(1);
      setTranding([]);
      gettranding()
    }
  };

  useEffect(() => {
    
    referenceHandler()
  }, [category, duration]);

  return tranding.length > 0 ? (
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
            trending<span className="text-[12px] text-zinc-500 ml-1 t ">({category})</span>
          </h1>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[70%] text-zinc-300">
            <TopNavigation />
          </div>
          <div className="flex items-center gap-4">
            <Selector
              title="category"
              option={["tv", "movie", "all"]}
              funct={(e) => setCategory(e.target.value)}
            />
            <Selector
              title="duration"
              option={["week", "day"]}
              funct={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tranding.length}
        loader={<h4>Loading...</h4>}
        hasMore={asMore}
        next={gettranding}
      >
        <Card title={category} data={tranding} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tranding;
