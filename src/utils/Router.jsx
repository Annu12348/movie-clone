import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Tranding from "../components/Tranding";
import Popular from "../components/Popular";
import Movie from "../components/Movie";
import TvShow from "../components/TvShow";
import People from "../components/People";
import MovieDetails from "../components/MovieDetails";
import TVDetails from "../components/TVDetails";
import PersonDetails from "../components/PersonDetails";
import Trailer from "../components/tamplete/Trailer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tranding" element={<Tranding />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/details/:id" element={<MovieDetails />}>
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/tv" element={<TvShow />} />
      <Route path="/tv/details/:id" element={<TVDetails />} />
      <Route path="/person" element={<People />} />
      <Route path="/person/details/:id" element={<PersonDetails />} />
    </Routes>
  );
};

export default Router;
