import styles from './InitalMessage.module.scss'
import emptyResult from '../../assets/Image/emptyResult.png'

interface Props {
  message: string
}

const InitalMessage = ({ message }: Props) => {
  return (
    <div className={styles.initialMessage}>
      <img src={emptyResult} alt='emptyResult' />
      <h1>{message}</h1>
    </div>
  )
}

export default InitalMessage
