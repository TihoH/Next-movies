import {instanseFetch} from './instanseFetch'

export  function getActors(type , id){
    try {
        return  instanseFetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=ru`)
    } catch (error) {
        console.log('ошибка получения Актеров' , error)
    }
}