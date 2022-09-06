export const enum Priority {
    low = "low",
    normal = "normal",
    middle = "middle",
    high = "high",
    all = "all"
}

export interface ITask {
    id: number,
    title: string,
    priority: Priority
    description: string
    ready: boolean
}
