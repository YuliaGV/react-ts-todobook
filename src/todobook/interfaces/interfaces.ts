export interface Todo {
    id: string;
    description: string;
    date: string;
    completed: boolean;
}

export interface TodoState {
    todoList: Todo[];
}