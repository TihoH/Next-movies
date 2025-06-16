"use client";

import { PageFilmDescriptionProps } from "@/types/types";
import React, { useState } from "react";
import YouTube from "react-youtube";

const PageFilmDescription: React.FC<PageFilmDescriptionProps> = ({
  data,
  trailer,
  actors,
}) => {
  const findTrailerKey = trailer?.results?.find(
    (item: { type: string }) => item.type === "Trailer"
  )?.key;

  const [visibleCount, setVisibleCount] = useState<boolean>(false);

  const opts = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="">
      <h1 className="text-3xl text-gray-200 text-center">
        " {data.title || data.name} "
      </h1>

      <div className="flex flex-col gap-3 mt-5 ">
        {data.tagline && (
          <div>
            <span className="text-gray-400">Слоган: </span>
            <span>{data.tagline}</span>
          </div>
        )}
        {data.original_title && (
          <div>
            <span className="text-gray-400">Оригинальное название: </span>
            <span>" {data.original_title} "</span>
          </div>
        )}
        {data.overview && (
          <div className="">
            <span className="text-gray-400">Описание: </span>
            <span className="text-center">{data.overview}</span>
          </div>
        )}
        <div>
          <span className="text-gray-400">Дата релиза: </span>
          <span>{data.release_date || data.first_air_date}</span>
        </div>
        {data.runtime ? (
          <div>
            <span className="text-gray-400">Продолжительность: </span>
            <span>{data.runtime} мин</span>
          </div>
        ) : (
          <div>
            <span className="text-gray-400">Сезонов: </span>
            <span>{data?.seasons?.length - 1}</span>
          </div>
        )}
                {data.number_of_seasons && (
          <div>
            <span className="text-gray-400">Текущий сезон: </span>
            <span>{data.number_of_seasons}</span>
          </div>
        )}
        {data.last_air_date && (
          <div>
            <span className="text-gray-400">Выход последней серии: </span>
            <span>{data.last_air_date}</span>
          </div>
        )}

        <div className="flex">
          <span className="text-gray-400">Жанр: </span>
          <ul className="flex gap-2 ml-1">
            {data.genres?.map((genre, index) => (
              <li key={index}>
                {genre.name}
                {index < data.genres.length - 1 && ","}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <span className="text-gray-400">Страна: </span>
          <ul className="ml-1">
            {data.origin_country?.map((item, index) => (
              <li key={index}>" {item} "</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">Производство: </span>
          <ul className="flex gap-2 ml-1 text-[14px] items-center">
            {data.production_companies?.map((nameProductions, index) => (
              <li
                className="border-x-2 border-gray-500 text-center  px-2"
                key={index}
              >
                {nameProductions.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <span className="text-gray-400">Актеры: </span>
          <ul className="flex flex-wrap">
            {actors
              ?.slice(0, !visibleCount ? 5 : undefined)
              .map((actor, index, arr) => (
                <li className=" px-2 py-1 " key={index}>
                  <span>{actor.name} </span>
                  {index < arr.length - 1 ? " , " : ""}
                </li>
              ))}
            {actors && !visibleCount && actors.length > 5 && (
              <span className="flex items-end">...</span>
            )}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-300"
              onClick={() => setVisibleCount(!visibleCount)}
            >
              {!visibleCount ? "показать остальных" : "скрыть"}
            </button>
          </ul>
        </div>
        {findTrailerKey && (
          <div>
            <YouTube videoId={findTrailerKey} opts={opts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageFilmDescription;
