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
    <div>
      <p>{modal.message}</p>
      <button type='button' onClick={onClickHandler}>
        확인
      </button>
    </div>
  )
}

export default Alert
