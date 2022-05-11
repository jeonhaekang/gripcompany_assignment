import styles from './Search.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react'

import { getMovieList } from 'axios/apis'
import { SearchIcon } from 'assets/svg'

import { useSetRecoilState } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from 'types/Movie'
import { AxiosResponse } from 'axios'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const setMovieList = useSetRecoilState<ISearchResult>(movieListState)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    getMovieList({ s: keyword, page: 1 })
      .then((res: AxiosResponse) => {
        setMovieList({ s: keyword, page: 1, movieList: res.data.Search })
      })
      .catch(() => {
        alert('검색에 실패하였습니다.')
      })

    setKeyword('')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <input type='text' value={keyword} onChange={changeHandler} />
      <button type='submit'>
        <SearchIcon type='button' />
      </button>
    </form>
  )
}

export default Search
