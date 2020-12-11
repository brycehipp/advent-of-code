export function runPart1(input) {
  const answers = input
    .replace(/\n\n/g, ':')
    .replace(/\n/g, '')
    .split(':')
    .map(group => [...new Set(group)].join(''))
    .reduce((answerMap, group) => {
      group.split('').forEach(answer => {
        // eslint-disable-next-line no-param-reassign
        answerMap[answer] = (answerMap[answer] ?? 0) + 1
      })
      return answerMap
    }, {})

  const answerSum = Object.values(answers).reduce((sum, q) => sum + q, 0)
  return answerSum
}

export function runPart2(input) {
  return input
    .split(/\n\n/g)
    .map(group => {
      return group
        .split('\n')
        .map(person => new Set(person))
        .reduce(
          (groupsAnswers, answer) =>
            new Set([...groupsAnswers].filter(v => answer.has(v))),
        )
    })
    .reduce((sum, groupsAnswers) => sum + groupsAnswers.size, 0)
}
