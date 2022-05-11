import styles from './Card.module.scss'

import { IMovieItem } from 'types/Movie'

interface Props {
  data: IMovieItem
}

const Card = ({ data }: Props) => {
  const { Poster, Title, Year, Type } = data

  return (
    <li className={styles.movieItem}>
      <div>
        <img src={Poster} alt={`${Title}포스터`} />
      </div>
      <dl>
        <dt>
          <h1>{Title}</h1>
        </dt>
        <dd>
          <div className={styles.chip}>{Type.toUpperCase()}</div>
          <div className={styles.chip}>{Year}</div>
        </dd>
      </dl>
    </li>
  )
}

export default Card
