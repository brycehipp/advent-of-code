export function runPart1({ nums = [], sum = 0 }) {
  const map = {}

  for (const num of nums) {
    const diff = sum - num
    if (map[diff]) {
      return {
        pair: [num, diff],
        total: num * diff,
      }
    }
    map[num] = 1
  }

  return {
    pair: [],
    total: 0,
  }
}
