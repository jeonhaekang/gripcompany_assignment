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
        <img src={Poster} alt={`${Title}-poster`} />
      </div>
      <dl>
        <dt>
          <h1>{Title}</h1>
        </dt>
        <dd>
          <ul>
            <li className={styles.chip}>{Type.toUpperCase()}</li>
            <li>
              <time className={styles.chip}>{Year}</time>
            </li>
          </ul>
        </dd>
      </dl>
    </li>
  )
}

export default Card
