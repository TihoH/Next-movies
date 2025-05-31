export type hoverMenu = {
    name: string
}
// export type filmData = {
//     title: string ,
//     tagline: string ,
//     original_title: string ,
//     overview: string ,
//     release_date: number
//     runtime: number
// }


export interface headerLinks {
    name: string,
    id: number,
    activeDropMenu: boolean
    hoverMenu?: hoverMenu[]
}


// Start Props
export interface GroupListFilmsProps {
    title: string,
    type: string,
    movieListType: string
}
export interface ListFilmProps {
    type: string,
    movieListType: string
    trailer: any
    data: any
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
    }
      trailer: any,
  actors: any,
}
// END Props