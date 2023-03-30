import { createTypedHooks } from 'easy-peasy'
import { IRocketsModel } from './types'

const typedHooks = createTypedHooks<IRocketsModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
