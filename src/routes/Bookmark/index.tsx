import styles from './Bookmark.module.scss'

import { useRecoilValue } from 'recoil'
import { bookMarkList } from 'state/movie'

import { IMovieItem } from 'types/Movie'

import Card from 'components/Card'

const Bookmark = () => {
  const list = useRecoilValue<IMovieItem[]>(bookMarkList)

  return (
    <div>
      <h1>내 즐겨찾기</h1>
      <ul className={styles.movieList}>
        {list.map((item) => {
          return <Card key={item.imdbID} data={item} />
        })}
      </ul>
    </div>
  )
}

export default Bookmark
