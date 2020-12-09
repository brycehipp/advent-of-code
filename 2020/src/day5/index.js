function convertToBinaryThenInt(data) {
  return data.map(d =>
    parseInt(
      d
        .replace(/B/g, '1')
        .replace(/R/g, '1')
        .replace(/F/g, '0')
        .replace(/L/g, '0'),
      2,
    ),
  )
}

export function runPart1(seatData) {
  return convertToBinaryThenInt(seatData)
    .sort((a, b) => a - b)
    .pop()
}

export function runPart2(seatData) {
  const seats = convertToBinaryThenInt(seatData).sort((a, b) => a - b)
  seats.pop()
  return seats.filter(s => seats.indexOf(parseInt(s, 10) - 1) === -1).pop() - 1
}
