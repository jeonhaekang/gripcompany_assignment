import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'

import { useSetRecoilState } from 'recoil'
import { bookMarkList } from 'state/movie'

import { IMovieItem } from 'types/Movie'

import { getBookmark } from 'utils/localStorage'

import Main from './Main'
import Bookmark from './Bookmark'
import GNB from './_shared/GNB'
import Modal from 'components/Modal'

const App = () => {
  const initialBookmark = useSetRecoilState<IMovieItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <div className={styles.mobileFrame}>
      <Modal />
      <div className={styles.appWrapper}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/bookmark' element={<Bookmark />} />
        </Routes>
      </div>
      <GNB />
    </div>
  )
}

export default App
