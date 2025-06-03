
import {instanseFetch} from './instanseFetch'

export async function getMovieListsByType(type:string , movieListType:string , id?: string){
    return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id ? id : ''}/${movieListType}?language=ru&page=1`)
}
