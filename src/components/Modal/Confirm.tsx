import styles from './Modal.module.scss'

import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalState } from 'state/modal'

import { IModal } from 'types/Modal'

const Confirm = () => {
  const resetModal = useResetRecoilState(modalState)
  const modal = useRecoilValue<IModal>(modalState)

  const modalCloseHandler = () => {
    resetModal()
  }

  const confirmHandler = () => {
    modal.action()
    resetModal()
  }

  return (
    <>
      <p className={styles.message}>{modal.message}</p>
      <div className={styles.buttonWrap}>
        <button className={styles.okBtn} type='button' onClick={confirmHandler}>
          {modal.buttonMessage}
        </button>
        <button className={styles.cancleBtn} type='button' onClick={modalCloseHandler}>
          닫기
        </button>
      </div>
    </>
  )
}

export default Confirm
