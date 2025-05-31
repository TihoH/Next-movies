import next from 'next'
import {instanseFetch} from './instanseFetch'

export async function getGanre(type:string){
    return await instanseFetch(`https://api.themoviedb.org/3/genre/${type}/list?language=ru` )
}