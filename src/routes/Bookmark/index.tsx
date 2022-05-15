import styles from './Bookmark.module.scss'

import { useRecoilValue } from 'recoil'
import { bookMarkList } from 'state/movie'

import { IMovieItem } from 'types/Movie'

import Card from 'components/Card'
import InitalMessage from 'components/InitalMessage'

const Bookmark = () => {
  const list = useRecoilValue<IMovieItem[]>(bookMarkList)

  return (
    <div className={styles.bookmark}>
      <h1 className={styles.title}>나의 북마크</h1>
      {list.length > 0 ? (
        <ul className={styles.movieList}>
          {list.map((item) => {
            return <Card key={item.imdbID} data={item} />
          })}
        </ul>
      ) : (
        <InitalMessage message='북마크가 비었습니다.' />
      )}
    </div>
  )
}

export default Bookmark
