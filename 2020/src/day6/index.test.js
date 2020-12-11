import { getInput } from '../util'
import { runPart1, runPart2 } from './index'

let questions = []

beforeAll(async () => {
  questions = await getInput(6, false)
})

const sampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe('day6 - customs!', () => {
  describe('sample', () => {
    test('counting all "yes"', () => {
      expect(runPart1(sampleInput)).toBe(11)
    })

    test('counting "yes" if everyone', () => {
      expect(runPart2(sampleInput)).toBe(6)
    })
  })

  test('part1', () => {
    const result = runPart1(questions)

    expect(result).toBe(6585)
  })

  test('part2', async () => {
    const result = runPart2(questions)

    expect(result).toBe(3276)
  })
})
