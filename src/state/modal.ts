import { IModal } from '../types/Modal.d'
import { atom } from 'recoil'

export const modalState = atom<IModal>({
  key: '#modalState',
  default: {
    state: false,
    type: 'alert',
    message: '',
    action: () => {},
    buttonMessage: '확인',
  },
})
