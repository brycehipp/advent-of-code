import fs from 'fs'
import path from 'path'

export async function getInput(day, split = true) {
  const inputPath = path.join(__dirname, `day${day}/input.txt`)
  try {
    const fileData = await fs.promises.readFile(inputPath, {
      encoding: 'UTF-8',
    })
    return split ? fileData.split('\n') : fileData
  } catch (err) {
    console.error(err)
    return []
  }
}
