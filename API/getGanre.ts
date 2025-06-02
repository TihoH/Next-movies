
import { IAllGenres } from '@/types/types'
import {instanseFetch} from './instanseFetch'

export async function getGanre(type:string): Promise<{ genres: IAllGenres[] }> {
    return await instanseFetch(`https://api.themoviedb.org/3/genre/${type}/list?language=ru` )
}