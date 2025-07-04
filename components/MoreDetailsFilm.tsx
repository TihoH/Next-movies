import React, { FC } from "react";
import BTNFavorites from "./UI/BTNFavorites";
import { Loader } from "lucide-react";
import Link from "next/link";
import YouTube from "react-youtube";
import {useGetVideoTrailer} from '@/hooks/useGetVideoTrailer'
import FilmHoverDescriptionStore from "@/store/FilmHoverDescriptionStore";
import { sortGenres } from "@/utils/sortGanre";
import { useGetGanre } from "@/hooks/useGetGanre";

const MoreDetailsFilm: FC = () => {
  const dataDetailsFilm = FilmHoverDescriptionStore( (store) => store.dataDetailsFilm );
  const idMoreDetailsViedeo = FilmHoverDescriptionStore( (store) => store.idMoreDetailsViedeo);
  const ganres = useGetGanre('movie')
  const trailerKey  = useGetVideoTrailer(idMoreDetailsViedeo , 'movie')

  if (!dataDetailsFilm) {
    return <Loader />;
  }

  const opts = {
    width: "70%",
    height: "300px",
  };

  return (
    <div className="text-white p-3  flex gap-5 border border-gray-600 rounded-md ">
      <div className="min-w-[300px]">
        {dataDetailsFilm.poster_path ? (
          <img
            className={`h-[400px] w-full  rounded-lg border`}
            src={`https://image.tmdb.org/t/p/w780/${dataDetailsFilm.poster_path}`}
            alt=""
          />
        ) : (
          <div className="h-[400px] w-[300px] bg-gray-400"></div>
        )}
        <div className="mt-2 ">
          <BTNFavorites
            isHover={false}
            text="Добавить в избранное"
            className={"mt-2"}
          />
          <Link
            href={`/pageFilm/${dataDetailsFilm.id}`}
            className=" block text-center w-full border border-gray-700 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Смотреть
          </Link>
        </div>
      </div>
      <div>
        <p>
          <span className="text-gray-400">Название: </span>
          <span>{dataDetailsFilm.title}</span>
        </p>
        {dataDetailsFilm.tagline && (
          <div className="text-center my-2">
            <span className="text-gray-400">Слоган: </span>
            <span>{dataDetailsFilm.tagline}</span>
          </div>
        )}
        <p>
          {" "}
          <span className="text-gray-400">Дата релиза:</span>{" "}
          <span>{dataDetailsFilm.release_date}</span>
        </p>
        <div>
          <span className="text-gray-400">Продолжительность: </span>
          <span>{dataDetailsFilm.runtime} мин</span>
        </div>
        <p className="">
          <span className="text-gray-400">Описание: </span>
          <span className="text-center text-sm">
            {dataDetailsFilm.overview}
          </span>
        </p>
        <div className="flex">
          <span className="text-gray-400">Жанр: </span>
          <ul className="flex gap-2 ml-1">
            {sortGenres(dataDetailsFilm.genre_ids , ganres )}
          </ul>
        </div>
        <div>
          {trailerKey ? <YouTube videoId={trailerKey} opts={opts} /> : 'загрузка'}
        </div>
      </div>
    </div>
  );
};

export default MoreDetailsFilm;
