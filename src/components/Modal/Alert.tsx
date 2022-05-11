import styles from './Alert.module.scss'
import cx from 'classnames'

import { useEffect, useRef, useState } from 'react'

import { useRecoilValue, useResetRecoilState } from 'recoil'
import { alertState } from 'state/modal'

import { IAlert } from 'types/Modal'

let timeout: ReturnType<typeof setTimeout>

const Alert = () => {
  const alert = useRecoilValue<IAlert>(alertState)
  const resetAlert = useResetRecoilState(alertState)
  const [animationState, setAnimationState] = useState<boolean>(false)

  const outerRef = useRef<HTMLDivElement>(null)

  const clickEventHandler = (e: MouseEvent) => {
    if (e.target !== outerRef.current) return

    setAnimationState(true)

    timeout = setTimeout(() => {
      resetAlert()
    }, 300)
  }

  useEffect(() => {
    window.addEventListener('click', clickEventHandler)

    return () => {
      window.removeEventListener('click', clickEventHandler)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div ref={outerRef} className={cx(styles.outer, { [styles.fadeOut]: animationState })}>
      <div className={styles.inner}>{alert.message}</div>
    </div>
  )
}

export default Alert
