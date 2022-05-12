import { ISearchResult } from '../types/Movie.d'
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
