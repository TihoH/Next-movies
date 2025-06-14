import {instanseFetch} from './instanseFetch'

export async function getFilmById(id: string, type:string) {
  return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id}?language=ru`);
}