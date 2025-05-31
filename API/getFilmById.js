import {instanseFetch} from './instanseFetch'

export async function getFilmById(id , type){
    return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id}?language=ru`)
}