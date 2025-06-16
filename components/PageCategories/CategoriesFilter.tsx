"use client";
import React, { FC } from "react";
import SelectSort from "../UI/SelectSort";

interface CategoriesFilterProps {
  setAdedGanre: (value: string) => void;
  ganresSort: any;
  currentIdName:string
}

const CategoriesFilter: FC<CategoriesFilterProps> = ({
  setAdedGanre,
  ganresSort,
  currentIdName
}) => {
  const currentName  = decodeURIComponent(currentIdName).trim();

  return (
    <div className="flex justify-between py-2 ">
      <SelectSort
        sortArr={ganresSort}
        defaultValue={currentName && currentName === 'all' ? 'Все' : "Жанр"}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setAdedGanre(e.target.value)
        }
      />
    </div>
  );
};

export default CategoriesFilter;
