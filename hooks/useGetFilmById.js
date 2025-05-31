import { useState, useEffect } from "react";

export function useGetFilmById(id, type, getFunc) {
  const [data, setData] = useState(null);
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const dataFilm = await getFunc(id, type);
        setData(dataFilm);
      } catch (error) {
        console.error("Ошибка загрузки фильма:", error);
        setData(null);
      }
    }

    fetchData();
  }, [id, type, getFunc]);

  return { data , loading };
}