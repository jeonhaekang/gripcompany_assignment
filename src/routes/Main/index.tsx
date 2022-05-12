import styles from './Main.module.scss'

import { useRecoilValue } from 'recoil'
import { movieListState } from 'state/movie'

import { ISearchResult } from '../../types/Movie.d'

import Search from './Search'
import Card from 'components/Card/Card'
import InitalMessage from './InitalMessage'

const Main = () => {
  const searchResult = useRecoilValue<ISearchResult>(movieListState)

  return (
    <div className={styles.main}>
      <Search />
      <main>
        {!searchResult.s && <InitalMessage />}

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
