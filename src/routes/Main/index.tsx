import styles from './Main.module.scss'

import { useRecoilValue } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from '../../types/Movie.d'

import Card from 'components/Card'
import InitalMessage from './InitalMessage'
import InfinityScroll from 'components/InfinitiScroll'
import { useMemo } from 'react'
import _ from 'lodash'

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
          <InitalMessage />
        )}
      </main>
    </div>
  )
}

export default Main
