import { DataSearch } from './../types/types';

import {instanseFetch} from './instanseFetch'

export async function getCategories (id: string, type: string , page:number):Promise<DataSearch> {
  return await instanseFetch(`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=ru&page=${page}&sort_by=popularity.desc&with_genres=${id}`);
}