import {instanseFetch} from './instanseFetch'

export async function getTrailer(id , type){
    return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`)
}