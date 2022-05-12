import emptyResult from '../../../assets/Image/emptyResult.png'
import styles from './InitalMessage.module.scss'

const InitalMessage = () => {
  return (
    <div className={styles.enterSearch}>
      <img src={emptyResult} alt='emptyResult' />
      <h1>검색 결과가 없습니다.</h1>
    </div>
  )
}

export default InitalMessage
