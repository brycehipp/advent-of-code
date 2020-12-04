import { getInput } from '../util'
import { runPart1, runPart2 } from './index'

let passwordData = []

beforeAll(async () => {
  passwordData = await getInput(2)
})

describe('day2 - finding valid passwords', () => {
  describe('sample', () => {
    const sampleData = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']

    test('2 out of 3 passwords should be valid for part 1', () => {
      const expectedNumOfValid = 2
      const numOfValid = runPart1(sampleData)

      expect(numOfValid).toBe(expectedNumOfValid)
    })

    test('1 out of 3 passwords should be valid for part 2', () => {
      const expectedNumOfValid = 1
      const numOfValid = runPart2(sampleData)

      expect(numOfValid).toBe(expectedNumOfValid)
    })
  })

  test('part1', async () => {
    const result = runPart1(passwordData)

    expect(result).toBe(620)
  })

  test('part2', async () => {
    const result = runPart2(passwordData)

    expect(result).toBe(727)
  })
})
