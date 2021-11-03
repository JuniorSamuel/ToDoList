export const enum Priority {
    low,
    normal,
    middle,
    high
}

export interface ITask {
    id: number,
    title: string,
    priority: Priority
}
