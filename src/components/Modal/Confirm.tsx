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
    <div>
      <p>{modal.message}</p>
      <button type='button' onClick={confirmHandler}>
        {modal.buttonMessage}
      </button>
      <button type='button' onClick={modalCloseHandler}>
        닫기
      </button>
    </div>
  )
}

export default Confirm
