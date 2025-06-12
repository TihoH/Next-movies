export type dropMenu = {
    id: number ,
    hoverMenu: GanresType[]
}

export interface IAllGenres {
    id: number ,
    name: string
}

export interface DataSearch {
  total_results: number;
  results: IlistItem[];
}

export interface IlistItem {
    title: string;
    id: number
    release_date: number;
    genre_ids: number[],
    poster_path: string
}
export interface hoverMenu  {
    name: string

}
export interface GanresType {
    name: string
    id: number
}
export interface headerLinks {
    name: string,
    id: number,
    activeDropMenu: boolean
}


// Start Props
export interface GroupListFilmsProps {
    title: string,
    type: 'movie' | 'tv',
    movieListType: string
    id?: string ,
    genres: IAllGenres[]
}
export interface ListFilmProps {
    // type: string,
    // movieListType: string
    // trailer: any
    data: any
    genres: IAllGenres[]
}

export interface IPart {
    id: number ,
    title: string ,
    release_date: string,
    original_title: string,
    overview:string ,
    media_type: string
    genre_ids: number[]
    poster_path:string
}
export interface PageFilmDescriptionProps {
    data: {
        id: number
        genres: any
        origin_country: any
        production_companies: any
        title: string,
        tagline: string,
        original_title: string,
        overview: string,
        release_date: number
        runtime: number
        poster_path:string
    }
      trailer: any,
  actors: any,
}
// END Props