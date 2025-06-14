'use client'
import React, { FC } from "react";
import CardItem from "./CardItem";
import MoreDetailsFilm from "../MoreDetailsFilm";
import Popup from "../Popups/Popup";
import { IAllGenres, IlistItem } from "@/types/types";
import Skeleton from "../Skeleton/Skeleton";
import { useParams } from "next/navigation";

interface CategoriesGroupListProps {
  dataList: IlistItem[] | null ;
  genres: IAllGenres[];
}

const CategoriesList: FC<CategoriesGroupListProps> = ({ dataList, genres  }) => {
    const {type} = useParams()
  
 
  if (!dataList) {
    return <Skeleton  numberRenderList={20}/>
  }
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {dataList.map((cardItem, index) => (
          <CardItem key={index} cardItem={cardItem} genres={genres} type={type as string}  />
        ))}
      </div>

      <Popup>
        <MoreDetailsFilm />
      </Popup>
    </div>
  );
};

export default CategoriesList;
