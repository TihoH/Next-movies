
import {instanseFetch} from './instanseFetch'

export async function getMovieListsByType(type , movieListType){
    return await instanseFetch(`https://api.themoviedb.org/3/${type}/${movieListType}?language=ru&page=1`)
}

// upcoming