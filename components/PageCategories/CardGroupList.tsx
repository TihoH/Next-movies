"use client";
import React, { FC, useState } from "react";
import { IAllGenres } from "@/types/types";
import CategoriesList from "./CategoriesList";
import CategoriesHeader from "./CategoriesHeader";
import MyPagination from "../Pagination/MyPagination";
import MUIProvider from "@/app/MUIProvider";
import { useGetCategories } from "@/hooks/useGetCategories";

interface CategoriesGroupListProps {
  genres: IAllGenres[];
  id: string;
}

const CategoriesGroupList: FC<CategoriesGroupListProps> = ({ genres, id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const categories = useGetCategories(id, "movie", currentPage);

  const changeCurrentPage = (e:React.ChangeEvent , value:number) => {
    setCurrentPage(value);
  };


  return (
    <div>
      <CategoriesHeader />
      <CategoriesList
         dataList={categories?.results ?? null}
        genres={genres}
      />
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
