import styles from './Card.module.scss'
import { SyntheticEvent } from 'react'

import { IMovieItem } from 'types/Movie'

import emptyImage from '../../assets/Image/emptyImage.png'

interface Props {
  data: IMovieItem
}

const Card = ({ data }: Props) => {
  const { Poster, Title, Year, Type } = data

  const imageOnErrorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = emptyImage
  }

  return (
    <li className={styles.movieItem}>
      <div>
        <img src={Poster} alt={`${Title}-poster`} onError={imageOnErrorHandler} />
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
