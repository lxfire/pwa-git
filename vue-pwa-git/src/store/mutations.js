export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const MULTI = 'multi'
export const HOMELOAD = 'homeload'

export default {
  [INCREMENT] (state, payload) {
    state.count += payload.count
  },
  [DECREMENT] (state, payload) {
    state.count -= payload.count
  },
  [MULTI] (state) {
    state.count *= state.count
  },
  [HOMELOAD] (state, payload) {
    state.homeData = payload
  }
}