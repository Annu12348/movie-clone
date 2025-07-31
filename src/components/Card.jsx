import React from "react";
import { Link } from "react-router-dom";

function Card({ title, data }) {
  return (
    <div className="text-white w-full justify-center min-h-screen mt-1 flex items-start gap-5 flex-wrap ">
      {data.map((s, i) => (
        <Link  key={i} className="w-[40vh] mt-8 rounded-lg shadow ">
          <div className="w-full bg-amber-100 rounded-t-lg h-[58vh] overflow-hidden ">
            <img
              className="w-full h-full object-cover  "
              src={`https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path || s.poster_path
              }`}
              alt="images show only"
            />
          </div>
          <h1 className="mt-1 tracking-tight leading-none text-md font-semibold ">
            { s.title || s.name || s.original_name || s.original_title }
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Card;
