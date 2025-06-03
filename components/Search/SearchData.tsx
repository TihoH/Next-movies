"use client";
import React, { FC, useEffect, useRef } from "react";
import SearchList from "./SearchList";
import Loader from "../UI/Loader";
import { IlistItem } from "@/types/types";

interface SearchDataProps {
  searchValue: string;
  isLoading: boolean;
  totalResults: number;
  ListSearchData: IlistItem[];
  setActiveSearch: (arg0: boolean) => void;
  refHeader: any
}

const SearchData: FC<SearchDataProps> = ({
  searchValue,
  isLoading,
  totalResults,
  ListSearchData,
  setActiveSearch,

  refHeader
}) => {
  const refClose = useRef<HTMLDivElement>(null);

const handleClickOutside = (event: globalThis.MouseEvent) => {
  const target = event.target;

  // Защитная проверка
  if (!(target instanceof Node)) return;

  const clickedOutside =
    refClose.current &&
    !refClose.current.contains(target) &&
    refHeader.current &&
    !refHeader.current.contains(target);

  if (clickedOutside) {
    setActiveSearch(false);
  }
};

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={refClose}
      className={`scrollbar rounded-md border-b-8 border-gray-800 absolute z-10 left-0 right-0 duration-500 top-[65px] min-h-[250px] max-h-[650px] overflow-y-scroll bg-[#100E19] p-1 `}
    >
      {searchValue ? (
        <div className="flex justify-between pr-5 sticky z-50 -top-1 py-3 bg-[#100E19]">
          <h2 className="px-2">
            Результат по запросу:{" "}
            <span className="text-2xl text-white font-serif">
              {searchValue}
            </span>
          </h2>
          {!isLoading && (
            <div>
              <span>Всего найдено: </span>
              <span
                className={` ${
                  totalResults === 0 && "text-red-700"
                } text-2xl text-white font-serif `}
              >
                {" "}
                {totalResults}
              </span>
            </div>
          )}
        </div>
      ) : (
        <h2 className="text-3xl">Введите запрос в поисковой строке</h2>
      )}
      {!isLoading && searchValue.length ? (
        <SearchList
          ListSearchData={ListSearchData}
          setActiveSearch={setActiveSearch}
        />
      ) : (
        isLoading && <Loader />
      )}
    </div>
  );
};

export default SearchData;
