"use client";
import BTNFavorites from "@/components/UI/BTNFavorites";
import { useGetPartCollactions } from "@/hooks/useGetPartCollactions";
import { IPart } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface PartFilmProps {
  partId: number;
  id: string;
  type:string
}

const PartFilm: FC<PartFilmProps> = ({ partId, id , type }) => {
  const dataPart: IPart[] = useGetPartCollactions(partId);

  const findImage = dataPart.find((item) => item.id === Number(id));

  return (
    <div className=" mt-10 ">
      <h2 className="text-3xl">Все части</h2>
      <ul className={` ${dataPart.length >=5  && 'overflow-y-scroll'} mt-3 relative shadow-equal max-h-[400px] rounded-md p-4 flex  scrollbar  `}>
        <Image
          src={`https://image.tmdb.org/t/p/w342${findImage?.poster_path}`}
          alt={"Image part"}
          width={300}
          height={400}
          className="sticky top-0 rounded-md"
        />
        <div className=" pl-10 w-full mb-2">
          {dataPart
            .sort((a, b) => Number(b.release_date) - Number(a.release_date))
            .map((part, index) => (
              <Link key={index} href={`/pageFilm/${type}/${part.id}`}>
                <li
                  className={`${
                    Number(id) === part.id && "border-baseGreen   rounded-md "
                  } hover:bg-gray-800 group/groupTitlePartFilm  rounded-md hover:pl-6 flex justify-between transition-all pr-2 items-center py-1 gap-5 cursor-pointer border-b border-gray-500`}
                >
                  <div className="w-[250px] flex items-center relative">
                    {Number(id) === part.id && (
                      <div className="w-[15px] h-[15px] mr-4 bg-baseGreen rounded-full border absolute -left-7"></div>
                    )}

                    <span
                      className={`${
                        Number(id) === part.id && "text-white "
                      } text-gray-400 group-hover/groupTitlePartFilm:text-white`}
                    >
                      {part.title}
                    </span>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <span className="text-gray-400">Год: </span>
                      <span>
                        {part.release_date
                          ? part.release_date.slice(0, 4)
                          : " Не известно "}
                      </span>
                    </div>
                    <div className="text-gray-400">
                      <button>Показать описание </button>
                    </div>
                  </div>
                  <div className="flex items-center w-[150px]">
                    <BTNFavorites text={"В избранное"} />
                  </div>
                </li>
              </Link>
            ))}
        </div>
        {/* {dataPart.length > 7 && (
          <div className="absolute bottom-0 right-24 animate-bounce text-4xl text-baseGreen bg-white/50 p-4 rounded-full shadow-md">
            ↓
          </div>
        )} */}
      </ul>
    </div>
  );
};

export default PartFilm;
