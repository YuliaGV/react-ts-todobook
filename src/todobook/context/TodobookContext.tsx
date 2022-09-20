import { createContext } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';



export type TodobookContextProps = {
    todoState: TodoState,
    toogleTodo: (id: string) => void
    addTodo:(newTodo: Todo) =>void
    updateTodo:(editTodo: Todo) =>void 
    deleteTodo:(id: string) => void
}

export const TodobookContext = createContext<TodobookContextProps >({} as TodobookContextProps);

