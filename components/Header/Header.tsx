"use client";
import React, { useState } from "react";
import Search from "./Search";
import Login from "./Login";
import ListLinks from "./ListLinks";
import Link from "next/link";
import { useDebonceSearch } from "@/hooks/useDebonceSearch";
import SearchData from "../Search/SearchData";

const Header: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { ListSearchData, isLoading, resultsSearchData } = useDebonceSearch(
    searchValue,
    activeSearch ,

  );

  return (
    <div className="flex gap-2 justify-between items-center py-2 text-xl text-gray-500 relative z-50 px-2">
      <div className="flex gap-10 items-center">
        <Link href={"/"} className="text-3xl text-white z-50">
          Logo
        </Link>
        <ListLinks />
      </div>
      <div className="flex gap-4 z-20">
        <Search
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isLoading={isLoading}
        />
        <Login />
      </div>

      {activeSearch &&  (
        <SearchData
          searchValue={searchValue}
          isLoading={isLoading}
          resultsSearchData={resultsSearchData}
          ListSearchData={ListSearchData}
          setActiveSearch={setActiveSearch}
        />
      )}
    </div>
  );
};

export default Header;
