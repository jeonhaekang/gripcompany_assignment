import styles from './Modal.module.scss'

import { useEffect, useRef } from 'react'

import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalState } from 'state/modal'

import Alert from './Alert'
import Confirm from './Confirm'

let timeout: ReturnType<typeof setTimeout>

const Modal = () => {
  const modal = useRecoilValue(modalState)
  const resetModal = useResetRecoilState(modalState)

  const outerRef = useRef<HTMLDivElement>(null)

  const clickEventHandler = (e: MouseEvent) => {
    if (e.target !== outerRef.current) return

    resetModal()
  }

  useEffect(() => {
    window.addEventListener('click', clickEventHandler)

    return () => {
      window.removeEventListener('click', clickEventHandler)
      clearTimeout(timeout)
    }
  }, [])

  if (!modal.state) {
    return null
  }

  return (
    <div ref={outerRef} className={styles.outer}>
      <div className={styles.inner}>
        {modal.type === 'alert' && <Alert />}
        {modal.type === 'confirm' && <Confirm />}
      </div>
    </div>
  )
}

export default Modal
