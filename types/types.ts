export type dropMenu = {
    id: number,
    hoverMenu: GanresType[]
    type: string
}

export interface IAllGenres {
    id: number,
    name: string
}

export interface DataSearch {
    total_results: number;
    results: IlistItem[];
}
export interface IlistItem {
    id: number,
    title: string;
    name: string
    poster_path: string,
    tagline: string,
    release_date: string
    first_air_date:string
    runtime: number,
    overview: string,
    genre_ids: number[]
    number_of_seasons:string
}
export interface hoverMenu {
    name: string

}
export interface GanresType {
    name: string
    id: number
}
export interface IHeaderLinks {
    name: string,
    id: number,
    activeDropMenu: boolean,
    type: string
}


// Start Props
export interface GroupListFilmsProps {
    title: string,
    type: string,
    movieListType: string
    id?: string,
    genres: IAllGenres[]
}
export interface ListFilmProps {
    type: string,
    // movieListType: string
    // trailer: any
    data: any
    genres: IAllGenres[]
}

export interface IPart {
    id: number,
    title: string,
    name:string,
    release_date: string,
    air_date: string
    original_title: string,
    overview: string,
    media_type: string
    genre_ids: number[]
    poster_path: string
}

export interface IDataTvFilm {
  air_date: any;
      id: number
        genres: any
        origin_country: any
        production_companies: any
        title: string,
        name:string
        tagline: string,
        original_title: string,
        overview: string,
        release_date: string
        first_air_date:string
        runtime: number
        poster_path: string
        number_of_seasons:string
        last_air_date:string
        seasons: string
}
export interface PageFilmDescriptionProps {
    data: IDataTvFilm
    trailer: any,
    actors: any,
}
// END Props