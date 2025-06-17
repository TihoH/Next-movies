import { DataSearch } from './../types/types';
import { instanseFetch } from './instanseFetch';

export async function getCategories(id: string, type: string, page: number, year: number , sort:string): Promise<DataSearch> {
  const baseUrl = `https://api.themoviedb.org/3/discover/${type}`;
  const commonParams = `include_adult=false&include_video=false&language=ru&page=${page}&sort_by=vote_average.${sort}&primary_release_year=${year}`;

  // Если id отсутствует — используем базовый URL без фильтра по жанрам и году
  if (!id) {
    const apiAllFilm = `${baseUrl}?${commonParams}`;
    return await instanseFetch(apiAllFilm);
  }

  // Если id есть — выбираем API в зависимости от типа
  switch (type) {
    case 'movie': {
      const apiSortMovie = `${baseUrl}?${commonParams}&primary_release_year=${year}&with_genres=${id}&sort_by=vote_average.${sort}&vote_count.gte=100`;
      return await instanseFetch(apiSortMovie);
    }
    case 'tv': {
      const apiSortTV = `${baseUrl}?${commonParams}&first_air_date_year=${year}&with_genres=${id}&sort_by=vote_average.${sort}&vote_count.gte=100`;
      return await instanseFetch(apiSortTV);
    }
    default: {
      // На случай неизвестного типа
      const apiAllFilm = `${baseUrl}?${commonParams}`;
      return await instanseFetch(apiAllFilm);
    }
  }
}




// МОЙ ВАРИАНТ 


// export async function getCategories(id: string, type: string, page: number, year: number): Promise<DataSearch> {
//   const apiAllFilm = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_null_first_air_dates=false&language=ru&page=${page}&sort_by=popularity.desc`;
//   const apiSortTV = `https://api.themoviedb.org/3/discover/${type}?first_air_date_year=${year}&include_adult=false&include_video=false&language=ru&page=${page}&sort_by=popularity.desc&with_genres=${id}`;
//   const apiSortMovie = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=ru&page=${page}&primary_release_year=${year}&sort_by=popularity.desc&with_genres=${id}`;

//   if (!id) {
//     return await instanseFetch(apiAllFilm);
//   }

//   if (type === 'movie') {
//     return await instanseFetch(apiSortMovie);
//   } else if (type === 'tv') {
//     return await instanseFetch(apiSortTV);
//   }

//   return await instanseFetch(apiAllFilm);
// }

