'use client'
import React, { FC } from "react";
import ListFilmHoverDescription from "../Slider/ListFilms/ListFilmHoverDescription";
import Image from "next/image";
import { IAllGenres, IlistItem } from "@/types/types";
import Link from "next/link";



interface CardItemProps {
  cardItem: IlistItem
  genres: IAllGenres[]
  type: string
}

const CardItem:FC<CardItemProps> = ({cardItem , genres , type })=> {


  return (
    <div className="overflow-hidden">
      <Link className="group " href={`/pageFilm/${type}/${cardItem.id}`}>
        <div className="relative ">
          <Image
            alt="poster image"
            className="duration-700 rounded-md border border-green-900 hover:opacity-50 group-hover:border-white"
            width={300}
            height={450}
            src={`https://image.tmdb.org/t/p/w342${cardItem.poster_path}`}
          />
          <ListFilmHoverDescription
            listItem={cardItem}
            ganre={genres}
            isActiveDescription={true}
          />
        </div>
        <h5 className="mt-1 group-hover:text-green-700">{cardItem.title || cardItem.name}</h5>
      </Link>
    </div>
  );
};

export default CardItem;
