import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Tranding from "../components/Tranding";
import Popular from "../components/Popular";
import Movie from "../components/Movie";
import TvShow from "../components/TvShow";
import People from "../components/People";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tranding" element={<Tranding />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/tv-show" element={<TvShow />} />
      <Route path="/person" element={<People />} />
    </Routes>
  );
};

export default Router;
