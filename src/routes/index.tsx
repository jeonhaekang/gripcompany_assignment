import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import Bookmark from './Bookmark'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
    </div>
  )
}

export default App
