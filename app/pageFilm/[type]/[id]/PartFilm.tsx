"use client";
import { useGetPartCollactions } from "@/hooks/useGetPartCollactions";
import { IDataTvFilm, IPart } from "@/types/types";
import Image from "next/image";
import React, { FC } from "react";
import PartListItem from "./PartListItem";

interface PartFilmProps {
  partId: number;
  id: string;
  type: string;
  dataSeasons: IDataTvFilm[];
}

const PartFilm: FC<PartFilmProps> = ({ partId, id, type, dataSeasons }) => {
  const dataPart: IPart[] = useGetPartCollactions(partId , type);

  const findImage = sortTypeData().find((item) => item.id === Number(id));

  // console.log(sortTypeData())

  function sortTypeData(){
    if(type === 'movie'){
      return dataPart
    }else if(type === 'tv'){
      return dataSeasons.map( item => ({...item , air_date: item.air_date? item.air_date.slice(0 , 4) : 'неизвестно'}) )
    }
    return []
  }
  
  return (
    <div className=" mt-10 ">
      <h2 className="text-3xl">Все части</h2>
      <ul
        className={` ${
          sortTypeData().length >= 5 && "overflow-y-scroll"
        } mt-3 relative shadow-equal max-h-[400px] rounded-md p-4 flex  scrollbar  `}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w342${findImage?.poster_path}`}
          alt={"Image part"}
          width={300}
          height={400}
          className="sticky top-0 rounded-md"
        />
        <div className=" pl-10 w-full mb-2">
          { sortTypeData().sort((a, b) => Number(b.release_date) - Number(a.release_date))
            .map((part, index) => (
              <PartListItem key={index} part={part} id={id} type={type} />
            ))}
        </div>
      </ul>
    </div>
  );
};

export default PartFilm;
