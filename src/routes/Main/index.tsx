import styles from './Main.module.scss'
import { useMemo } from 'react'
import _ from 'lodash'

import { useRecoilValue } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from '../../types/Movie.d'

import Card from 'components/Card'

import InfinityScroll from 'components/InfinitiScroll'
import InitalMessage from 'components/InitalMessage'

const Main = () => {
  const searchResult = useRecoilValue<ISearchResult>(movieListState)

  const { movieList } = searchResult

  const uniqArray = useMemo(() => _.uniqBy(movieList, 'imdbID'), [movieList])

  return (
    <div className={styles.main}>
      <main>
        {movieList.length > 0 ? (
          <InfinityScroll>
            <ul className={styles.movieList}>
              {uniqArray.map((item) => {
                return <Card key={item.imdbID} data={item} />
              })}
            </ul>
          </InfinityScroll>
        ) : (
          <InitalMessage message='검색 결과가 없습니다.' />
        )}
      </main>
    </div>
  )
}

export default Main
