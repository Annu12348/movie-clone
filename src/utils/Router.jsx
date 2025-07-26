import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Tranding from "../components/Tranding";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tranding" element={<Tranding />}></Route>
    </Routes>
  );
};

export default Router;
