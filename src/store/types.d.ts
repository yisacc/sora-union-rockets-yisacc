import { IRocket } from '@/models/rocketForm'
import { Action } from 'easy-peasy'

export interface IStoreModel {
  rockets: IRocket[]
}

export interface IRocketsModel {
  rockets: IRocket[]
  addRocket: Action<IStoreModel, IRocket>
  removeRocket: Action<IStoreModel, number>
  updateRocket: Action<IStoreModel, { id: number; newRocket: IRocket }>
}
