import { calcPart1 } from './index'
import data from './input.json'

const sum = 2020

describe('sample', () => {
  const nums = [1721, 979, 366, 299, 675, 1456]

  test('numbers should match the example', () => {
    const expectedTotal = 514579
    const result = calcPart1({ nums, sum })

    expect(result.pair).toContain(1721)
    expect(result.pair).toContain(299)
    expect(result.total).toBe(expectedTotal)
  })
})

describe('part 1', () => {
  test('finding total', () => {
    const result = calcPart1({ nums: data, sum })

    expect(result).toBeTruthy()

    console.log('total:', result.total)
  })
})
