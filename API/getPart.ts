import { instanseFetch } from "./instanseFetch";

export async function getPartApi(id:number) {
     return await instanseFetch(`https://api.themoviedb.org/3/collection/${id}?language=ru`);
}