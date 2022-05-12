import styles from './InfinityScroll.module.scss'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import { getMovieList } from 'axios/apis'
import { AxiosResponse } from 'axios'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { movieListState } from 'state/movie'
import { alertState } from 'state/modal'

import { Spinner } from '../../assets/svg/index'

interface Props {
  children: ReactNode
}

const InfinityScroll = ({ children }: Props) => {
  const [movieList, setMovieList] = useRecoilState(movieListState)
  const [isNext, setIsNext] = useState(false)
  const spinnerRef = useRef<HTMLDivElement>(null)
  const setAlertState = useSetRecoilState(alertState)

  const observer = useMemo(
    () =>
      new IntersectionObserver(async ([{ isIntersecting, target }]) => {
        if (!isIntersecting) {
          return
        }
        observer.unobserve(target)

        getMovieList({ s: movieList.s, page: movieList.page + 1 })
          .then((res: AxiosResponse) => {
            if (res.data.Response === 'False') {
              throw new Error(res.data.Error)
            }

            setMovieList((prev) => {
              return {
                ...prev,
                page: prev.page + 1,
                movieList: [...prev.movieList, ...res.data.Search],
                totalResults: prev.totalResults - 10,
              }
            })

            observer.observe(target)
          })
          .catch((err) => {
            setAlertState({ state: true, message: err.message })
          })
      }),
    [movieList.page, movieList.s, setAlertState, setMovieList]
  )

  useEffect(() => {
    if (spinnerRef.current) observer.observe(spinnerRef.current)

    return () => observer.disconnect()
  }, [observer, isNext])

  useEffect(() => {
    if (movieList.totalResults >= 10) {
      setIsNext(true)
    } else {
      setIsNext(false)
    }
  }, [movieList])

  return (
    <div className={styles.infinityScroll}>
      {children}
      {isNext && (
        <div ref={spinnerRef} className={styles.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default InfinityScroll
