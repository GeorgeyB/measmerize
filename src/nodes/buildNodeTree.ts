import { InputNode, OutputNode } from '../types'

export default function buildNodeTree(
    nodes: InputNode[],
    parentId: null | string = null
): OutputNode[] {
    // Get a list of items from input nodes by parentId
    const items = nodes.filter((node) => node.parentId === parentId)

    // Recursively add children to each item
    const outputNodes: OutputNode[] = items.map((item) => ({
        ...item,
        children: buildNodeTree(nodes, item.nodeId),
    }))

    // Sort the list so that each item comes after the item
    // whose nodeId matches its previousSiblingId or stays at
    // the beginning if its previousSiblingId is null
    outputNodes.sort((a, b) => {
        if (a.previousSiblingId === b.nodeId) {
            return 1
        }

        if (b.previousSiblingId === a.nodeId) {
            return -1
        }

        return 0
    })

    return outputNodes
}
