import fs from 'fs'

export default async function writeJSON<T>(path: string, input: T) {
    const contents = JSON.stringify(input, undefined, 4)
    const fileData = await fs.promises.writeFile(path, contents)

    return fileData
}
