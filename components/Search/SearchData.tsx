import React, { FC, useEffect, useRef } from "react";
import SearchList from "./SearchList";
import Loader from "../UI/Loader";

interface SearchDataProps {
  searchValue: string;
  isLoading: boolean;
  resultsSearchData: any;
  ListSearchData: any;
  setActiveSearch: any;
}

const SearchData: FC<SearchDataProps> = ({
  searchValue,
  isLoading,
  resultsSearchData,
  ListSearchData,
  setActiveSearch,
}) => {
    const refTest = useRef(null) 
    

    // const changeRefTest = () => {
    //     console.log(refTest.current.contains())
    // }

  return (
    <div
    onClick={ () => changeRefTest() }
    ref={refTest}
      className={`scrollbar rounded-md border-b-8 border-transparent absolute left-0 right-0 duration-500 top-[65px] min-h-[250px] max-h-[580px] overflow-y-scroll bg-[#100E19] p-1 `}
    >
      {searchValue ? (
        <div className="flex justify-between pr-5 sticky -top-1 py-3 bg-[#100E19]">
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
                  resultsSearchData?.total_results === 0 && "text-red-700"
                } text-2xl text-white font-serif `}
              >
                {" "}
                {resultsSearchData?.total_results}
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
      ) :    isLoading &&  <Loader /> }
   
      
    </div>
  );
};

export default SearchData;
