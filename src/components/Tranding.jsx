import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import TopNavigation from "./tamplete/TopNavigation";
import Selector from "./tamplete/Selector";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Tranding = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [tranding, setTranding] = useState([]);

  const gettranding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      //setTranding(data.results);
      setTranding(prevState => [...prevState, ...data.results])
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  console.log(tranding)

  useEffect(() => {
    console.log(tranding);
    gettranding();
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
            trending
          </h1>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[70%] text-zinc-300">
            <TopNavigation />
          </div>
          <div className="flex items-center gap-4">
            <Selector
              title="tranding"
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
      hasMore={true}
      next={gettranding}
      >
      <Card title={category} data={tranding} />
      </InfiniteScroll>
    </div>
  ) : <Loading />
};

export default Tranding;
