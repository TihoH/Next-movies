import {instanseFetch} from './instanseFetch'

export async function getSearchData(value){
    return await instanseFetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=ru&page=1` )
}