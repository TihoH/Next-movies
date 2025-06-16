import { DataSearch } from './../types/types';

import { instanseFetch } from './instanseFetch'

// TMBD - discover

export async function getCategories(id: string, type: string, page: number): Promise<DataSearch> {
  
  const apiAllFilm = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_null_first_air_dates=false&language=ru&page=${page}&sort_by=popularity.desc`
  const apiSortFilm =`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=ru&page=${page}&sort_by=popularity.desc$&with_genres=${id} `
  const link = id != 'all' ? apiSortFilm : apiAllFilm  
  return await instanseFetch(`${link}`);
}