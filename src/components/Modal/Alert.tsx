import styles from './Modal.module.scss'

import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalState } from 'state/modal'

import { IModal } from 'types/Modal'

const Alert = () => {
  const resetModal = useResetRecoilState(modalState)
  const modal = useRecoilValue<IModal>(modalState)

  const onClickHandler = () => {
    resetModal()
  }

  return (
    <>
      <p className={styles.message}>{modal.message}</p>
      <div className={styles.buttonWrap}>
        <button className={styles.okBtn} type='button' onClick={onClickHandler}>
          확인
        </button>
      </div>
    </>
  )
}

export default Alert
