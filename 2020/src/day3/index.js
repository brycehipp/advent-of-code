function getTreeCount(map, right, down) {
  const height = map.length

  let rowIndex = 0
  let colIndex = 0
  let treeCount = 0

  while (rowIndex < height) {
    const row = map[rowIndex].split('')
    if (row[colIndex % row.length] === '#') {
      treeCount += 1
    }
    rowIndex += down
    colIndex += right
  }

  return treeCount
}

export function runPart1(map) {
  return getTreeCount(map, 3, 1)
}

export function runPart2(map, slopes) {
  return slopes
    .map(slope => getTreeCount(map, ...slope))
    .reduce((prev, curr) => prev * curr, 1)
}
