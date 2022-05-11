import { IAlert } from '../types/Modal.d'
import { atom } from 'recoil'

export const alertState = atom<IAlert>({
  key: '#alertState',
  default: {
    state: false,
    message: '',
  },
})
