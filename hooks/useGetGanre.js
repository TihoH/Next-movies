import { getGanre } from "@/API/getGanre";
import { useEffect, useState } from "react";

export function useGetGanre(type) {
  const [dataGanre, setDataGanre] = useState(null);

  async function getGanreApi(type) {
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
