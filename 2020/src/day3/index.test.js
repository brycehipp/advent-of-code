import { getInput } from '../util'
import { runPart1, runPart2 } from './index'

let map = []

beforeAll(async () => {
  map = await getInput(3)
})

describe('day3 - 🌲 counting trees 🌲', () => {
  describe('sample', () => {
    const sampleData = [
      '..##.........##.........##.........##.........##.........##.......',
      '#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..',
      '.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.',
      '..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#',
      '.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.',
      '..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....',
      '.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#',
      '.#........#.#........#.#........#.#........#.#........#.#........#',
      '#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...',
      '#...##....##...##....##...##....##...##....##...##....##...##....#',
      '.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#',
    ]

    test('7 trees should be in the path', () => {
      const expected = 7
      const numOfTrees = runPart1(sampleData)

      expect(numOfTrees).toBe(expected)
    })

    test('trees multiplied together should be 336', () => {
      const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ]
      const numOfTrees = runPart2(sampleData, slopes)

      expect(numOfTrees).toBe(336)
    })
  })

  test('part1', async () => {
    const result = runPart1(map)

    expect(result).toBe(178)
  })

  test('part2', async () => {
    const slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ]
    const result = runPart2(map, slopes)

    expect(result).toBe(3492520200)
  })
})
