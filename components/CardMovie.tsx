import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import ListFilmHoverDescription from "./Slider/ListFilms/ListFilmHoverDescription";
import { IlistItem } from "@/types/types";

interface CardMovieProps {
    listItem: IlistItem
}

const CardMovie:FC<CardMovieProps> = ({ listItem }) => {
  return (
    <Link className="group " href={`/pageFilm/${listItem.id}`}>
      <div className="relative ">
        <Image
          alt="poster image"
          className="duration-700 rounded-md border border-green-900 hover:opacity-50 group-hover:border-white"
          width={300}
          height={450}
          src={`https://image.tmdb.org/t/p/w342${listItem.poster_path}`}
        />
        <ListFilmHoverDescription
          listItem={listItem}
          showPopupDetailsFilm={showPopupDetailsFilm}
        //   ganre={ganre}
          isActiveDescription={true}
        />
      </div>
      <h5 className="mt-1 group-hover:text-green-700">{listItem.title}</h5>
    </Link>
  );
};

export default CardMovie;
