import styles from './Card.module.scss'
import { memo, SyntheticEvent, useEffect, useState } from 'react'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { modalState } from 'state/modal'
import { bookMarkList } from 'state/movie'

import { IMovieItem } from 'types/Movie'

import { addBookmark, delBookmark, isBookmarked } from 'utils/localStorage'

import emptyImage from '../../assets/Image/emptyImage.png'
import { BookmarkIcon } from 'assets/svg'

interface Props {
  data: IMovieItem
}

const Card = ({ data }: Props) => {
  const { Poster, Title, Year, Type, imdbID } = data
  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)
  const setModalState = useSetRecoilState(modalState)

  const imageOnErrorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = emptyImage
  }

  const confirmAction = () => {
    setBookmarkList(isBookmark ? delBookmark(imdbID) : addBookmark(data))
  }

  const confirmMessage = () => {
    return isBookmark ? `북마크에서 삭제하시겠습니까?` : `북마크에 등록하시겠습니까?`
  }

  const onClickHandler = () => {
    setModalState((prev) => {
      return { ...prev, state: true, type: 'confirm', message: confirmMessage(), action: confirmAction }
    })
  }

  useEffect(() => {
    setIsBookmark(isBookmarked(imdbID))
  }, [bookmarkList, imdbID])

  return (
    <li className={styles.movieItem} onClick={onClickHandler} role='presentation'>
      {isBookmark && <BookmarkIcon />}
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

export default memo(Card)
