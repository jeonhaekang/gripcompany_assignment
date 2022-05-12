import { PleaseEnterKeywordIcon } from 'assets/svg'
import styles from './InitalMessage.module.scss'

const InitalMessage = () => {
  return (
    <div className={styles.enterSearch}>
      <PleaseEnterKeywordIcon />
      <h1>검색어를 입력해주세요.</h1>
    </div>
  )
}

export default InitalMessage
