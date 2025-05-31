import {instanseFetch} from './instanseFetch'

export async function getFilmById(id: number, type: "movie" | "tv") {
  return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id}?language=ru`);
}