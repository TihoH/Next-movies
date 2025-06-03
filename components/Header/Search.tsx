"use client";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import LoaderMini from "../UI/LoaderMini";

interface SearchProps {
  activeSearch: Boolean;
  setActiveSearch: (arg0: boolean) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  isLoading: Boolean;
  inpRef: any
}

const Search: React.FC<SearchProps> = ({
  activeSearch,
  setActiveSearch,
  setSearchValue,
  searchValue,
  isLoading,
  inpRef
}) => {



  return (
    <div
      className={`flex  z-50 items-center relative cursor-pointer duration-700 ${
        activeSearch ? "w-[300px]" : "w-[130px]"
      }`}
      onClick={  () => setActiveSearch(true)}
      //   onMouseLeave={() => setActiveSearch(false)}
    >
      <input
        type="text"
        placeholder="Поиск"
        value={searchValue}
        ref={inpRef}
        onChange={(event) =>  setSearchValue(event.target.value)}
        className=" outline-none group/styleSearch  px-3    w-full border border-green-900 h-[50px] rounded-xl bg-[#1F1B2E] hover:bg-gray-700 "
      />
      {!isLoading ? (
        <SearchIcon
          className=" absolute z-50 right-0 translate-y-[-50%] top-[50%] mr-2 "
          size={"30px"}
          color="white "
        />
      ) : (
        <LoaderMini />
      )}
    </div>
  );
};

export default Search;
