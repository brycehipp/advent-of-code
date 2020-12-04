import { getInput } from '../util'
import { runPart1 } from './index'

let data = []

beforeAll(async () => {
  data = await getInput(1)
})

const sum = 2020

describe('sample', () => {
  const nums = [1721, 979, 366, 299, 675, 1456]

  test('numbers should match the example', () => {
    const expectedTotal = 514579
    const result = runPart1({ nums, sum })

    expect(result.pair).toContain(1721)
    expect(result.pair).toContain(299)
    expect(result.total).toBe(expectedTotal)
  })
})

describe('part 1', () => {
  test('finding total for 2 items', () => {
    const result = runPart1({ nums: data, sum })

    expect(result.total).toBe(1016964)
  })
})

describe('part 2', () => {
  test.todo('finding total for 3 items')
})
