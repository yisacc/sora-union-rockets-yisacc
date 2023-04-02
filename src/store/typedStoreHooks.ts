import { createTypedHooks } from 'easy-peasy'
import { IRocketsModel } from './types'

export const { useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<IRocketsModel>()
