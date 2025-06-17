'use client'
import React, { FC } from "react";
import Image from "next/image";
import BTNFavorites from "@/components/UI/BTNFavorites";
import PageFilmDescription from "@/components/PageFilm/PageFilmDescription";
import { PageFilmDescriptionProps } from "@/types/types";



const PageFilmBasis:FC<PageFilmDescriptionProps> = ({data , trailer ,actors}) => {


  const adedToFavorites = () => {
    console.log(data)
  }
  
  return (
    <div className="flex w-full">
      <div className="z-20 sticky top-10 self-start">
        <Image
          className="rounded-lg border border-green-800"
          src={`https://image.tmdb.org/t/p/w780/${data?.poster_path}`}
          alt="photo"
          width={400}
          height={300}
          priority
        />
        <BTNFavorites
          text="Добавить в избранное"
          className="mt-3"
          isHover={false}
          adedToFavorites={ adedToFavorites}
        />
      </div>

      <div className="w-[70%] pl-10 z-20">
        <PageFilmDescription
          data={data}
          trailer={trailer}
          actors={actors.cast}
        />
      </div>
    </div>
  );
};

export default PageFilmBasis;
