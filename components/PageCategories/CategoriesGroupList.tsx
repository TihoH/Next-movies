"use client";
import React, { FC, useEffect, useState } from "react";
import { IAllGenres } from "@/types/types";
import CategoriesList from "./CategoriesList";
import CategoriesFilter from "./CategoriesFilter";
import MyPagination from "../Pagination/MyPagination";
import MUIProvider from "@/app/MUIProvider";
import { useGetCategories } from "@/hooks/useGetCategories";
import { useGetGanre } from "@/hooks/useGetGanre";

interface CategoriesGroupListProps {
  genres: IAllGenres[];
  id: string;
  type: string;
}

const CategoriesGroupList: FC<CategoriesGroupListProps> = ({
  genres,
  id,
  type,
}) => {
  const currentId = sortParams(id, genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [adedGanre, setAdedGanre] = useState<string>(currentId);
  const [selectedYear , setselectedYear] = useState<number | string | null>(null)
   const [changeRating , setChangeRating] = useState<string | null>(null)
  const categories = useGetCategories(adedGanre, type, currentPage , selectedYear , changeRating); // получаем категории
  const ganresSort = useGetGanre(type);
  const years = Array.from({ length: 2025 - 1960 + 1 }, (_, i) => ({name: 1960 + i}));
  const rating = [
    {nameRating: 'рейтингу (низкий)' , value: 'asc'},
    {nameRating: 'рейтингу (высокий)' , value: 'desc'},
  ]


  const changeCurrentPage = (e: React.ChangeEvent, value: number) => {
    setCurrentPage(value);
  };

  function sortParams(id: string, genres) {
    const decodeId = decodeURIComponent(id).trim();
    const findGanre = genres.find((item) => item.name === decodeId);
    if (findGanre) {
      return findGanre.id;
    }
  }

  useEffect(() => {
    if (genres ) {
      sortParams(id, genres);
    }
  }, [id, type, currentPage , selectedYear , changeRating]);

  return (
    <div>
      <CategoriesFilter
        setAdedGanre={setAdedGanre}
        ganresSort={ganresSort}
        currentIdName={id}
        years={years}
        setselectedYear={setselectedYear}
        rating={rating}
        setChangeRating={setChangeRating}
      
      />
      <CategoriesList dataList={categories?.results ?? null} genres={genres} />
      <div className="flex justify-center mt-10">
        <MUIProvider>
          <MyPagination
            count={categories?.total_results}
            page={currentPage}
            changeCurrentPage={changeCurrentPage}
          />
        </MUIProvider>
      </div>
    </div>
  );
};

export default CategoriesGroupList;
