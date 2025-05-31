import { useEffect, useState } from "react";
import { getSearchData } from "@/API/getSearchData";

export function useDebonceSearch(searchValue, activeSearch) {
  const [ListSearchData, setListSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsSearchData, setResultsSearchData] = useState(null);

  async function getDataBySearch(searchValue) {
    try {
      const dataSearch = await getSearchData(searchValue);
      setListSearchData(dataSearch.results);
      setResultsSearchData(dataSearch);
      setIsLoading(false);
    } catch (error) {
      console.log("Ошибка поиска", error);
    }
  }

  useEffect(() => {
    // if(activeSearch && searchValue){
    //   setIsLoading(true)
    // }else if(searchValue === ''){
    //    setIsLoading(false)
    // }
    activeSearch && searchValue && setIsLoading(true);
    const clearDebounce = setTimeout(() => {
      searchValue && getDataBySearch(searchValue);
    }, 1500);

    return () => {
      clearTimeout(clearDebounce);
    };
  }, [searchValue]);

  return { ListSearchData, isLoading, resultsSearchData };
}
