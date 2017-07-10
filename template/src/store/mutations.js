import * as types from './mutation-types'
export const TEST = (state, data) => {
  state.testData = data
  console.log('state changed by TEST mutation')
}