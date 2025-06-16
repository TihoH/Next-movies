'use client'
import BTNFavorites from "@/components/UI/BTNFavorites";
import { IlistItem, IPart } from "@/types/types";
import Link from "next/link";
import React, { FC } from "react";
interface PartListItemProps {
  id: string
  type:string
  part: IPart
  setHoverPartImg: (img: string | null) => void
}

const PartListItem:FC <PartListItemProps> = ({part  , id , type , setHoverPartImg}) => {

  return (
    <Link href={`/pageFilm/${type}/${part.id}`}>
      <li
        onMouseEnter={ () => setHoverPartImg(part.poster_path) }
        onMouseLeave={ () => setHoverPartImg(null) }
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
            {part.title || part.name}
          </span>
        </div>
        <div>
          <div className="flex gap-2">
            <span className="text-gray-400">Год: </span>
            <span>
              {part.release_date || part.air_date  }
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
  );
};

export default PartListItem;
