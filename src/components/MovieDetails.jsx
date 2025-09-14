import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie } from "../store/actions/movieActions";
import Loading from "./Loading";
import { IoIosPlay } from "react-icons/io";
import HorizontalCards from "../components/tamplete/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(asyncloadmovie(id));
    }
  }, [dispatch, id]);

  if (!info || !info.detail) {
    return <Loading />;
  }

  const backdropOrProfile =
    info.detail.backdrop_path || info.detail.profile_path || "";
  const posterOrBackdrop =
    info.detail.poster_path || info.detail.backdrop_path || "";

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${backdropOrProfile})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen  h-[148vh] px-[8%] "
    >
      <nav className="w-full text-zinc-200 flex items-center gap-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line text-2xl"
          aria-label="Go back"
        ></button>
        {/* Example navigation links, replace with actual links as needed */}
        {info.detail.homepage && (
          <a
            href={info.detail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6556CD]"
          >
            Home
          </a>
        )}

        <a
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6556CD]"
        >
          Wikidata
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          target="_blank"
          className="hover:text-[#6556CD]"
        >
          IMDb
        </a>
      </nav>

      <div className="w-full flex ">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg h-[69vh]  object-cover"
          src={
            posterOrBackdrop
              ? `https://image.tmdb.org/t/p/original/${posterOrBackdrop}`
              : ""
          }
          alt="Movie poster"
        />

        <div className="content ml-[2%] ">
          <h1 className="text-5xl font-black  text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_title ||
              info.detail.original_name}

            <small className="text-2xl font-normal text-zinc-400 ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex mt-3 mb-5  text-white items-center gap-x-3">
            <span className="rounded-full text-sm font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              {""}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] leading-6 font-semibold text-2xl">
              user score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl  font-semibold italic text-zinc-200 ">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-1 text-white capitalize font-semibold tracking-tight mt-5 ">
            overview
          </h1>
          <p className="text-white font-normal">{info.detail.overview}</p>

          <h1 className="text-2xl mb-1 text-white capitalize font-semibold tracking-tight mt-5 ">
            movie translations
          </h1>
          <p className="text-white mb-8  font-normal">
            {info.translations.join(", ")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="bg-blue-800 px-3 gap-2 py-3 flex flex-row-reverse w-fit items-center justify-center rounded-md font-semibold capitalize text-white"
          >
            Play Trailler
            <span className="text-2xl ">
              <IoIosPlay />
            </span>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex  mt-6  items-center  gap-2">
          <h1 className="text-white font-semibold  ">
            Availablt to Platform And Buy
          </h1>
          {(() => {
            const browserRegion = (navigator.language || "").split("-")[1];
            const region = (browserRegion || "IN").toUpperCase();
            const providers =
              (info.watchproviders &&
                info.watchproviders.results &&
                (info.watchproviders.results[region]?.flatrate ||
                  info.watchproviders.results.IN?.flatrate ||
                  info.watchproviders.results.US?.flatrate ||
                  info.watchproviders.results[region]?.buy ||
                  info.watchproviders.results.IN?.buy ||
                  info.watchproviders.results.US?.buy)) ||
              [];

            return Array.isArray(providers)
              ? providers.map((w, idx) =>
                  w && w.logo_path ? (
                    <img
                      key={w.provider_id || idx}
                      src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                      alt={w.provider_name || "Provider"}
                      className="h-8 w-8 mx-1 rounded"
                    />
                  ) : null
                )
              : null;
          })()}
        </div>

        <div className="flex mt-6  items-center  gap-2">
          <h1 className="text-white font-semibold">Available to Rent</h1>
          {(() => {
            const browserRegion = (navigator.language || "").split("-")[1];
            const region = (browserRegion || "IN").toUpperCase();
            const providers =
              (info.watchproviders &&
                info.watchproviders.results &&
                (info.watchproviders.results[region]?.rent ||
                  info.watchproviders.results.IN?.rent ||
                  info.watchproviders.results.US?.rent)) ||
              [];

            return Array.isArray(providers)
              ? providers.map((w, idx) =>
                  w && w.logo_path ? (
                    <img
                      key={w.provider_id || idx}
                      src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                      alt={w.provider_name || "Provider"}
                      className="h-8 w-8 mx-1 rounded"
                    />
                  ) : null
                )
              : null;
          })()}
        </div>
      </div>

      <hr className="text-white mt-7" />
      <h1 className="text-white ml-4 mt-5 font-semibold capitalize text-2xl tracking-tight leading-none">recommendations & similar stuff</h1>
      
      <HorizontalCards
        HorizontalCardsData={
          info.recommendations.results.length > 0
            ? info.recommendations.results
            : info.similar.results
        }
      />


      <Outlet />
    </div>
  );
};

export default MovieDetails;
