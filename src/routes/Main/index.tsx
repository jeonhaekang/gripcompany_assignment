import styles from './Main.module.scss'

import Search from './Search'
import Card from 'components/Card/Card'

import { useRecoilValue } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from '../../types/Movie.d'

const Main = () => {
  const searchResult = useRecoilValue<ISearchResult>(movieListState)

  return (
    <div className={styles.main}>
      <Search />
      <main>
        <ul className={styles.movieList}>
          {searchResult.movieList.map((item) => {
            return <Card key={item.imdbID} data={item} />
          })}
        </ul>
      </main>
    </div>
  )
}

export default Main
