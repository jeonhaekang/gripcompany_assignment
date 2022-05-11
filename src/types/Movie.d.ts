export interface ISearchData {
  s: string
  page: number
}

export interface ISearchResult extends ISearchData {
  movieList: []
}

export interface IMovieItem {
  Poster: string
  Title: string
  Type: string
  Year: String
  imdbId: string
}

export interface IMovieList {
  Response: string
  Search: IMovieItem[]
  totalResults: string
}
