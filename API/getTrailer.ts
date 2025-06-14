import {instanseFetch} from './instanseFetch'

export async function getTrailer(id:string , type:string){
    return await instanseFetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`)
}