import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/axios";
import { GoArrowLeft } from "react-icons/go";
import TopNavigation from "./tamplete/TopNavigation";
import Selector from "./tamplete/Selector";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const People = () => {
  const navigate = useNavigate();
  document.title = "SSCDB | TV-Shows"
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [asMore, setAsMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      console.log(data.results);

      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setAsMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const referenceHandler = async () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    referenceHandler();
  }, [category]);

  return person.length > 0 ? (
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
            people<span className="text-[12px] text-zinc-500 ml-1 t ">({category})</span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[70%] text-zinc-300">
            <TopNavigation />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        loader={<h4>Loading...</h4>}
        hasMore={asMore}
        next={getPerson}
      >
        <Card title={category} data={person} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;