import { getInput } from '../util'
import { runPart1, runPart2 } from './index'

let passes = []

beforeAll(async () => {
  passes = await getInput(5)
})
describe('day5 - boarding passes', () => {
  describe('sample', () => {
    test('sample boarding passes', () => {
      expect(runPart1(['BFFFBBFRRR'])).toBe(567)
      expect(runPart1(['FFFBBBFRRR'])).toBe(119)
      expect(runPart1(['BBFFBBFRLL'])).toBe(820)
    })
  })

  test('part1', () => {
    const result = runPart1(passes)

    expect(result).toBe(911)
  })

  test('part2', async () => {
    const result = runPart2(passes)

    expect(result).toBe(629)
  })
})
