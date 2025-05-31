"use client";

import { PageFilmDescriptionProps } from "@/types/types";
import React from "react";

const PageFilmDescription: React.FC<PageFilmDescriptionProps> = ({
  data,
  trailer,
  actors,
}) => {
  return (
    <section className="">
      <h1 className="text-3xl text-gray-200 text-center">" {data.title} "</h1>

      <div className="flex flex-col gap-3 mt-5 ">
        {data.tagline && (
          <div>
            <span className="text-gray-400">Слоган: </span>
            <span>{data.tagline}</span>
          </div>
        )}
        <div>
          <span className="text-gray-400">Оригинальное название: </span>
          <span>" {data.original_title} "</span>
        </div>
        <div className="">
          <span className="text-gray-400">Описание: </span>
          <span className="text-center">{data.overview}</span>
        </div>
        <div>
          <span className="text-gray-400">Дата релиза: </span>
          <span>{data.release_date}</span>
        </div>
        <div>
          <span className="text-gray-400">Продолжительность: </span>
          <span>{data.runtime} мин</span>
        </div>
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
        <div className="flex flex-col ">
          <span className="text-gray-400">Актеры: </span>
          <ul className="flex gap-2 scroll  overflow-x-auto text-center ">
            {actors?.map((actor, index) => (
              <li className="" key={index}>
                {/* <img src="" alt="" /> */}
                <span>{actor.name} </span>
                {/* { index < actors.length -1 && ' ,' } */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* <iframe
            src={`https://www.youtube.com/embed/` + dataTrailer[1]?.key}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          /> */}
        </div>
      </div>
    </section>
  );
};

export default PageFilmDescription;
