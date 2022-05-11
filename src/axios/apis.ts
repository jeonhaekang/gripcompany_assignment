import { ISearchData, IMovieList } from '../types/Movie.d'
import { instance } from './axios'

const BASE_URL = 'http://www.omdbapi.com/'

export const getMovieList = (params: ISearchData) =>
  instance.get<IMovieList>(`${BASE_URL}`, { params: { apikey: process.env.REACT_APP_MOVIE_KEY, ...params } })
