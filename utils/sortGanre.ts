import { IAllGenres } from "@/types/types"


export  function sortGenres(ids:number[], allGenres:IAllGenres[]){
    // сташил , нужно повторить
    return ids
      ?.map((id) => allGenres?.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .join(", ")
  };


  