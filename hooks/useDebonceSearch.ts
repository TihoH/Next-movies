import { useEffect, useState } from "react";
import { getSearchData } from "@/API/getSearchData";
import { IlistItem } from "@/types/types";

export function useDebonceSearch(searchValue:string , activeSearch:Boolean) {
  const [ListSearchData, setListSearchData] = useState<IlistItem[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [totalResults , setTotlaResults] = useState<number>(0);

  async function getDataBySearch(searchValue:string) {
    try {
      const dataSearch = await getSearchData(searchValue);
      setListSearchData(dataSearch.results);
      setTotlaResults(dataSearch.total_results);
      setIsLoading(false);
      console.log(dataSearch)
    } catch (error) {
      console.log("Ошибка поиска", error);
    }
  }

  useEffect(() => {
    activeSearch && searchValue && setIsLoading(true);
    const clearDebounce = setTimeout(() => {
      searchValue && getDataBySearch(searchValue);
    }, 1500);

    return () => {
      clearTimeout(clearDebounce);
    };
  }, [searchValue]);

  return { ListSearchData, isLoading, totalResults };
}
