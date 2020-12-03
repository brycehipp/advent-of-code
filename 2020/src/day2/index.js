export function runPart1(passwordData) {
  return passwordData.filter(d => {
    const [minMax, tempChar, pass] = d.split(' ')
    const [min, max] = minMax.split('-')
    const char = tempChar.replace(':', '')
    const charCount = (pass.match(new RegExp(char, 'g')) ?? []).length

    return charCount >= min && charCount <= max
  }).length
}

export function runPart2(passwordData) {
  return passwordData.filter(d => {
    const [minMax, tempChar, pass] = d.split(' ')
    const passChars = pass.split('')
    const [min, max] = minMax.split('-')
    const char = tempChar.replace(':', '')
    const minFound = passChars[min - 1] === char
    const maxFound = passChars[max - 1] === char

    if (minFound && maxFound) {
      return false
    }

    if (minFound || maxFound) {
      return true
    }

    return false
  }).length
}
