import mutations from './mutations.loading'
import actions from './actions.loading'

const commit = jest.fn(),
  loading = true

let state

beforeEach(() => {
  state = {
    loading: false
  }
})

describe('Mutations', () => {
  test('SET_LOADING', () => {
    mutations.SET_LOADING(state, loading)
    expect(state.loading).toBe(loading)
  })
})

describe('Actions', () => {
  test('setLoading', async () => {
    actions.setLoading({ commit }, loading)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', loading)
  })
})