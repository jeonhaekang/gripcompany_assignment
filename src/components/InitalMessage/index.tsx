import { useLocation } from 'react-use'
import emptyResult from '../../assets/Image/emptyResult.png'
import styles from './InitalMessage.module.scss'

const InitalMessage = () => {
  const { pathname } = useLocation()
  return (
    <div className={styles.initialMessage}>
      <img src={emptyResult} alt='emptyResult' />
      <h1>{pathname === '/' ? '검색 결과가 없습니다.' : '북마크가 비었습니다.'}</h1>
    </div>
  )
}

export default InitalMessage
