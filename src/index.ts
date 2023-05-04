import rootPath from 'app-root-path'
import { inspect } from 'util'

import { InputNode, OutputNode } from './types'

import readJSON from './utils/readJSON'
import writeJSON from './utils/writeJSON'
import buildNodeTree from './nodes/buildNodeTree'

async function main() {
    try {
        // Path to the JSON file that contains the array of nodes,
        // relative to the app root
        const [, , inputPath, outputPath] = process.argv

        if (!inputPath) {
            throw new Error('Please provide both an input and output path')
        }

        const nodes = await readJSON<InputNode[]>(rootPath.resolve(inputPath))

        const result = buildNodeTree(nodes)

        // If an output path was provided, save the result there,
        // in the form of JSON, otherwise log the result to the console.
        if (outputPath) {
            await writeJSON<OutputNode[]>(rootPath.resolve(outputPath), result)
        } else {
            console.log(inspect(result, undefined, null, true))
        }
    } catch (err) {
        console.error(err)
    }
}

main()
