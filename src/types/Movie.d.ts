export interface ISearchData {
  s: string
  page: number
}

export interface IMovieItem {
  Poster: string
  Title: string
  Type: string
  Year: String
  imdbID: string
}

export interface ISearchResult extends ISearchData {
  movieList: IMovieItem[]
}

export interface IMovieList {
  Response: string
  Search: IMovieItem[]
  totalResults: string
}
