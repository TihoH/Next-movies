"use client";
import React, { FC } from "react";
import SelectSort from "../UI/SelectSort";

interface CategoriesFilterProps {
  setAdedGanre: (value: string) => void;
  setselectedYear: (value: number | string) => void;
  setChangeRating:(value:  string) => void
  ganresSort: any;
  currentIdName: string;
  years: any;
  rating: any[]
}

const CategoriesFilter: FC<CategoriesFilterProps> = ({
  setAdedGanre,
  setselectedYear,
  setChangeRating,
  ganresSort,
  currentIdName,
  years,
  rating
}) => {
  const currentName = decodeURIComponent(currentIdName).trim();

  return (
    <div className="flex py-2 gap-5">
      <div className="ganre">
        <SelectSort
          sortArr={ganresSort}
          defaultValue={currentName && currentName != "all" ? currentName : "Жанр"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setAdedGanre(e.target.value)
          }
        />
      </div>
      <div className="years">
        <SelectSort
          sortArr={years && years.sort((a, b) => b.name - a.name)}
          defaultValue={"Выберите год"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setselectedYear(e.target.value)
          }
        />
      </div>
    <div className="rating">
        <SelectSort
          sortArr={rating}
          defaultValue={"Сортировать по"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setChangeRating(e.target.value)
          }
          isMarker={false}
        />
      </div>
    </div>
  );
};

export default CategoriesFilter;
