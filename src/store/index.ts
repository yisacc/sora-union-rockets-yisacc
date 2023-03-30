import { action, createStore } from "easy-peasy";
import { IRocketsModel } from './types'

export const store = createStore<IRocketsModel>({
  rockets: [],

  addRocket: action((state, payload) => {
    state.rockets.push(payload)
  }),

  removeRocket: action((state, payload) => {
    state.rockets = state.rockets.filter((rocket) => rocket.id !== payload)
  }),

  updateRocket: action((state, payload) => {
    const { id, newRocket } = payload
    state.rockets = state.rockets.map((existingRocket) => {
      if (existingRocket.id === id) {
        return { ...existingRocket, ...newRocket }
      }
      return existingRocket
    })
  }),
})
