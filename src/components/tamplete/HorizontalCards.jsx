import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ HorizontalCardsData }) => {
  return (
    <div className="md:px-4 py-2 w-full h-[40vh]  ">
      

      <div className="w-full overflow-x-auto flex   snap-x snap-mandatory custom-scroll  gap-5">
        {HorizontalCardsData.map((CardsData, index) => (
          <Link to={`/${CardsData.media_type}/details/${CardsData.id}`} key={index} className="min-w-[70%]  md:min-w-[20%] text-white mt-2.5 bg-zinc-900 hover:bg-zinc-700 pb-1 ">
            <img
              className="w-full h-[25vh] md:h-[16vh]  "
              src={`https://image.tmdb.org/t/p/original/${
                CardsData.backdrop_path ||
                CardsData.profile_path ||
                CardsData.poster_path
              }`}
              alt="images show only"
            />
            <h1 className="text-[15px] mt-2 tracking-tight leading-none font-semibold ">
              {(
                CardsData.name ||
                CardsData.title ||
                CardsData.original_name ||
                CardsData.original_title
              ).slice(0, 31)}
            </h1>
            <p className="mt-1 pb-2 tracking-tight leading-5">
              {CardsData.overview.slice(0, 113)}...
              <span className="text-blue-500">more</span>
            </p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default HorizontalCards;

{
  /*HorizontalCardsData.map((cards, index) => {
          return (
            <div key={index} className="min-w-[17%] mt-3 hover:bg-zinc-800  bg-zinc-900  ">
              <img
                className="w-full h-[16vh]"
                src={`https://image.tmdb.org/t/p/original/${
                  cards.backdrop_path || cards.profile_path
                }`}
                alt="images show only"
              />
              <h1 className="text-[15px] mt-2 tracking-tight leading-none font-semibold ">
                {(cards.name ||
                  cards.title ||
                  cards.original_name ||
                  cards.original_title).slice(0, 31)}
              </h1>
              <p className="mt-1 pb-2 tracking-tight leading-5">{cards.overview.slice(0, 113)}...<span className="text-blue-500">more</span></p>
            </div>
          );
        })*/
}
