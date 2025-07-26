import React, { useEffect, useState } from "react";
import SizeNavigation from "./tamplete/SizeNavigation";
import TopNavigation from "./tamplete/TopNavigation";
import axios from "../utils/axios";
import Header from "./tamplete/Header";
import HorizontalCards from "./tamplete/HorizontalCards";
import Selector from "./tamplete/Selector";
import Loading from "./Loading";

const Home = () => {
  document.title = "SCSDB | HomePage";

  const [wallpaper, setWallpaper] = useState(null);
  const [tranding, setTranding] = useState(null);
  const [category, setCategory] = useState("all");

  const getwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.error(error);
    }
  };

  const gettranding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTranding(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !wallpaper && getwallpaper();
    gettranding();
  }, [category]);

  return wallpaper && tranding ? (
    <div className="w-full flex h-screen overflow-x-hidden  ">
      <SizeNavigation />
      <div className="text-white md:p-0 p-2  w-full h-screen overflow-y-auto overflow-x-hidden">
        <TopNavigation />
        <Header data={wallpaper} />
        <div className="flex items-center justify-between md:my-0 my-4 md:px-3 ">
          <h1 className="text-2xl capitalize font-bold text-zinc-500 ">
            tranding
          </h1>
          <Selector
            title="filter"
            option={["tv", "movie", "all"]}
            funct={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards HorizontalCardsData={tranding} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
