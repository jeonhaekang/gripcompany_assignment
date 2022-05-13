import { ISearchResult, IMovieItem } from '../types/Movie.d'
import { atom } from 'recoil'

export const movieListState = atom<ISearchResult>({
  key: '#searchState',
  default: {
    s: '',
    page: 0,
    movieList: [],
    totalResults: 0,
  },
})

export const bookMarkList = atom<IMovieItem[]>({
  key: '#bookmarkList',
  default: [],
})
