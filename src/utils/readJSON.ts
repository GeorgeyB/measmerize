import fs from 'fs'

export default async function readJSON<T>(path: string) {
    const fileData = await fs.promises.readFile(path)
    const result = JSON.parse(fileData.toString()) as T

    return result
}
