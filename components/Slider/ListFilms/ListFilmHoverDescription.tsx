'use client'
import BTNFavorites from "@/components/UI/BTNFavorites";
import FilmHoverDescriptionStore from "@/store/FilmHoverDescriptionStore";
import { IAllGenres, IlistItem } from "@/types/types";
import { sortGenres } from "@/utils/sortGanre";
import { Info } from "lucide-react";
import React, { FC } from "react";

interface ListFilmHoverDescriptionProps {
  listItem: IlistItem;
  ganre: IAllGenres[];
  isHover?: boolean;
  isActiveDescription: boolean;
}

const ListFilmHoverDescription: FC<ListFilmHoverDescriptionProps> = ({
  listItem,
  ganre,
  isHover,
  isActiveDescription,
}) => {
    const showPopupDetailsFilm = FilmHoverDescriptionStore(store => store.showPopupDetailsFilm)

  return (
    <div className="flex  flex-col justify-between  h-full w-full group-hover:translate-x-[220px] top-0 duration-700  transition absolute   rounded-md -left-[220px]  text-sm  bg-black  bg-opacity-60 px-2  ">
      <div className="flex flex-col gap-1 pt-2">
        <p>
          <span className="text-gray-400">Название:</span> {listItem.title}
        </p>
        <p>
          {" "}
          <span className="text-gray-400">Год:</span>{" "}
          {listItem.release_date?.toString().slice(0 , 4)}
        </p>
        <p>
          <span className="text-gray-400">Жанр: </span>
          {sortGenres(listItem.genre_ids, ganre)}
        </p>
      </div>
      <div
        className="flex flex-col justify-end gap-2 "
        onClick={(e) => e.preventDefault()}
      >
        {isActiveDescription && (
          <div className="flex justify-end mr-4 relative group/showDetails">
            <Info
              strokeWidth={1.5}
              className="  text-yellow-500 hover:text-baseGreen "
              onClick={() => showPopupDetailsFilm(listItem) }
            />
            <span className="absolute px-5 py-2 opacity-0 right-8 -top-3 bg-gray-900/50  duration-300 group-hover/showDetails:opacity-100 text-white ">
              Подробнее
            </span>
          </div>
        )}
        <div className="px-4">
          <BTNFavorites isHover={isHover} text="В избранное" />
        </div>
      </div>
    </div>
  );
};

export default ListFilmHoverDescription;
