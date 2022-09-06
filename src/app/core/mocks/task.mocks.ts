import { ITask, Priority } from "src/app/modules/list/interfaces/task";

export const ListTask: ITask[] = [
    {id: 2, title: "Task 1", priority: Priority.normal, description: "Description.", ready: false},
    {id: 3, title: "Task 2", priority: Priority.high, description: "Description.", ready: false},
    {id: 4, title: "Task 3", priority: Priority.low, description: "Description.", ready: true},
    {id: 1, title: "Task 4", priority: Priority.normal, description: "Description.", ready: false},
    {id: 5, title: "Task 5", priority: Priority.middle, description: "Description.", ready: false},
    {id: 6, title: "Task 6", priority: Priority.normal, description: "Description.", ready: true},
    {id: 7, title: "Task 7", priority: Priority.middle, description: "Description.", ready: false},
    {id: 8, title: "Task 8", priority: Priority.high, description: "Description.", ready: false},
    {id: 9, title: "Task 9", priority: Priority.low, description: "Description.", ready: false},
    {id: 10, title: "Task 10", priority: Priority.normal, description: "Description.", ready: false},
    {id: 11, title: "Task 11", priority: Priority.normal, description: "Description.", ready: false},
    {id: 12, title: "Task 12", priority: Priority.high, description: "Description.", ready: false}
]