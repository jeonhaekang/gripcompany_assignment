export interface ISearchData {
  s: string
  page: number
}

export interface IMovieItem {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface ISearchResult extends ISearchData {
  movieList: IMovieItem[]
  totalResults: number
}

export interface IMovieList {
  Response: string
  Search: IMovieItem[]
  totalResults: string
}
