import { IlistItem } from '@/types/types';
import {instanseFetch} from './instanseFetch'

export async function getCategories (id: string, type: "movie" | "tv"):Promise<{results: IlistItem[]}> {
  return await instanseFetch(`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=ru&page=1&sort_by=popularity.desc&with_genres=${id}`);
}