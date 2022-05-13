import { MouseEventHandler } from 'react'
import { IMovieItem } from 'types/Movie'

export interface IModal {
  state: boolean
  type: string
  message: string
  action: Function
  buttonMessage: string
}
