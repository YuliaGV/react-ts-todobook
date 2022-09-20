export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}

export interface TodoState {
    todoList: Todo[];
}