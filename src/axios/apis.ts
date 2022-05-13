import { AxiosResponse } from 'axios'
import { ISearchData, IMovieList } from '../types/Movie.d'
import { instance } from './axios'

const BASE_URL = 'http://www.omdbapi.com/'

instance.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
  if (response.data.Response === 'False') {
    throw new Error(response.data.Error)
  }
  return response
})

export const getMovieList = (params: ISearchData) =>
  instance.get<IMovieList>(`${BASE_URL}`, { params: { apikey: process.env.REACT_APP_MOVIE_KEY, ...params } })
