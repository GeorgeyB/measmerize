export interface InputNode {
    nodeId: string,
    name: string,
    parentId: string | null,
    previousSiblingId: string | null
}

export type OutputNode = InputNode & {
    children: OutputNode[]
}