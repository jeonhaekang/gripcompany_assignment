import styles from './InfinityScroll.module.scss'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import { getMovieList } from 'axios/movieApi'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { movieListState } from 'state/movie'
import { modalState } from 'state/modal'

import { Spinner } from '../../assets/svg/index'
import { ISearchResult } from 'types/Movie'

interface Props {
  children: ReactNode
}

const InfinityScroll = ({ children }: Props) => {
  const [movieList, setMovieList] = useRecoilState<ISearchResult>(movieListState)
  const [isNext, setIsNext] = useState(false)
  const spinnerRef = useRef<HTMLDivElement>(null)
  const setModalState = useSetRecoilState(modalState)

  const callBackHandler: IntersectionObserverCallback = useMemo(
    () =>
      async ([{ isIntersecting, target }], observer) => {
        if (!isIntersecting) {
          return
        }

        observer.unobserve(target)

        try {
          const result = await getMovieList({ s: movieList.s, page: movieList.page + 1 })
          setMovieList((prev) => {
            return {
              ...prev,
              page: prev.page + 1,
              movieList: [...prev.movieList, ...result.data.Search],
              totalResults: prev.totalResults - 10,
            }
          })
        } catch (err) {
          setModalState((prev) => {
            return { ...prev, state: true, message: '알 수 없는 에러가 발생하였습니다.' }
          })
        }

        observer.observe(target)
      },
    [movieList.page, movieList.s, setModalState, setMovieList]
  )

  const observer = useMemo(() => new IntersectionObserver(callBackHandler), [callBackHandler])

  useEffect(() => {
    if (spinnerRef.current) observer.observe(spinnerRef.current)

    return () => observer.disconnect()
  }, [observer, isNext])

  useEffect(() => {
    setIsNext(movieList.totalResults >= 10)
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
