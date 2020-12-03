import fs from 'fs'
import path from 'path'

export async function getInput(day) {
  const inputPath = path.join(__dirname, `day${day}/input.txt`)
  try {
    const fileData = await fs.promises.readFile(inputPath, {
      encoding: 'UTF-8',
    })
    return fileData.split('\n')
  } catch (err) {
    console.error(err)
    return []
  }
}
