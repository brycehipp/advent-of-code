const validations = {
  byr(value) {
    if (value.length !== 4) return false
    return Number(value) >= 1920 && Number(value) <= 2002
  },
  iyr(value) {
    if (value.length !== 4) return false
    return Number(value) >= 2010 && Number(value) <= 2020
  },
  eyr(value) {
    if (value.length !== 4) return false
    return Number(value) >= 2020 && Number(value) <= 2030
  },
  hgt(value) {
    const isMetric = value.includes('cm')
    const isImperial = value.includes('in')

    if (!isMetric && !isImperial) return false
    const height = value.replace(/\D+/g, '')

    if (isMetric) return height >= 150 && height <= 193
    if (isImperial) return height >= 59 && height <= 76

    return false
  },
  hcl(value) {
    return /^#[0-9a-f]{6}$/.test(value)
  },
  ecl(value) {
    return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value)
  },
  pid(value) {
    return /^\d{9}$/.test(value)
  },
}
const requiredFields = Object.keys(validations)

export function runPart1(passports) {
  return passports.filter(pass =>
    requiredFields.every(f => pass.includes(`${f}:`)),
  ).length
}

export function runPart2(passports) {
  return passports.filter(pass => {
    const doFieldsExist = requiredFields.every(f => pass.includes(`${f}:`))
    if (!doFieldsExist) return false

    const areAllFieldsValid = pass
      .split(' ')
      .map(fieldData => {
        const [field, value] = fieldData.split(':')
        return field === 'cid' ? true : validations[field](value)
      })
      .every(Boolean)

    return areAllFieldsValid
  }).length
}
