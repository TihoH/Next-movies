import { allGenres } from "@/types/types"


export  function sortGenres(ids:number[], allGenres:allGenres[]){
    // сташил , нужно повторить
    console.log(allGenres)
    return ids
      ?.map((id) => allGenres?.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .join(", ")
  };