import { mutations, getters } from '@/store/store.js'

const { setFruits } = mutations
const { fruits } = getters

describe('Testing the store', () => {

  it('set fruits with a mutation', () => {
    const state = { fruits: null }

    setFruits(state, { name: 'Grapes' })
    expect(state.fruits.name).toMatch('Grapes')
  })

  it('check if the fruit getter works', () => {
    const fruitsArray = [
      {
        name: 'Grapes',
        color: 'Purple',
        tasty: true
      }
    ]
    const state = { fruits: fruitsArray}
    const getter = fruits(state);

    expect(getter).toEqual(state.fruits);
  })
})
