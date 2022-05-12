import styles from './Search.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react'

import { getMovieList } from 'axios/apis'

import { useSetRecoilState } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from 'types/Movie'
import { AxiosResponse } from 'axios'

import { SearchIcon } from 'assets/svg'
import { alertState } from 'state/modal'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const setMovieList = useSetRecoilState<ISearchResult>(movieListState)
  const setAlertState = useSetRecoilState(alertState)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    getMovieList({ s: keyword, page: 1 })
      .then((res: AxiosResponse) => {
        if (res.data.Response === 'False') {
          throw new Error(res.data.Error)
        }

        setMovieList({ s: keyword, page: 1, movieList: res.data.Search })
      })
      .catch((err) => {
        setAlertState({ state: true, message: err.message })
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
