import styles from './Search.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react'

import { getMovieList } from 'axios/apis'
import { AxiosResponse } from 'axios'

import { useSetRecoilState } from 'recoil'
import { movieListState } from 'state/movie'
import { modalState } from 'state/modal'

import { ISearchResult } from 'types/Movie'
import { IModal } from 'types/Modal'

import { SearchIcon } from 'assets/svg'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const setMovieList = useSetRecoilState<ISearchResult>(movieListState)
  const setModalState = useSetRecoilState<IModal>(modalState)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!keyword.trim()) {
      return
    }

    getMovieList({ s: keyword, page: 1 })
      .then((res: AxiosResponse) => {
        setMovieList({ s: keyword, page: 1, movieList: res.data.Search, totalResults: Number(res.data.totalResults) })
      })
      .catch((err) => {
        setModalState((prev) => {
          return { ...prev, state: true, message: err.message }
        })
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
