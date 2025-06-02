import { getGanre } from "@/API/getGanre";
import { IAllGenres } from "@/types/types";
import { useEffect, useState } from "react";

export function useGetGanre(type:string) {
  const [dataGanre, setDataGanre] = useState<IAllGenres[]>([]);

  async function getGanreApi(type:string) {
    try {
      const ganre = await getGanre(type);
      setDataGanre(ganre.genres);
    } catch (error) {
      console.log("ошибка получения жанров", error);
    }
  }

  useEffect(() => {
    if (type) {
      getGanreApi(type);
    } else {
      console.log("не указан ( либо пустой ) тип для Апи жанров");
    }
  }, [type]);

  return dataGanre;
}
