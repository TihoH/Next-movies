"use client";
import React, { FC } from "react";
import Popup from "../Popups/Popup";
import MoreDetailsFilm from "../MoreDetailsFilm";
import CardItem from "./CardItem";
import { IAllGenres, IlistItem } from "@/types/types";

interface CategoriesGroupListProps {
  dataList: IlistItem[];
  genres: IAllGenres[];
}

const CategoriesGroupList: FC<CategoriesGroupListProps> = ({
  dataList,
  genres,
}) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {dataList.map((cardItem, index) => (
          <CardItem key={index} cardItem={cardItem} genres={genres} />
        ))}
      </div>

      <Popup>
        <MoreDetailsFilm />
      </Popup>
    </div>
  );
};

export default CategoriesGroupList;
